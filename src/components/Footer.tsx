import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import spiderLogo from "@/assets/spider-logo.png";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    const { error } = await supabase.from("subscribers").insert({ email });
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="relative border-t border-border/60 bg-surface/30 mt-20">
      <div className="absolute inset-0 -z-10 web-bg opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={spiderLogo} alt="" width={36} height={36} className="w-9 h-9" />
            <div className="leading-tight">
              <div className="font-display text-base tracking-wider">CIVILIANS CORP.</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.3em]">SPIDER-VERSE EDITION</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mb-6">
            Spider-tuned Free Fire sensitivity & optimizer packs by competitive players, for the next
            generation of mobile heroes.
          </p>
          <form onSubmit={subscribe} className="flex gap-2 max-w-sm">
            <input
              name="email"
              type="email"
              required
              placeholder="Get drop alerts"
              className="flex-1 bg-background/60 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="btn-spider text-sm py-2.5 px-4" disabled={status === "loading"}>
              {status === "success" ? "✓" : "Join"}
            </button>
          </form>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest mb-4 text-primary">EXPLORE</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#packages" className="hover:text-foreground transition">Packages</a></li>
            <li><a href="#how" className="hover:text-foreground transition">How it Works</a></li>
            <li><a href="#reviews" className="hover:text-foreground transition">Reviews</a></li>
            <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest mb-4 text-primary">CONTACT</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Civilians Corp. Ltd</li>
            <li>support@civilianscorp.com</li>
            <li>+977 9766892391</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground px-4">
        © {new Date().getFullYear()} Civilians Corp. Ltd — Spider-Verse Edition. Not affiliated with Marvel or Garena.
      </div>
    </footer>
  );
}
