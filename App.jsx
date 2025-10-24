export default function LotusiaMinimal() {
  // Brand tokens
  const primary   = "text-[#1E3A5F]";
  const primaryBg = "bg-[#1E3A5F]";
  const accent    = "text-[#8C6B4F]";
  const bg        = "#F7F6F3"; // softer than pure white
  const email     = "info@lotusiaventure.com.au";

  return (
    <div className="min-h-screen w-full text-slate-900" style={{ background: bg }}>
      {/* Nav (simple) */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <nav className="mx-auto max-w-5xl px-4 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Lotusia Venture" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
            <span className={"font-semibold " + primary}>Lotusia Venture</span>
          </div>
          <a href="#contact" className={primaryBg + " text-white rounded-lg px-4 py-2 text-sm"}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24 grid place-items-center text-center">
          <img src="/logo.png" alt="Lotusia Venture logo" className="h-28 md:h-36 lg:h-44 w-auto object-contain opacity-90" />
          <h1 className={"mt-6 text-4xl md:text-5xl font-semibold leading-tight " + primary}>
            Integrity in Growth
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Melbourne based hospitality group focused on introducing and scaling premium retail brands across Victoria — through disciplined operations and thoughtful design.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className={primaryBg + " text-white rounded-lg px-5 py-3"}>Email us</a>
            <a href="#about" className="rounded-lg px-5 py-3 border border-black/10 bg-white">About</a>
          </div>
        </div>
      </section>

      {/* ABOUT (concise) */}
      <section id="about" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>About</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Lotusia Venture Pty Ltd is a retail hospitality operator and investor. We specialise in
            multi site franchise execution across Victoria, balancing guest experience with robust unit
            economics through standardised SOPs, training and financial discipline.
          </p>
        </div>
      </section>

      {/* VISION & MISSION (replaces “What we do”) */}
      <section id="vision">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>Vision & Mission</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold">Vision</h3>
              <p className="mt-2 text-sm text-slate-700">
                To establish and nurture globally admired brands across Victoria through
                world class operations, authentic experiences and sustainable growth.
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold">Mission</h3>
              <p className="mt-2 text-sm text-slate-700">
                To deliver consistently high quality hospitality, empower teams to excel, and build long term
                partnerships with leading global brands while protecting strong unit economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY PERSONNEL (replaces “Roadmap”) */}
      <section id="team" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>Key Personnel</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Person name="Vathana Poev" role="Managing Director"
                    blurb="Franchise operations, investment strategy and brand development; led two Sharetea stores from inception to multi-million-dollar operations." />
            <Person name="Leakana Chan" role="Operations Manager"
                    blurb="7+ years in F&B franchise ops; culture building, training, compliance and consistent guest experience." />
            <Person name="Sambath Kour" role="Operations Team Leader"
                    blurb="Leadership and compliance background; focused on reliable store execution and team performance." />
            <Person name="Thing Chau, CPA" role="Finance & Administration Lead"
                    blurb="Payroll and financial oversight; forecasting, cost control and regulatory compliance with external accountants." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="rounded-2xl border border-black/10 bg-white p-8 text-center">
            <h2 className={"text-2xl font-semibold " + primary}>Contact</h2>
            <p className="mt-2 text-slate-600">For sites, partnerships or investment enquiries:</p>
            <a href={"mailto:" + email} className={primaryBg + " inline-block mt-5 text-white rounded-lg px-6 py-3"}>
              {email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lotusia Venture Pty Ltd</span>
          <span className="hidden sm:inline">Victoria, Australia</span>
        </div>
      </footer>
    </div>
  );
}

/* ——— tiny presentational components ——— */

function Person(props) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <h3 className="font-semibold">{props.name}</h3>
      <div className="text-xs text-slate-500">{props.role}</div>
      <p className="mt-2 text-sm text-slate-700">{props.blurb}</p>
    </div>
  );
}
