import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-black text-primary-foreground animate-pulse-glow">
            C
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-wider">CIVILIANS CORP.</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em]">LTD</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            ["Packages", "#packages"],
            ["How it Works", "#how"],
            ["Reviews", "#reviews"],
            ["FAQ", "#faq"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-neon text-sm hidden sm:inline-flex">
          Order Now
        </a>
      </div>
    </header>
  );
}
