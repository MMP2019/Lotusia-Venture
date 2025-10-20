export default function LotusiaVentureLanding() {
  const primary = "text-[#1E3A5F]";
  const primaryBg = "bg-[#1E3A5F]";
  const accent = "text-[#8C6B4F]"; // coffee bronze
  const light = "#F4EFEA"; // warm ivory

  const features = [
    { title: "Master Franchise — Victoria", body: "We are developing % Arabica across Victoria with a disciplined, operations-first approach and a focus on iconic, high-footfall sites." },
    { title: "Retail Hospitality Group", body: "Lotusia Venture backs and operates multi-site beverage concepts with rigorous site selection, training, and data-led inventory control." },
    { title: "Partnership & Governance", body: "Structured shareholder alignment, clear ROFR protections, and performance-linked capital deployment for sustainable growth." },
  ];

  const roadmap = [
    { q: "Q4 2025", text: "Secure first flagship VIC site; finalize fit-out partners." },
    { q: "Q1 2026", text: "Launch 1–2 hero stores; establish training hub." },
    { q: "Q3 2026", text: "Expand into CBD corridors; optimize supply chain." },
    { q: "2027", text: "Scale to 6–8 stores with strong unit economics." },
  ];

  const faqs = [
    { q: "Are you accepting partner or landlord enquiries?", a: "Yes. We welcome conversations with site owners (100–150sqm prime corners) and aligned investors. Use the form below or email partners@lotusiaventure.com.au." },
    { q: "Do you operate other brands?", a: "Lotusia Venture is a retail hospitality platform. Our near-term priority is scaling % Arabica in Victoria while remaining open to synergistic concepts." },
    { q: "Where can I find your detailed deck?", a: "Request access via the contact form. We share our investment memo under NDA." },
  ];

  return (
    <div className="min-h-screen w-full scroll-smooth" style={{ background: light }}>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className={\`font-semibold tracking-wide \${primary}\`}>Lotusia Venture</a>
          <div className="hidden gap-6 sm:flex text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#focus" className="hover:opacity-70">Focus</a>
            <a href="#roadmap" className="hover:opacity-70">Roadmap</a>
            <a href="#governance" className="hover:opacity-70">Governance</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <a href="#contact" className={\`\${primaryBg} text-white rounded-xl px-4 py-2 text-sm shadow\`}>Enquire</a>
        </nav>
      </header>

      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs">
                <span>Retail Hospitality Group</span>
                <span className="w-1 h-1 rounded-full bg-black/30" />
                <span>Victoria, Australia</span>
              </div>
              <h1 className={\`mt-5 text-4xl font-semibold leading-tight sm:text-5xl \${primary}\`}>
                Building beloved beverage spaces —
                <span className={\`block \${accent}\`}>with discipline, design, and heart.</span>
              </h1>
              <p className="mt-5 max-w-xl text-black/70">
                Lotusia Venture develops and operates class‑leading cafés. Our current focus is the
                Victoria master rollout of <span className="italic">% Arabica</span>, elevating coffee culture across the state.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className={\`\${primaryBg} text-white rounded-xl px-5 py-3 shadow-md\`}>Partner with us</a>
                <a href="#focus" className="rounded-xl px-5 py-3 border border-black/10 bg-white">Our focus</a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-72 sm:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#EAE3DB] shadow-inner" />
              <div className="absolute inset-6 rounded-3xl bg-white shadow-xl" />
              <div className="absolute inset-0 grid place-items-center">
                <LotusMark />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className={\`text-2xl font-semibold \${primary}\`}>Who we are</h2>
              <p className="mt-4 text-black/70">
                We are an experienced multi‑site operator with eight years in franchised hospitality. Our mission is to
                ignite memorable, operationally excellent guest experiences while delivering resilient unit economics.
              </p>
              <ul className="mt-6 space-y-3 text-black/75">
                <li>• Site selection rigor: transport hubs, education precincts, CBD corridors</li>
                <li>• Training systems: barista craft, service choreography, food safety</li>
                <li>• Tech stack: POS + analytics for margin control and demand planning</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Highlights</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-black/60">Territory</dt><dd className={\`font-semibold \${primary}\`}>Victoria, AU</dd></div>
                <div><dt className="text-black/60">Current focus</dt><dd className="font-semibold">% Arabica rollout</dd></div>
                <div><dt className="text-black/60">Model</dt><dd className="font-semibold">Master franchise</dd></div>
                <div><dt className="text-black/60">Structure</dt><dd className="font-semibold">Lotusia Venture Pty Ltd</dd></div>
              </dl>
              <p className="mt-4 text-black/70 text-sm">For landlord packs & investor memo, request access below.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={\`text-2xl font-semibold \${primary}\`}>What we focus on</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-black/70 text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={\`text-2xl font-semibold \${primary}\`}>Roadmap</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {roadmap.map((r) => (
              <li key={r.q} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className={\`\${accent} text-xs font-semibold\`}>{r.q}</div>
                <div className="mt-2 text-sm text-black/75">{r.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="governance">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={\`text-2xl font-semibold \${primary}\`}>Governance</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Board & Structure</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                <li>• Public Officer & Managing Director: Vathana Poev</li>
                <li>• Non‑executive directors: Partners 1–3</li>
                <li>• ROFR, tag‑along & drag‑along protections</li>
                <li>• Transparent dividends; audited accounts</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Capital & Alignment</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                <li>• Founding equity vests over 3 years</li>
                <li>• Boba Tea (10% non‑voting) vests over 12 months</li>
                <li>• Year‑2 partner loan: $500k → 100 shares (1‑year vest)</li>
                <li>• Conditional loan repayment: 3/4/5‑year by NPAT thresholds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className={\`text-2xl font-semibold \${primary}\`}>FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-sm">{f.q}</h3>
                <p className="mt-2 text-sm text-black/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className={\`text-2xl font-semibold \${primary}\`}>Contact</h2>
            <p className="mt-2 text-black/70 text-sm">
              For sites, partnerships, or investment discussions, email us or book a call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:info@lotusiaventure.com.au" className={\`\${primaryBg} text-white rounded-xl px-5 py-3 shadow\`}>info@lotusiaventure.com.au</a>
              <a href="mailto:partners@lotusiaventure.com.au" className="rounded-xl px-5 py-3 border border-black/10 bg-white">partners@lotusiaventure.com.au</a>
              <a href="#home" className="rounded-xl px-5 py-3 border border-black/10 bg-white">Back to top</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-black/60 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Lotusia Venture Pty Ltd. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-70">Privacy</a>
            <a href="#" className="hover:opacity-70">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LotusMark() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40">
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
        <path d="M25 100c22 0 38 5 50 14s18 22 20 46c-22 0-38-5-50-14S27 124 25 100z" />
        <path d="M175 100c-22 0-38 5-50 14s-18 22-20 46c22 0 38-5 50-14s20-22 20-46z" />
      </g>
    </svg>
  );
}
