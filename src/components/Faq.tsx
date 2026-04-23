import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is this safe? Will my account get banned?",
    a: "100% safe. We tune in-game settings and device performance — no mods, no scripts, no hacks. Garena-friendly.",
  },
  {
    q: "How fast will I get my pack?",
    a: "Within 24 hours after order confirmation. Most heroes get theirs within a few hours.",
  },
  {
    q: "Which devices are supported?",
    a: "Android & iOS, low to flagship tiers. We custom-tune for your exact device model.",
  },
  {
    q: "Do you offer refunds?",
    a: "If your sensi doesn't improve your performance after a fair test, we'll re-tune it free or refund your purchase.",
  },
  {
    q: "Can I upgrade later?",
    a: "Of course! Pay only the difference and we'll swing you up to the next tier.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-accent text-accent-foreground font-display px-4 py-1.5 rounded-lg comic-border text-sm rotate-[-2deg] mb-4">
            QUESTIONS?
          </div>
          <h2 className="text-4xl sm:text-5xl font-display">
            Spider-<span className="gradient-text">FAQ</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div
                  className={`glass-card rounded-xl overflow-hidden transition-all ${
                    isOpen ? "ring-2 ring-primary/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-display text-base sm:text-lg pr-4">{f.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
