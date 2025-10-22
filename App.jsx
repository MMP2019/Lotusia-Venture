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
            Melbourne-based hospitality group focused on introducing and scaling premium café brands across Victoria — through disciplined operations and thoughtful design.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className={primaryBg + " text-white rounded-lg px-5 py-3"}>Email us</a>
            <a href="#about" className="rounded-lg px-5 py-3 border border-black/10 bg-white">About</a>
          </div>
        </div>
      </section>

      {/* About (one concise block) */}
      <section id="about" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>About</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Lotusia Venture Pty Ltd is a retail hospitality operator and investor. We specialise in
            multi-site franchise execution: site selection, lease negotiation, fit-out, recruitment,
            training and ongoing performance management. Our approach balances guest experience with
            robust unit economics.
          </p>
        </div>
      </section>

      {/* What we do (3 crisp pillars) */}
      <section id="capabilities">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>What we do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Master Franchise Operations"
                  body="Standardised SOPs, training, and quality control for consistent service across locations." />
            <Card title="New Store Development"
                  body="End-to-end delivery: site ID, design, construction management, launch and ramp-up." />
            <Card title="Financial Discipline"
                  body="Planning, cost control and reporting to protect margins and reinvest for growth." />
          </div>
        </div>
      </section>

      {/* Roadmap (compact) */}
      <section id="roadmap" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className={"text-2xl font-semibold " + primary}>Roadmap</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-4 text-sm">
            <Step when="Q4 2025" what="Secure flagship VIC site; appoint fit-out partners." accent={accent} />
            <Step when="Q1 2026" what="Open 1–2 hero stores; establish training hub." accent={accent} />
            <Step when="Q3 2026" what="CBD corridor expansion; optimise supply chain." accent={accent} />
            <Step when="2027"   what="Scale to 6–8 stores with resilient unit economics." accent={accent} />
          </ul>
        </div>
      </section>

      {/* Contact (single CTA) */}
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

/* ——— small, reusable presentational pieces ——— */

function Card(props) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <h3 className="font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{props.body}</p>
    </div>
  );
}

function Step(props) {
  return (
    <li className="rounded-xl border border-black/10 bg-white p-5">
      <div className={props.accent + " text-xs font-semibold"}>{props.when}</div>
      <div className="mt-2 text-slate-700">{props.what}</div>
    </li>
  );
}
