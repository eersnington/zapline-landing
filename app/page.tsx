import { Briefer } from "@/components/landing/briefer";
import { Hero } from "@/components/landing/hero";
import BenefitsShowcase from "@/components/landing/benefits-showcase";
import StackedSections from "@/components/landing/scroller";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <section className="flex flex-col items-center justify-center gap-8 py-20 md:py-32 px-4 text-center">
          <Hero />
          <Briefer />
        </section>
        <section className="w-full my-12">
          <BenefitsShowcase />
        </section>
        <section className="w-full my-12">
          <StackedSections />
        </section>
      </div>
    </div>
  );
}
