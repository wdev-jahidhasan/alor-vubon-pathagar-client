import HeroSection from "./component/HeroSection";
import PopularBooks from "./component/PopularBooks";
import PresidentSecretary from "./component/PresidentSecretary";
import AboutUs from "./component/AboutUs.jsx";
import RecentEvents from "./component/RecentEvents.jsx";
import OurActivities from "./component/OurActivities.jsx.jsx";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <HeroSection />
      <PopularBooks></PopularBooks>
      <OurActivities></OurActivities>
      <RecentEvents></RecentEvents>
      <PresidentSecretary></PresidentSecretary>
      <AboutUs></AboutUs>
    </div>
  );
}