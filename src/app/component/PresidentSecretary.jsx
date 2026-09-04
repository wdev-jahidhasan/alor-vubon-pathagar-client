"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, X, Award, ArrowRight, Phone, Mail } from "lucide-react";
import FullCommittee from "./FullCommittee";

export default function PresidentSecretary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      role: "সভাপতি",
      name: "মোঃ রাশেদ মিয়া",
      desc: "শিক্ষা ও সাহিত্য অনুরাগী, আলোর ভুবন পাঠাগার- এর প্রতিষ্ঠাতা",
      phone: "০১৭০০-০০০০০৯",
      email: "rashed@example.com",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: "সাধারণ সম্পাদক",
      name: "মোঃ ইমরান",
      desc: "সমাজকর্মী ও তরুণ সংগঠক, পাঠাগার পরিচালনা পর্ষদ",
      phone: "০১৭০০-০০০০১০",
      email: "imran@example.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

        {/* সেকশন হেডার */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            কার্যনির্বাহী <span className="text-purple-400">পরিষদ</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto px-2">
            যাঁদের প্রজ্ঞায় ও পরিশ্রমে আলোর ভুবন পাঠাগার এগিয়ে চলেছে সামনের দিকে
          </p>
        </div>

        {/* প্রেসিডেন্ট ও সেক্রেটারি কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 shadow-2xl backdrop-blur-md hover:border-purple-500/50 hover:shadow-purple-950/30 hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left overflow-hidden"
            >
              {/* ছবির র‍্যাপার উইথ গ্লো */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl object-cover border-2 border-purple-500/40 shadow-md"
                />
              </div>

              <div className="space-y-2 w-full flex flex-col justify-center min-w-0">
                <span className="inline-block px-3 py-0.5 bg-purple-950/80 text-purple-300 text-[11px] font-bold rounded-full border border-purple-800/50 w-fit mx-auto sm:mx-0 shadow-inner">
                  {leader.role}
                </span>

                <h3 className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-purple-300 transition-colors truncate">
                  {leader.name}
                </h3>

                {/* পার্পল কালার সেপারেটর */}
                <div className="w-10 h-[2px] bg-purple-500/60 rounded-full mx-auto sm:mx-0"></div>

                {/* ডেসক্রিপশন */}
                <p className="text-slate-300 text-xs leading-relaxed italic line-clamp-2">
                  {leader.desc}
                </p>

                {/* ফোন ও ইমেইল ইনফো */}
                <div className="text-slate-300 text-xs space-y-1 pt-2 border-t border-slate-800/80 mt-1">
                  <a href={`tel:${leader.phone}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-300 transition-colors">
                    <Phone size={13} className="text-purple-400 shrink-0" />
                    <span className="truncate">{leader.phone}</span>
                  </a>
                  <a href={`mailto:${leader.email}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-300 transition-colors">
                    <Mail size={13} className="text-purple-400 shrink-0" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* পূর্ণাঙ্গ কমিটি দেখার লিংক */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-xs sm:text-base lg:text-lg transition-colors group cursor-pointer"
          >
            পূর্ণাঙ্গ পরিষদ দেখুন <ArrowRight size={14} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* ফুল কমিটির মোডাল (Modal) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-slate-900 border border-slate-800 w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* মোডাল হেডার */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/85">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  <Award className="text-purple-400" size={22} />
                  পূর্ণাঙ্গ কার্যনির্বাহী কমিটি
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* মোডাল বডি */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
                <FullCommittee />
              </div>

              {/* মোডাল ফুটার */}
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/85 text-right">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors cursor-pointer text-sm"
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