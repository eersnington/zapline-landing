import { Briefer } from "@/components/landing/briefer";
import { Hero } from "@/components/landing/hero";
import { BenefitsShowcase } from "@/components/landing/benefits-showcase";
import StackedSections from "@/components/landing/scroller";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fccde1] via-[#fcc2c2] via-[#e4befd] to-[#f7c6a6]" />
      <div className="relative z-10">
        <section className="flex flex-col items-center justify-center gap-8 py-20 md:py-32 px-4 text-center">
          <Hero />
          <Briefer />
        </section>
        <BenefitsShowcase />
        <StackedSections />
      </div>
    </div>
  );
}
