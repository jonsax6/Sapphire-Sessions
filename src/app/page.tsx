"use client";

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl tracking-tight">Sapphire Sessions</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#bands" className="hover:opacity-80">Band options</a>
            <a href="#quote" className="hover:opacity-80">Get a quote</a>
          </nav>
          <a href="#quote" className="hidden md:inline-flex rounded-xl px-4 py-2 bg-indigoDeep text-white hover:opacity-90">
            Book a consult
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
      {/* Background gradient (behind everything) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-cream via-white to-white"
    />

    {/* Content wrapper (above gradient) */}
    <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Live Music. Fair Pay.
          <span className="block text-slate-500 text-2xl md:text-3xl font-medium mt-3">
            Musician-owned collective for weddings & events in Western NC.
          </span>
        </h1>
        <p className="mt-6 text-slate-600 max-w-prose">
        We’re passionate musicians and seasoned event professionals who know how to make any celebration unforgettable. 
        As a musician-owned nonprofit collective, we cut out the middlemen—so every dollar you spend goes directly to 
        the artists performing for you. There are no booking-agent markups or corporate cuts, just world-class talent 
        at an honest price.
        <br/><br/>
        Many of our members are national and international touring professionals, including Grammy-winning artists, who 
        bring the same level of performance and production you’d see on major stages around the world. We don’t just 
        play background music—we deliver a full concert experience that your guests will remember long after the night 
        ends.
        <br/><br/>
        Our band is fully customizable, from an intimate 3-piece ensemble to a 14-piece powerhouse, tailored to fit your e
        vent’s vision and vibe. Whether it’s a wedding, festival, corporate event, or private celebration, we bring the 
        energy, professionalism, and musicianship to make it truly special.
        <br/><br/>
        Our band is fully customizable, from an intimate 3-piece ensemble to a 14-piece powerhouse, tailored to fit 
        your event’s vision and vibe. Whether it’s a wedding, festival, corporate event, or private celebration, we 
        bring the energy, professionalism, and musicianship to make it truly special.
        <br/><br/>
        We charge only a small management fee to cover our nonprofit’s basic overhead. Everything else goes straight 
        to the musicians—supporting working artists and helping keep live music thriving in our community.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#quote" className="rounded-xl px-5 py-3 bg-indigoDeep text-white hover:opacity-90">Get a Quote</a>
          <a href="#how" className="rounded-xl px-5 py-3 border border-slate-300 hover:border-slate-400">How it works</a>
        </div>
        <ul className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500">
          <li>🎷 Musician-owned</li>
          <li>💸 Fair-pay model</li>
          <li>📍 Western NC</li>
          <li>⭐ Wedding & corporate pros</li>
        </ul>
      </div>

    {/* ===== HOW IT WORKS ===== */}
    <section id="how" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        <p className="text-slate-600 mt-2">A simple, transparent booking flow.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-2xl border p-6 hover:shadow transition">
            <div className="text-2xl mb-2 text-brass font-bold">01</div>
            <h3 className="font-semibold text-lg">Inquire</h3>
            <p className="text-slate-600 mt-1 text-sm">
              Tell us your date, venue, vibe, and budget.
            </p>
          </div>

          <div className="rounded-2xl border p-6 hover:shadow transition">
            <div className="text-2xl mb-2 text-brass font-bold">02</div>
            <h3 className="font-semibold text-lg">Customize</h3>
            <p className="text-slate-600 mt-1 text-sm">
              A local music director crafts your perfect lineup.
            </p>
          </div>

          <div className="rounded-2xl border p-6 hover:shadow transition">
            <div className="text-2xl mb-2 text-brass font-bold">03</div>
            <h3 className="font-semibold text-lg">Celebrate</h3>
            <p className="text-slate-600 mt-1 text-sm">
              We handle logistics — you pack the dance floor.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===== BAND OPTIONS / PACKAGES ===== */}
    <section id="bands" className="py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Band options</h2>
        <p className="text-slate-600 mt-2">Mix and match lineups to fit your night.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {[
            { name: "Jazz Trio", desc: "Cocktail hour sophistication.", note: "1.5 hrs" },
            { name: "5-Piece Party Band", desc: "All-night dance floor energy.", note: "3 hrs" },
            { name: "8-Piece w/ Horns", desc: "Big sound, big night.", note: "3 hrs" },
            { name: "Ceremony Strings", desc: "Elegant entrance music.", note: "1 hr" },
            { name: "DJ + Live Hybrid", desc: "Seamless transitions + live flair.", note: "3 hrs" },
            { name: "Add-ons: MC / Lighting", desc: "Polish + ambiance.", note: "Event" },
          ].map((o) => (
            <div key={o.name} className="group aspect-[4/3] rounded-2xl bg-white border overflow-hidden p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-indigoDeep transition">{o.name}</h3>
                <p className="text-slate-600 mt-1 text-sm">{o.desc}</p>
              </div>
              <div className="text-xs text-slate-500">{o.note}</div>
            </div>
          ))}
        </div>

        {/* optional CTA strip */}
        <div className="mt-10 rounded-2xl border bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700">Not sure which lineup? We’ll recommend the perfect fit for your venue and crowd size.</p>
          <a href="#quote" className="inline-flex rounded-xl px-5 py-3 bg-indigoDeep text-white hover:opacity-90">Get a custom quote</a>
        </div>
      </div>
    </section>
    
    {/* ===== TESTIMONIALS ===== */}
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
        <p className="text-slate-600 mt-2">Real events. Real dance floors.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              quote: "Packed dance floor all night — and we loved supporting local musicians.",
              by: "Sara & Ben — Asheville",
            },
            {
              quote: "Professional from first email to last song. Zero stress, huge energy.",
              by: "Biltmore Estate planner",
            },
            {
              quote: "The horn section was unreal. Best band our team has hired.",
              by: "Corporate client — Greenville, SC",
            },
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border p-6 bg-cream/50">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— {t.by}</figcaption>
            </figure>
          ))}
        </div>

        {/* Optional: video/testimonial strip */}
        <div className="mt-10 rounded-2xl border bg-cream/40 p-6 flex items-center justify-between gap-4">
          <p className="text-slate-700 text-sm md:text-base">
            Want to see us live? Watch a 60-sec reel of recent weddings and events.
          </p>
          <a
            href="#"
            className="inline-flex rounded-xl px-5 py-3 bg-indigoDeep text-white hover:opacity-90"
          >
            Watch reel
          </a>
        </div>
      </div>
    </section>

    {/* ===== QUOTE FORM ===== */}
    <section id="quote" className="py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Get a custom quote</h2>
        <p className="text-slate-600 mt-2">
          We’ll reply within 24 hours with options and sample videos.
        </p>

        <form
          id="quote-form"
          className="grid gap-4 mt-10 max-w-3xl"
          action="/api/lead"
          method="post"
          onSubmit={(e) => {
            const input = (e.currentTarget.querySelector('#phone') as HTMLInputElement);
            if (input) {
              // strip non-digits before sending
              input.value = input.value.replace(/\D/g, '');
            }
          }}
        >

          {/* Honeypot (hidden field to catch bots) */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-3 gap-4">
            <input className="rounded-xl border p-3" name="name" placeholder="Name" required />
            <input className="rounded-xl border p-3" name="email" type="email" placeholder="Email" required />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              maxLength={14}
              className="rounded-xl border p-3"
              onChange={(e) => {
                // format as (XXX) XXX-XXXX while typing
                let v = e.target.value.replace(/\D/g, "").slice(0, 10);
                if (v.length > 6) v = `(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6)}`;
                else if (v.length > 3) v = `(${v.slice(0,3)}) ${v.slice(3)}`;
                e.target.value = v;
              }}
            />

          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input className="rounded-xl border p-3" name="date" type="date" placeholder="Event Date" />
            <input className="rounded-xl border p-3" name="venue" placeholder="Venue / Location" />
            <select className="rounded-xl border p-3" name="band">
              <option value="">Band size preference</option>
              <option>Jazz Trio</option>
              <option>5-Piece</option>
              <option>8-Piece w/ Horns</option>
              <option>Ceremony Strings</option>
              <option>DJ + Live</option>
            </select>
          </div>

          <select className="rounded-xl border p-3" name="budget">
            <option value="">Estimated budget</option>
            <option>{"<$2k"}</option>
            <option>$2k–$3k</option>
            <option>$3k–$5k</option>
            <option>$5k+</option>
          </select>

          <textarea className="rounded-xl border p-3 min-h-[120px]" name="notes"
                    placeholder="Tell us the vibe (genres, first dance, must-plays)"></textarea>

          <button className="rounded-xl px-5 py-3 bg-indigoDeep text-white hover:opacity-90 w-full md:w-auto">
            Get my quote
          </button>

          {/* Success / error messages (progressive enhancement) */}
          <p id="form-success" className="hidden text-green-700 text-sm mt-2">
            Thanks! We’ll reply within 24 hours.
          </p>
          <p id="form-error" className="hidden text-rose-700 text-sm mt-2">
            Something went wrong. Please email hello@sapphiresessions.com.
          </p>
        </form>
      </div>
    </section>


    {/* Hero media placeholder */}
    <div className="aspect-video w-full rounded-2xl bg-slate-100 shadow-inner flex items-center justify-center">
      <span className="text-slate-400">Performance video / image</span>
    </div>
  </div>
</section>

      {/* ===== TEST BOX (you can delete this once happy) ===== */}
      <section className="p-8">
        <div className="p-8 bg-cream text-indigoDeep text-center rounded-2xl shadow">
          <h2 className="text-3xl font-bold">Sapphire Sessions Colors Test</h2>
          <p className="mt-2 text-brass">If you can see this styled box, Tailwind is working!</p>
          <p className="mt-2 text-charcoal text-sm">Background should be cream, text indigoDeep/brass/charcoal.</p>
        </div>
      </section>
    </main>
  );
}
