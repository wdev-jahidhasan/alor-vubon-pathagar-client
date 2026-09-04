"use client"
import Link from "next/link";
import { BookOpen, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80"
];

export default function HeroSection() {
  const words = ["বইয়ের পাতায় নিজেকে খুঁজি"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  // টাইপরাইটার ইফেক্ট
  useEffect(() => {
    let timer;
    const fullText = words[loopNum % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-slate-950">

      {/* ব্যাকগ্রাউন্ড ইমেজ স্লাইডশো উইথ ফেইড অ্যানিমেশন */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">

        <div className="space-y-6">
          {/* টাইপরাইটার অ্যানিমেশন ব্যাজ */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-white text-xs md:text-sm font-medium shadow-lg shadow-purple-900/20">
            <BookOpen size={16} className="text-white shrink-0" />
            <span className="text-white tracking-wide">
              {currentText}
              <span className="animate-pulse ml-0.5 text-purple-400 font-bold">|</span>
            </span>
          </div>

          {/* মূল হেডিং */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            স্বাগতম <span className="text-purple-400">আলোর ভুবন পাঠাগার</span>-এ
          </motion.h1>

          {/* ফুল হোয়াইট এবং স্পষ্ট সাবটাইটেল */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-white font-medium leading-relaxed drop-shadow-sm"
          >
            বই পড়ার অভ্যাস গড়ে তুলতে, জ্ঞানচর্চা বাড়াতে এবং আমাদের পাঠাগারের সকল কার্যক্রম এক ছাদের নিচে পেতে যুক্ত থাকুন
          </motion.p>

          {/* অ্যাকশন বাটনসমূহ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/books"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-violet-900/30"
            >
              <BookOpen size={18} />
              বইয়ের তালিকা দেখুন
            </Link>
            <Link
              href="/notices"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              <Bell size={18} />
              নোটিশ বোর্ড
            </Link>
          </motion.div>
        </div>

        {/* স্ট্যাটস সেকশন */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-6 border-t border-slate-800/60"
        >
          <div className="p-4 sm:p-5 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-xl">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1">১৫০০+</h4>
            <p className="text-xs sm:text-sm text-white">মোট বইয়ের সংখ্যা</p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-xl">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1">১৫০+</h4>
            <p className="text-xs sm:text-sm text-white">সক্রিয় পাঠক</p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-xl">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1">১০+</h4>
            <p className="text-xs sm:text-sm text-white">বইয়ের ক্যাটাগরি</p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-xl">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1">১০+</h4>
            <p className="text-xs sm:text-sm text-white">সফল ইভেন্ট</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}