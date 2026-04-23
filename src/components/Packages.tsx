import { Reveal } from "./Reveal";

const packages = [
  {
    name: "Starter Pack",
    price: 9.99,
    tagline: "Perfect first upgrade",
    items: ["1 Sensitivity profile", "1 Optimizer file", "Quick setup guide", "Email delivery"],
    featured: false,
  },
  {
    name: "Pro Pack",
    price: 19.99,
    tagline: "Most popular",
    items: [
      "2 Sensitivity profiles",
      "2 Optimizer files",
      "Headshot tuning guide",
      "Priority delivery",
    ],
    featured: true,
  },
  {
    name: "Ultimate Bundle",
    price: 29.99,
    tagline: "Pro player setup",
    items: [
      "3 Sensitivity profiles",
      "3 Optimizer files",
      "1-on-1 setup support",
      "Lifetime updates",
    ],
    featured: false,
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
    <section id="packages" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-primary font-semibold mb-4">
            // PACKAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose your <span className="gradient-text">edge</span>
          </h2>
          <p className="text-muted-foreground">
            Tuned by pros. Delivered instantly. Built for ranked grinders, content creators, and
            tournament players.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <article
                className={`glass-card relative rounded-2xl p-8 h-full flex flex-col ${
                  pkg.featured ? "scan-overlay ring-1 ring-primary/40" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold mb-1">{pkg.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {pkg.tagline}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-display font-black gradient-text">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-1 text-sm">USD</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
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
                  className={pkg.featured ? "btn-neon w-full justify-center" : "btn-ghost-neon w-full justify-center"}
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
