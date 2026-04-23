import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { WebReticle } from "@/components/WebReticle";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Packages } from "@/components/Packages";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Civilians Corp. Ltd — Pro Free Fire Sensitivity & Optimizer Packs" },
      {
        name: "description",
        content:
          "Premium Free Fire sensitivity profiles and device optimizer packages tuned by pros. Boost aim, reduce latency, and dominate ranked.",
      },
      { property: "og:title", content: "Civilians Corp. Ltd — Pro Free Fire Tuning" },
      {
        property: "og:description",
        content:
          "Pro-tuned sensitivity & optimizer packs for Free Fire. Headshots, lower latency, ranked dominance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WebReticle />
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Packages />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
