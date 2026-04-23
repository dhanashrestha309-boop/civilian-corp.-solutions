import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div
        className="orbit-blob animate-float -z-10"
        style={{
          width: 480,
          height: 480,
          top: -100,
          left: -120,
          background: "oklch(0.78 0.18 195 / 0.45)",
        }}
      />
      <div
        className="orbit-blob animate-float -z-10"
        style={{
          width: 520,
          height: 520,
          bottom: -160,
          right: -140,
          background: "oklch(0.7 0.24 330 / 0.35)",
          animationDelay: "-4s",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="tracking-widest">CIVILIANS CORP. — FREE FIRE PERFORMANCE LAB</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] mb-6">
              Tune your aim.{" "}
              <span className="gradient-text">Dominate</span>
              <br /> the lobby.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Pro-tuned sensitivity profiles & device optimizer packs for Free Fire — engineered for
              precision, recoil control, and ranked dominance.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-wrap gap-4">
              <a href="#packages" className="btn-neon">
                Explore Packages
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost-neon">
                Order Now
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="flex items-center gap-6 mt-10 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {["from-primary to-accent", "from-accent to-primary", "from-primary to-accent"].map(
                  (g, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-background`}
                    />
                  ),
                )}
              </div>
              <div>
                <div className="text-foreground font-semibold">12,500+ players</div>
                <div>boosted this season</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 scan-overlay">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Live Tuning Console
                  </div>
                  <div className="font-display font-bold">Pro Pack — v4.2</div>
                </div>
                <div className="flex gap-1.5">
                  {["bg-destructive", "bg-accent", "bg-primary"].map((c, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "General", val: 92 },
                  { label: "Red Dot", val: 88 },
                  { label: "2x Scope", val: 76 },
                  { label: "4x Scope", val: 64 },
                  { label: "AWM Scope", val: 48 },
                ].map((s, i) => (
                  <div key={s.label} style={{ animation: `fade-up 0.6s ease-out ${i * 80 + 600}ms both` }}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="text-primary font-mono font-bold">{s.val}</span>
                    </div>
                    <div className="h-1.5 bg-background/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{
                          width: `${s.val}%`,
                          animation: `fade-up 1s ease-out ${i * 80 + 700}ms both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-black gradient-text">+38%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Headshot
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-black gradient-text">-22ms</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Latency
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-black gradient-text">+5 FPS</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Stability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
