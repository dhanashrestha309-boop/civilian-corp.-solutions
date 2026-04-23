import { Reveal } from "./Reveal";

const reviews = [
  { name: "WebHead_99", role: "Grandmaster", text: "Spider-sense unlocked. 14 booyahs in a row after the Spider Pack." },
  { name: "MJ_Sniper", role: "Heroic", text: "Recoil control is unreal. Headshots feel automatic now." },
  { name: "MilesM", role: "Diamond", text: "Latency dropped 30ms on my mid-range phone. Absolute swing." },
  { name: "GwenStacy", role: "Master", text: "Best $19.99 I've spent on FF. Customer support is elite." },
  { name: "Venom_X", role: "Heroic", text: "Custom config for my device, plug-and-play. 10/10." },
  { name: "ScarletSp", role: "Pro Player", text: "Tournament-ready in a day. Coaching call was a game-changer." },
];

const row = [...reviews, ...reviews];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-secondary text-secondary-foreground font-display px-4 py-1.5 rounded-lg comic-border text-sm rotate-[2deg] mb-4">
            HERO REVIEWS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display">
            Stories from the <span className="gradient-text">Spider-verse</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-5 sm:gap-6 animate-marquee w-max">
          {row.map((r, i) => (
            <article key={i} className="glass-card rounded-2xl p-6 w-[280px] sm:w-[340px] shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm">{r.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15 9 22 9 17 14 19 22 12 17 5 22 7 14 2 9 9 9" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
