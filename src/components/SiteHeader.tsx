import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import spiderLogo from "@/assets/spider-logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string][] = [
    ["Packages", "#packages"],
    ["How it Works", "#how"],
    ["Reviews", "#reviews"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={spiderLogo}
            alt="Civilians Corp logo"
            width={36}
            height={36}
            className="w-9 h-9 animate-pulse-spider rounded-full"
          />
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg tracking-wider">CIVILIANS CORP.</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em]">SPIDER-VERSE EDITION</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-spider text-xs sm:text-sm hidden sm:inline-flex">
            Suit Up
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground py-2"
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-spider justify-center">
              Suit Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
