import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Are these settings safe to use?",
    a: "100% safe. We only deliver in-game sensitivity values and device optimizer files. No mods, no hacks, no bans — ever.",
  },
  {
    q: "What devices are supported?",
    a: "We tune for Android, iOS, and emulator. Just tell us your model in the order form and we'll customise the files.",
  },
  {
    q: "How fast is delivery?",
    a: "Most orders are delivered within 2–6 hours. Ultimate Bundle gets priority delivery (under 1 hour).",
  },
  {
    q: "Do you offer refunds?",
    a: "If the files don't work on your device, we'll re-tune them for free or refund 100%. Just message us within 7 days.",
  },
  {
    q: "Can I get updates after buying?",
    a: "Ultimate Bundle includes lifetime updates whenever the game patches. Other packs can upgrade for a small fee.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-primary font-semibold mb-4">
            // FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Quick <span className="gradient-text">answers</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div
                  className={`glass-card rounded-xl overflow-hidden transition-all ${
                    isOpen ? "ring-1 ring-primary/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 ${
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
