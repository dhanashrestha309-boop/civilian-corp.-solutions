import { Reveal } from "./Reveal";

const reviews = [
  { name: "Amir K.", role: "Heroic Player", text: "First match after applying — instant headshots. The Pro Pack is unreal." },
  { name: "Jaya M.", role: "Content Creator", text: "Smoothest sensitivity I've ever used. My viewers think I bought aim hacks." },
  { name: "Raj P.", role: "Tournament Pro", text: "Tuned for my exact device. Worth 10x the price. Will buy again." },
  { name: "Mei L.", role: "Ranked Grinder", text: "Went from Diamond to Heroic in two weeks. Optimizer killed my lag too." },
  { name: "Carlos D.", role: "Squad Leader", text: "My whole squad bought the Ultimate. We're undefeated since." },
  { name: "Aisha R.", role: "New Player", text: "Setup guide was super clear. Aim feels natural now." },
];

const row = [...reviews, ...reviews];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-primary font-semibold mb-4">
            // PLAYERS LOVE IT
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Real players. <span className="gradient-text">Real wins.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 animate-marquee w-max">
          {row.map((r, i) => (
            <article
              key={i}
              className="glass-card rounded-2xl p-6 w-[340px] shrink-0"
            >
              <div className="flex gap-1 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground/90 mb-4 leading-relaxed">"{r.text}"</p>
              <div>
                <div className="font-display font-bold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
