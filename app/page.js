import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import EstateReveal from "@/components/EstateReveal";
import Worlds from "@/components/Worlds";
import Transformation from "@/components/Transformation";
import CinematicMoment from "@/components/CinematicMoment";
import Stories from "@/components/Stories";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <EstateReveal />
      <Worlds />
      <Transformation />
      <CinematicMoment />
      <Stories />
      <Process />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
