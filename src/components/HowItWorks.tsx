import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Choose your pack",
    text: "Pick the package that fits your device and playstyle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Submit your details",
    text: "Send your Discord ID and device — we tune it to your hardware.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2 11 13" />
        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Receive instantly",
    text: "Files delivered to your inbox or Discord within hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Dominate ranked",
    text: "Push for Heroic & Grandmaster with crisp, calibrated aim.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-primary font-semibold mb-4">
            // PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            From order to <span className="gradient-text">victory</span>
          </h2>
          <p className="text-muted-foreground">Four steps. Zero hassle. Pure aim.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-primary">
                    <div className="w-6 h-6">{s.icon}</div>
                  </div>
                  <span className="font-display font-black text-3xl text-muted-foreground/30">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
