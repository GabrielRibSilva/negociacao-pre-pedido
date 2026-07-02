import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { TimelineSection } from "@/components/TimelineSection";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <TimelineSection />
      </main>
    </>
  );
}