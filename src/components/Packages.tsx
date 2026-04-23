import { Reveal } from "./Reveal";

const packages = [
  {
    name: "Rookie Pack",
    tag: "Friendly Neighborhood",
    price: 9.99,
    items: ["1 Sensitivity profile", "1 Optimizer file", "Quick setup guide", "Email delivery"],
    featured: false,
    rotate: "-rotate-1",
  },
  {
    name: "Spider Pack",
    tag: "Spider-Sense Tuned",
    price: 19.99,
    items: ["2 Sensitivity profiles", "2 Optimizer files", "Headshot tuning guide", "Priority delivery"],
    featured: true,
    rotate: "rotate-0",
  },
  {
    name: "Web-Slinger",
    tag: "Pro Hero Setup",
    price: 29.99,
    items: ["3 Sensitivity profiles", "3 Optimizer files", "1-on-1 setup support", "Lifetime updates"],
    featured: false,
    rotate: "rotate-1",
  },
];

export function Packages() {
  const scrollToContact = (pkg: string) => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const select = document.getElementById("package") as HTMLSelectElement | null;
      if (select) select.value = pkg;
    }, 400);
  };

  return (
    <section id="packages" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 halftone-bg opacity-15" />
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-accent text-accent-foreground font-display px-4 py-1.5 rounded-lg comic-border text-sm rotate-[-3deg] mb-4">
            CHOOSE YOUR SUIT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-4">
            Pick your <span className="gradient-text">power</span>
          </h2>
          <p className="text-muted-foreground">
            Three tiers, one mission: turn you into the hero your lobby needs.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <article
                className={`glass-card relative rounded-3xl p-6 sm:p-8 h-full flex flex-col ${pkg.rotate} hover:rotate-0 transition-transform duration-500 ${
                  pkg.featured ? "ring-2 ring-primary shadow-[0_0_40px_oklch(0.58_0.24_25/0.4)]" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-display text-xs px-3 py-1 rounded-full comic-border">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{pkg.tag}</div>
                  <h3 className="text-2xl sm:text-3xl font-display mt-1">{pkg.name}</h3>
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-display gradient-text">${pkg.price}</span>
                  <span className="text-muted-foreground ml-1 text-sm">USD</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <svg
                          className="w-2.5 h-2.5 text-primary-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-foreground/90">{it}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToContact(pkg.name)}
                  className={pkg.featured ? "btn-spider w-full justify-center" : "btn-ghost-spider w-full justify-center"}
                >
                  Get {pkg.name}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
