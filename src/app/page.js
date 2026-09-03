import FeaturesSection from "./component/FeaturesSection";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
}