export default function LotusiaVenture() {
  // Brand palette
  const primary   = "text-[#1E3A5F]";
  const primaryBg = "bg-[#1E3A5F]";
  const accent    = "text-[#8C6B4F]";
  const light     = "#F4EFEA";

  // Single contact email (as requested)
  const contactEmail = "info@lotusiaventure.com.au";

  // Site sections (from your Company Profile)
  const capabilities = [
    { title: "Multi-Store Franchise Ops", body: "Proven experience running multiple franchised outlets with consistent standards and strong unit economics." },
    { title: "New Store Development",     body: "Site ID, lease negotiation, fit-out, construction management and launch execution from concept to opening." },
    { title: "Financial Management",      body: "Privately funded; disciplined cost control, profitability focus and reinvestment to support multi-site growth." },
    { title: "Operational Excellence",    body: "SOPs, quality control, food safety compliance and staff training frameworks for reliable guest experiences." },
    { title: "Local Market Engagement",   body: "Deep knowledge of Victoria’s hospitality landscape to localise global brands and grow loyal communities." },
  ];

  const achievements = [
    "Opened and operated two new Sharetea stores during peak expansion.",
    "Scaled to a combined turnover of ~A$2.5m with year-on-year growth.",
    "Full lifecycle execution: site, design/fit-out, recruitment, training, marketing.",
    "Day-to-day ops: reporting, supply chain, and brand-standard compliance.",
    "Built and led a 20+ person team with strong service culture and accountability.",
  ];

  const team = [
    { name: "Vathana Poev", role: "Managing Director", blurb: "Franchise operations, investment strategy and brand development; led two Sharetea stores from inception to multi-million-dollar operations." },
    { name: "Leakana Chan", role: "Operations Manager", blurb: "7+ years in F&B franchise ops; culture building, team management, compliance and consistent guest experience." },
    { name: "Sambath Kour", role: "Operations Team Leader", blurb: "Leadership and compliance background from a highly regulated industry; focused on reliable store execution." },
    { name: "Thing Chau", role: "Finance & Administration Lead (CPA)", blurb: "Payroll and financial oversight; works with external accountants on forecasting, cost control and regulatory compliance." },
    { name: "Ghee Eng Ong", role: "Business Development Advisor", blurb: "Advises on site selection, franchise negotiations and expansion planning across Victoria." },
  ];

  const roadmap = [
    { q: "Q4 2025", text: "Secure first flagship VIC site; lock in fit-out partners." },
    { q: "Q1 2026", text: "Open 1–2 hero stores; establish training hub and SOP cadence." },
    { q: "Q3 2026", text: "CBD corridor expansion; supply-chain optimisation." },
    { q: "2027",   text: "Scale to 6–8 stores with resilient unit economics." },
  ];

  return (
    <div className="min-h-screen w-full scroll-smooth" style={{ background: light }}>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className={"font-semibold tracking-wide " + primary}>Lotusia Venture</a>
          <div className="hidden gap-6 sm:flex text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#vision" className="hover:opacity-70">Vision</a>
            <a href="#capabilities" className="hover:opacity-70">Capabilities</a>
            <a href="#track" className="hover:opacity-70">Track Record</a>
            <a href="#team" className="hover:opacity-70">Team</a>
            <a href="#roadmap" className="hover:opacity-70">Roadmap</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <a href="#contact" className={primaryBg + " text-white rounded-xl px-4 py-2 text-sm shadow"}>Enquire</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs">
                <span>Retail Hospitality Group</span>
                <span className="w-1 h-1 rounded-full bg-black/30" />
                <span>Victoria, Australia</span>
              </div>
              <h1 className={"mt-5 text-4xl font-semibold leading-tight sm:text-5xl " + primary}>
                Integrity in Growth
                <span className={"block " + accent}>Scaling premium café brands with disciplined execution.</span>
              </h1>
              <p className="mt-5 max-w-xl text-black/70">
                Lotusia Venture Pty Ltd is a Melbourne-based hospitality investment and operations company
                focused on introducing and growing premium franchise concepts across Victoria—beginning with % Arabica.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className={primaryBg + " text-white rounded-xl px-5 py-3 shadow-md"}>Contact us</a>
                <a href="#capabilities" className="rounded-xl px-5 py-3 border border-black/10 bg-white">What we do</a>
              </div>
            </div>

            {/* Simple emblem placeholder; swap for your ring-logo if desired */}
            <div className="relative mx-auto aspect-square w-72 sm:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#EAE3DB] shadow-inner" />
              <div className="absolute inset-6 rounded-3xl bg-white shadow-xl grid place-items-center">
                <LotusMark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className={"text-2xl font-semibold " + primary}>About Lotusia Venture</h2>
              <p className="mt-4 text-black/70">
                We bring globally recognised café and beverage brands to Victoria—brands that embody craftsmanship,
                consistency and design excellence. Our team blends operational expertise, disciplined financial
                management and deep local market knowledge to deliver long-term brand success.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Snapshot</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-black/60">Company</dt><dd className="font-semibold">Lotusia Venture Pty Ltd</dd></div>
                <div><dt className="text-black/60">Focus</dt><dd className="font-semibold">% Arabica Victoria</dd></div>
                <div><dt className="text-black/60">Model</dt><dd className="font-semibold">Master Franchise</dd></div>
                <div><dt className="text-black/60">Base</dt><dd className="font-semibold">Melbourne, VIC</dd></div>
              </dl>
              <p className="mt-4 text-black/70 text-sm">Contact: {contactEmail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={"text-2xl font-semibold " + primary}>Vision & Mission</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Vision</h3>
              <p className="mt-2 text-black/70">
                To establish and nurture globally admired café and beverage brands across Victoria—starting with % Arabica—
                through world-class operations, authentic experiences and sustainable growth.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Mission</h3>
              <p className="mt-2 text-black/70">
                To deliver consistently high-quality hospitality experiences, empower teams to achieve operational excellence,
                and form lasting partnerships with leading global brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={"text-2xl font-semibold " + primary}>Core Capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {capabilities.map(function(c) {
              return (
                <div key={c.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-black/70 text-sm">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={"text-2xl font-semibold " + primary}>Operational Background & Achievements</h2>
          <ul className="mt-6 space-y-2 text-black/75 text-sm">
            {achievements.map(function(a, i) { return <li key={i}>• {a}</li>; })}
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={"text-2xl font-semibold " + primary}>Team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
            {team.map(function(t) {
              return (
                <div key={t.name} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">{t.name}</h3>
                  <div className="text-xs text-black/60">{t.role}</div>
                  <p className="mt-2 text-black/70 text-sm">{t.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={"text-2xl font-semibold " + primary}>Roadmap</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {roadmap.map(function(r) {
              return (
                <li key={r.q} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                  <div className={accent + " text-xs font-semibold"}>{r.q}</div>
                  <div className="mt-2 text-sm text-black/75">{r.text}</div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className={"text-2xl font-semibold " + primary}>Contact</h2>
            <p className="mt-2 text-black/70 text-sm">
              For sites, partnerships or investment discussions, email us and we’ll respond promptly.
            </p>
            <div className="mt-6">
              <a href={"mailto:" + contactEmail} className={primaryBg + " inline-block text-white rounded-xl px-5 py-3 shadow"}>
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-black/60 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Lotusia Venture Pty Ltd. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#vision" className="hover:opacity-70">Vision</a>
            <a href="#capabilities" className="hover:opacity-70">Capabilities</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple geometric lotus mark; replace with your gold ring logo if desired
function LotusMark() {
  return (
    <svg viewBox="0 0 200 200" className="h-28 w-28">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A5F" stopOpacity=".95" />
          <stop offset="100%" stopColor="#8C6B4F" stopOpacity=".9" />
        </linearGradient>
      </defs>
      <g fill="url(#g1)">
        <path d="M100 20c15 20 22 40 22 60s-7 40-22 60c-15-20-22-40-22-60s7-40 22-60z" />
        <path d="M45 60c18 10 30 20 36 33 6 13 6 28-4 47-18-10-30-20-36-33-6-13-6-28 4-47z" />
        <path d="M155 60c-18 10-30 20-36 33-6 13-6 28 4 47 18-10 30-20 36-33 6-13 6-28-4-47z" />
        <path d="M25 100c22 0 38 5 50 14s-18 22-20 46c-22 0-38-5-50-14S27 124 25 100z" />
        <path d="M175 100c-22 0-38 5-50 14s-18 22-20 46c22 0 38-5 50-14s20-22 20-46z" />
      </g>
    </svg>
  );
}
