"use client"
import { BookOpen, Award, GraduationCap, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function OurActivities() {
  const activities = [
    {
      icon: <BookOpen size={20} className="sm:w-6 sm:h-6" />,
      title: "বই সংরক্ষণ ও বিতরণ",
      desc: "পাঠকদের মাঝে নিয়মমাফিক বই ইস্যু ও ঘরে বসে পড়ার সুযোগ নিশ্চিত করা।"
    },
    {
      icon: <Award size={20} className="sm:w-6 sm:h-6" />,
      title: "কুইজ প্রতিযোগিতার আয়োজন",
      desc: "মেধা বিকাশে নিয়মিত কুইজ ও পঠনভিত্তিক প্রতিযোগিতার আয়োজন ও পুরস্কার বিতরণ।"
    },
    {
      icon: <GraduationCap size={20} className="sm:w-6 sm:h-6" />,
      title: "শিক্ষার প্রসার",
      desc: "সমাজের পিছিয়ে পড়া শিক্ষার্থীদের মাঝে পড়াশোনার আগ্রহ ও শিক্ষার আলো ছড়িয়ে দেওয়া।"
    },
    {
      icon: <HeartHandshake size={20} className="sm:w-6 sm:h-6" />,
      title: "সমাজসেবামূলক কার্যক্রম",
      desc: "পাঠাগার পরিচালনা ও সামাজিক বিভিন্ন উদ্যোগে তরুণ স্বেচ্ছাসেবকদের সম্পৃক্ত করা।"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-900">

      {/* সেকশনের মূল হেডিং অ্যানিমেশন */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8 sm:mb-12 space-y-2"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white">আমাদের <span className="text-purple-400">কার্যক্রমসমূহ</span></h2>
        <p className="text-white text-xs sm:text-base px-2">পাঠকদের জ্ঞানচর্চা ও সমাজের উন্নয়নে আমাদের নিয়মিত নানা উদ্যোগ</p>
      </motion.div>

      {/* ছোট স্ক্রিনে ২টা এবং বড় স্ক্রিনে ৪টি কার্ড ও স্মুথ এন্ট্রান্স অ্যানিমেশন */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {activities.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            key={index}
            className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all group flex flex-col shadow-xl"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-sm sm:text-lg font-bold text-white mb-2">{item.title}</h3>

            <div className="w-8 sm:w-12 h-[2px] bg-purple-500/50 rounded-full mb-2 sm:mb-3"></div>

            <p className="text-white text-[11px] sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}