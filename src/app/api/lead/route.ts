import { NextResponse } from "next/server";

// Quick GET so you can visit /api/lead and see it's up
export async function GET() {
  return NextResponse.json({ ok: true, message: "Lead endpoint up" });
}

// Read JSON or form submissions
async function readBody(req: Request) {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) return await req.json();
  const form = await req.formData();
  const out: Record<string, string> = {};
  for (const [k, v] of form.entries()) out[k] = String(v);
  return out;
}

// Handle POST from your form and forward it
export async function POST(req: Request) {
  try {
    const data = await readBody(req);

    // Honeypot: if hidden "company" is filled, it's a bot
    if ((data as any).company) return NextResponse.json({ ok: true });

    const url = process.env.WEBHOOK_URL;
    if (!url) {
      return NextResponse.json({ ok: false, error: "Missing WEBHOOK_URL" }, { status: 500 });
    }

    const payload = { source: "sapphiresessions.com", ts: new Date().toISOString(), ...data };

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await r.text(); // helpful if the upstream fails

    if (!r.ok) {
      console.error("Webhook error:", r.status, text);
      return NextResponse.json(
        { ok: false, error: "Webhook failed", status: r.status, body: text },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead endpoint error:", e);
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
