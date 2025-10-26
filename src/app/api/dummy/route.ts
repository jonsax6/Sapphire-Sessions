import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));
  return NextResponse.json({ ok: true, received: data });
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Dummy endpoint up" });
}
