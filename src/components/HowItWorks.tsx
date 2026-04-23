import { Reveal } from "./Reveal";
import spidermanCrouch from "@/assets/spiderman-crouch.png";

const steps = [
  { n: "01", title: "Pick Your Suit", desc: "Choose Rookie, Spider, or Web-Slinger — the perfect pack for your playstyle." },
  { n: "02", title: "Send Device Info", desc: "Drop your device model & in-game ID via the order form or Discord." },
  { n: "03", title: "Receive Tuning Pack", desc: "We deliver your custom sensi + optimizer config within 24h." },
  { n: "04", title: "Web-Sling to Top 1%", desc: "Apply the settings, hop into ranked, and dominate." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative px-4 sm:px-6 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 web-bg opacity-30" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative flex justify-center order-2 lg:order-1">
            <div
              className="absolute inset-0 halftone-bg rounded-full opacity-40"
              style={{ maskImage: "radial-gradient(circle, black 25%, transparent 70%)" }}
            />
            <img
              src={spidermanCrouch}
              alt="Spider-Man crouching on a gargoyle"
              width={896}
              height={1024}
              loading="lazy"
              className="relative z-10 w-[80%] max-w-[420px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] animate-float"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="inline-block bg-primary text-primary-foreground font-display px-4 py-1.5 rounded-lg comic-border text-sm rotate-[-3deg] mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl sm:text-5xl font-display mb-8">
              From civilian to <span className="gradient-text">super-hero</span> in 4 swings.
            </h2>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="flex gap-4 glass-card rounded-2xl p-4 sm:p-5">
                  <div className="font-display text-3xl sm:text-4xl gradient-text leading-none flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-display text-lg sm:text-xl">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
