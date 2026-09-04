import HeroSection from "./component/HeroSection";
import PopularBooks from "./component/PopularBooks";
import PresidentSecretary from "./component/PresidentSecretary";
import AboutUs from "./component/AboutUs.jsx";
import RecentEvents from "./component/RecentEvents.jsx";
import OurActivities from "./component/OurActivities.jsx.jsx";
import PhotoGallery from "./component/PhotoGallery";
import MarqueeNotice from "./component/MarqueeNotice";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <MarqueeNotice></MarqueeNotice>
      <HeroSection />
      <PhotoGallery></PhotoGallery>
      <PopularBooks></PopularBooks>
      <OurActivities></OurActivities>
      {/* <RecentEvents></RecentEvents> */}
      <PresidentSecretary></PresidentSecretary>
      <AboutUs></AboutUs>
    </div>
  );
}