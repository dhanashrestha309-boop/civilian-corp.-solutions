import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";

const PACKAGES = ["Starter Pack", "Pro Pack", "Ultimate Bundle"] as const;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      discord: String(fd.get("discord") || "").trim(),
      package: String(fd.get("package") || ""),
      message: String(fd.get("message") || "").trim() || null,
    };
    const { error } = await supabase.from("orders").insert(payload);
    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2">
          <span className="inline-block text-xs tracking-[0.4em] text-primary font-semibold mb-4">
            // ORDER NOW
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Lock in your <span className="gradient-text">setup</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Submit your details and we'll send a payment link plus tuned files within hours.
          </p>

          <div className="space-y-4">
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
                <div className="font-medium text-sm">support@civilianscorp.com</div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.84 11.84 0 0012 0C5.37 0 0 5.37 0 12a11.86 11.86 0 001.64 6L0 24l6.2-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.82a9.79 9.79 0 01-5-1.36l-.36-.21-3.68.96.98-3.59-.23-.37A9.82 9.82 0 1121.82 12 9.83 9.83 0 0112 21.82z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">WhatsApp</div>
                <div className="font-medium text-sm">+977 9766892391</div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33A19.94 19.94 0 0014.61 4l-.21.42a18.6 18.6 0 014.21 1.34A18.61 18.61 0 0012 5a18.61 18.61 0 00-6.61 1.16A18.6 18.6 0 019.6 4.42L9.39 4a19.94 19.94 0 00-4.66 1.33A19.39 19.39 0 002 18.16a19.55 19.55 0 005.94 3 14.16 14.16 0 001.27-2.05 12.6 12.6 0 01-2-1l.49-.36A14 14 0 0012 18.5a14 14 0 004.3-.77l.49.36a12.6 12.6 0 01-2 1 14.16 14.16 0 001.27 2.05 19.55 19.55 0 005.94-3 19.39 19.39 0 00-2.73-12.83zM8.52 14.41a2.21 2.21 0 110-4.41 2.21 2.21 0 010 4.41zm6.96 0a2.21 2.21 0 110-4.41 2.21 2.21 0 010 4.41z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Discord</div>
                <div className="font-medium text-sm">discord.gg/civilianscorp</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Discord ID
              </label>
              <input
                name="discord"
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                placeholder="username#1234"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Package
              </label>
              <select
                id="package"
                name="package"
                required
                defaultValue="Pro Pack"
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              >
                {PACKAGES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Device & Notes
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
                placeholder="Tell us your device model and anything special..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-neon w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "Send Order Request"}
            </button>

            {status === "success" && (
              <div className="text-sm text-primary bg-primary/10 border border-primary/30 rounded-lg p-3 animate-fade-up">
                ✓ Order received! We'll reach out within hours.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg p-3">
                Something went wrong: {errorMsg}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
