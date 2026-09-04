import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecentEvents() {
  const events = [
    {
      title: "কুইজ প্রতিযোগিতা",
      date: "১৫ ফেব্রুয়ারি, ২০২৬",
      location: "পাঠাগার প্রাঙ্গণ",
      category: "উৎসব",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "ফ্রি মেডিকেল ক্যাম্প",
      date: "২৮ জানুয়ারি, ২০২৬",
      location: "গ্রামের কেন্দ্রীয় মাঠ",
      category: "সমাজসেবা",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "চিত্রাঙ্কন প্রতিযোগিতা",
      date: "১০ জানুয়ারি, ২০২৬",
      location: "আলোর ভুবন পাঠাগার হলরুম",
      category: "প্রতিযোগিতা",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "মহান বিজয় দিবস উদযাপন",
      date: "১৬ ডিসেম্বর, ২০২৫",
      location: "পাঠাগার সভা কক্ষ",
      category: "আলোচনা",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">

        {/* সেকশন হেডার ও পার্পল সেপারেটর */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">সাম্প্রতিক <span className="text-purple-400">কার্যক্রম</span></h2>
          <p className="text-white text-xs sm:text-base px-2">পাঠাগারের আয়োজিত সাম্প্রতিক বিভিন্ন অনুষ্ঠান ও সমাজকল্যাণমূলক কার্যক্রম</p>
        </div>

        {/* ইভেন্ট কার্ড গ্রিড: মোবাইল ও ছোট স্ক্রিনে ২ কলাম, বড় স্ক্রিনে ৪ কলাম */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col"
            >
              <div className="h-28 sm:h-40 lg:h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-slate-950/80 backdrop-blur-md text-purple-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-purple-800/40">
                  {event.category}
                </span>
              </div>

              <div className="p-2.5 sm:p-4 lg:p-5 flex flex-col flex-grow space-y-1.5 sm:space-y-2">
                <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {event.title}
                </h3>

                <div className="w-8 sm:w-10 h-[2px] bg-purple-500/60 rounded-full my-0.5"></div>

                <div className="space-y-1 pt-1">
                  <p className="text-white text-[10px] sm:text-xs flex items-center gap-1.5 line-clamp-1">
                    <Calendar size={12} className="text-purple-400 shrink-0" />
                    {event.date}
                  </p>
                  <p className="text-white text-[10px] sm:text-xs flex items-center gap-1.5 line-clamp-1">
                    <MapPin size={12} className="text-purple-400 shrink-0" />
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* সব কার্যক্রম দেখুন বাটন */}
        {/* <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-xs sm:text-base lg:text-lg transition-colors group"
          >
            সব কার্যক্রম দেখুন <ArrowRight size={14} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}

      </div>
    </section>
  );
}