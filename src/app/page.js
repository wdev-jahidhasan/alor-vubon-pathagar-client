import FeaturesSection from "./component/OurActivities.jsx.jsx";
import HeroSection from "./component/HeroSection";
import PopularBooks from "./component/PopularBooks";
import PresidentSecretary from "./component/PresidentSecretary";
import StatsSection from "./component/StatsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <HeroSection />
      <PopularBooks></PopularBooks>
      <FeaturesSection />
      {/* <StatsSection /> */}
      <PresidentSecretary></PresidentSecretary>
    </div>
  );
}