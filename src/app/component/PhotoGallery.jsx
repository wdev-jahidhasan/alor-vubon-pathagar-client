"use client"
import { useState } from "react";
import { Calendar, MapPin, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("সব");

  const categories = ["সব", "উৎসব", "সমাজসেবা", "প্রতিযোগিতা", "সভা"];

  const photos = [
    {
      title: "গ্রীষ্মকালীন বইমেলা ও পাঠচক্র",
      category: "উৎসব",
      date: "জুলাই ২০২৬",
      location: "পাঠাগার চত্বর",
      desc: "গ্রীষ্মের ছুটির অবসরে স্থানীয় পাঠকদের বইমুখী করতে পাঠাগার প্রাঙ্গণে তিন দিনব্যাপী বর্ণাঢ্য গ্রীষ্মকালীন বইমেলা ও উন্মুক্ত পাঠচক্রের আয়োজন করা হয়...",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "বার্ষিক পুরস্কার বিতরণী ও সাংস্কৃতিক সন্ধ্যা",
      category: "উৎসব",
      date: "মে ২০২৬",
      location: "পাঠাগার মিলনায়তন",
      desc: "বছরজুড়ে বিভিন্ন প্রতিযোগিতায় বিজয়ী শিক্ষার্থী ও পাঠকদের মাঝে পুরস্কার বিতরণ এবং মনোজ্ঞ সাংস্কৃতিক অনুষ্ঠান",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "ফ্রি মেডিকেল ক্যাম্প ও স্বাস্থ্য সেবা",
      category: "সমাজসেবা",
      date: "মার্চ ২০২৬",
      location: "গ্রামের কেন্দ্রীয় মাঠ",
      desc: "বিনামূল্যে চিকিৎসা পরামর্শ, রক্ত গ্রুপ পরীক্ষা ও ওষুধ বিতরণ কার্যক্রমের একটি বিশেষ মুহূর্ত",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "অমর একুশে ও আন্তর্জাতিক মাতৃভাষা দিবস",
      category: "উৎসব",
      date: "ফেব্রুয়ারি ২০২৬",
      location: "পাঠাগার প্রাঙ্গণ ও শহিদ মিনার",
      desc: "ভাষা শহীদদের স্মরণে প্রভাতফেরী, ফুল অর্পণ এবং মাতৃভাষার মর্যাদা রক্ষায় বিশেষ আলোচনা সভা",
      image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "শীতবস্ত্র বিতরণ ও মানবিক সহায়তা",
      category: "সমাজসেবা",
      date: "ডিসেম্বর ২০২৫",
      location: "গ্রামের মূল চত্বর",
      desc: "শীতার্থ মানুষের মাঝে উষ্ণ কাপড় বিতরণের সময় ধারণকৃত একটি বিশেষ দৃশ্য",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "শিশু-কিশোরদের চিত্রাঙ্কন প্রতিযোগিতা",
      category: "প্রতিযোগিতা",
      date: "সেপ্টেম্বর ২০২৫",
      location: "পাঠাগার হলরুম",
      desc: "অংশগ্রহণকারী শিশুদের উৎসাহ দিতে আয়োজিত আনন্দঘন চিত্রাঙ্কন প্রতিযোগিতা",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "বৃক্ষরোপণ কর্মসূচি ও পরিবেশ সচেতনতা",
      category: "সমাজসেবা",
      date: "জুলাই ২০২৫",
      location: "পাঠাগার ও আশেপাশের এলাকা",
      desc: "পরিবেশ রক্ষার বার্তা নিয়ে পাঠাগার প্রাঙ্গণ ও রাস্তার পাশে বিভিন্ন ধরনের গাছের চারা রোপণ করা হয়",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "পাঠাগারের বার্ষিক সাধারণ সভা ও পরিকল্পনা",
      category: "সভা",
      date: "এপ্রিল ২০২৫",
      location: "পাঠাগার সভা কক্ষ",
      desc: "পাঠাগারের সার্বিক উন্নয়ন, নতুন সদস্য অন্তর্ভুক্তি এবং ভবিষ্যৎ কার্যক্রম নিয়ে কার্যনির্বাহী সভা",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const filteredPhotos = activeTab === "সব"
    ? photos
    : photos.filter(p => p.category === activeTab);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-[#ffffee] dark:bg-slate-950 border-b border-amber-900/10 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">

        {/* সেকশন হেডার */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            ফটো <span className="text-purple-700 dark:text-purple-400">গ্যালারি</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base px-2">
            আলোর ভুবন পাঠাগারের প্রতিটি আয়োজনের তথ্যবহুল ও নান্দনিক চিত্রমালা
          </p>
        </motion.div>

        {/* ক্যাটাগরি ফিল্টার ট্যাব */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${activeTab === cat
                ? "bg-purple-700 dark:bg-purple-600 text-white border-purple-700 dark:border-purple-500 shadow-lg shadow-purple-700/20 dark:shadow-purple-600/30"
                : "bg-amber-100/50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-300 border-amber-900/10 dark:border-slate-800 hover:border-purple-600/50 dark:hover:border-purple-500/50 hover:text-purple-700 dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* গ্যালারি গ্রিড */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={photo.title}
                onClick={() => setSelectedImage(photo)}
                className="group bg-white dark:bg-slate-900/60 border border-amber-900/10 dark:border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-600/50 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer flex flex-col shadow-sm dark:shadow-xl"
              >
                {/* ইমেজ কন্টেইনার */}
                <div className="h-32 sm:h-44 lg:h-48 overflow-hidden relative bg-amber-50 dark:bg-slate-950">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#ffffee]/90 dark:bg-slate-950/80 backdrop-blur-md text-purple-700 dark:text-purple-300 text-[9px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-purple-800/20 dark:border-purple-800/40">
                    {photo.category}
                  </span>

                  {/* হোভার ওভারলে */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 bg-purple-700 dark:bg-purple-600 text-white rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye size={16} />
                    </span>
                  </div>
                </div>

                {/* ইনফরমেশন বডি */}
                <div className="p-2.5 sm:p-4 flex flex-col flex-grow space-y-1.5 sm:space-y-2">
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h3>

                  <div className="w-8 h-[2px] bg-purple-600/60 rounded-full"></div>

                  <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs line-clamp-2 leading-relaxed">
                    {photo.desc}
                  </p>

                  <div className="pt-2 mt-auto border-t border-amber-900/10 dark:border-slate-800/80 space-y-1">
                    <p className="text-slate-600 dark:text-slate-400 text-[9px] sm:text-[11px] flex items-center gap-1">
                      <Calendar size={11} className="text-purple-600 dark:text-purple-400 shrink-0" />
                      {photo.date}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[9px] sm:text-[11px] flex items-center gap-1">
                      <MapPin size={11} className="text-purple-600 dark:text-purple-400 shrink-0" />
                      {photo.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* লাইটবক্স মডাল */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative max-w-2xl w-full bg-[#ffffee] dark:bg-slate-900 border border-amber-900/10 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >

              {/* হেডার / ক্লোজ বাটন */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-amber-900/10 dark:border-slate-800 bg-[#fbf7e4] dark:bg-slate-950">
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-400">
                  {selectedImage.category} বিভাগ
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-amber-100/60 dark:bg-slate-800/60 hover:bg-amber-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* মডাল ইমেজ */}
              <div className="bg-amber-50/50 dark:bg-slate-950 flex items-center justify-center max-h-[50vh] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[50vh] w-auto object-contain"
                />
              </div>

              {/* ডিটেইলস ইনফো */}
              <div className="p-4 sm:p-6 space-y-3 overflow-y-auto bg-[#ffffee] dark:bg-slate-900">
                <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedImage.desc}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 border-t border-amber-900/10 dark:border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Calendar size={14} className="text-purple-700 dark:text-purple-400" />
                    {selectedImage.date}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <MapPin size={14} className="text-purple-700 dark:text-purple-400" />
                    {selectedImage.location}
                  </span>
                </div>
              </div>

              {/* ফুটার */}
              <div className="px-4 sm:px-6 py-3 border-t border-amber-900/10 dark:border-slate-800 bg-[#fbf7e4] dark:bg-slate-950 text-right">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2 bg-amber-200/60 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium rounded-xl transition-colors cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}