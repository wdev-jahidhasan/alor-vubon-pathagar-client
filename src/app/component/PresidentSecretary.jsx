"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, X, Award, ShieldCheck } from "lucide-react";
import FullCommittee from "./FullCommittee";

export default function PresidentSecretary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // আরও বেশি প্রফেশনাল এবং ফরমাল লুকের ছবিসহ ডেটা
  const leaders = [
    {
      role: "সভাপতি",
      name: "মোঃ রাশেদ মিয়া",
      desc: "শিক্ষা ও সাহিত্য অনুরাগী, প্রতিষ্ঠাতা ও প্রধান উপদেষ্টা।",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: "সাধারণ সম্পাদক",
      name: "মোঃ ইমরান",
      desc: "সমাজকর্মী ও তরুণ সংগঠক, পাঠাগার পরিচালনা পর্ষদ।",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" // অত্যন্ত প্রফেশনাল ও ফরমাল লুক
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* সেকশন হেডার */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            কার্যনির্বাহী <span className="text-purple-400">পরিষদ</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            যাঁদের প্রজ্ঞায় ও পরিশ্রমে আলোর ভুবন পাঠাগার এগিয়ে চলেছে সামনের দিকে।
          </p>
        </div>

        {/* প্রেসিডেন্ট ও সেক্রেটারি কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.0,
                delay: index * 0.3,
                ease: [0.25, 0.1, 0.25, 1.0] // আরও সফট এবং স্মুথ ইজিং কার্ভ
              }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-28 h-28 rounded-xl object-cover border-2 border-purple-500/30 shadow-md"
              />
              <div className="text-center sm:text-left space-y-2">
                <span className="inline-block px-3 py-1 bg-purple-950/80 text-purple-300 text-xs font-semibold rounded-full border border-purple-800/40">
                  {leader.role}
                </span>
                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{leader.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ফুল কমিটি দেখার বাটন */}
        <div className="text-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-900/30 transition-all cursor-pointer"
          >
            <Users size={20} />
            পূর্ণাঙ্গ পরিষদ দেখুন
          </motion.button>
        </div>

      </div>

      {/* ফুল কমিটির মোডাল (Modal) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* মোডাল হেডার */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
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
              <div className="p-6 overflow-y-auto space-y-6">
                <FullCommittee />
              </div>

              {/* মোডাল ফুটার */}
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/50 text-right">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors cursor-pointer"
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