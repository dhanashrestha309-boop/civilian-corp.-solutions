import { Reveal } from "./Reveal";
import spidermanHero from "@/assets/spiderman-hero.png";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 web-bg opacity-60" />
      <div
        className="spider-blob animate-float -z-10"
        style={{ width: 480, height: 480, top: -100, left: -120, background: "oklch(0.58 0.24 25 / 0.55)" }}
      />
      <div
        className="spider-blob animate-float -z-10"
        style={{ width: 520, height: 520, bottom: -160, right: -140, background: "oklch(0.45 0.22 260 / 0.45)", animationDelay: "-4s" }}
      />

      {/* Decorative web shoot lines (desktop) */}
      <div className="hidden lg:block absolute top-32 left-0 w-1/3 web-line" style={{ animationDelay: "0.2s" }} />
      <div className="hidden lg:block absolute top-1/2 right-0 w-1/4 web-line" style={{ animationDelay: "1s", transform: "scaleX(-1)" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="tracking-widest">CIVILIANS CORP. — SPIDER-VERSE PERFORMANCE LAB</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] mb-6">
              With great <span className="gradient-text">aim</span>
              <br /> comes great <span className="gradient-text">victory</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              Spider-tuned sensitivity profiles & device optimizer packs for Free Fire — built to swing
              you into the top 1%, recoil-free and reflex-sharp.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#packages" className="btn-spider">
                Explore Packs
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost-spider">
                Order Now
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="flex items-center gap-6 mt-10 text-xs text-muted-foreground justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["from-primary to-secondary", "from-secondary to-primary", "from-primary to-accent"].map(
                  (g, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-background`}
                    />
                  ),
                )}
              </div>
              <div>
                <div className="text-foreground font-semibold">12,500+ heroes</div>
                <div>web-slinging this season</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative flex justify-center items-center min-h-[420px] sm:min-h-[520px]">
            {/* Halftone burst behind character */}
            <div className="absolute inset-0 halftone-bg rounded-full opacity-50 animate-flicker" style={{ maskImage: "radial-gradient(circle, black 20%, transparent 65%)" }} />
            {/* Comic stat bubbles */}
            <div className="absolute top-4 left-2 sm:left-6 z-20 animate-comic-pop" style={{ animationDelay: "0.5s" }}>
              <div className="bg-accent text-accent-foreground font-display px-3 py-1.5 rounded-lg comic-border text-sm rotate-[-8deg]">
                +38% HEADSHOT!
              </div>
            </div>
            <div className="absolute top-1/3 right-2 sm:right-4 z-20 animate-comic-pop" style={{ animationDelay: "0.9s" }}>
              <div className="bg-primary text-primary-foreground font-display px-3 py-1.5 rounded-lg comic-border text-sm rotate-[6deg]">
                THWIP!
              </div>
            </div>
            <div className="absolute bottom-6 left-4 sm:left-8 z-20 animate-comic-pop" style={{ animationDelay: "1.3s" }}>
              <div className="bg-secondary text-secondary-foreground font-display px-3 py-1.5 rounded-lg comic-border text-sm rotate-[-4deg]">
                -22ms LAG
              </div>
            </div>
            {/* Spider-Man character */}
            <img
              src={spidermanHero}
              alt="Spider-Man swinging on a web"
              width={1024}
              height={1280}
              className="relative z-10 w-[88%] max-w-[480px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] animate-swing"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
