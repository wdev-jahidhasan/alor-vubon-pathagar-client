"use client"
import Link from "next/link";
import { BookOpen, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Total 10 library and book related images
const backgroundImages = [
  // "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
];

export default function HeroSection() {
  const words = ["বইয়ের পাতায় নিজেকে খুঁজি"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [currentBgImage, setCurrentBgImage] = useState(backgroundImages[0]);

  // স্লাইডশো লজিক
  useEffect(() => {
    let isMounted = true;
    let index = 0;

    const runSlideshow = async () => {
      while (isMounted) {
        setCurrentBgImage(backgroundImages[index]);
        await new Promise((resolve) => setTimeout(resolve, 4000));
        if (!isMounted) break;

        setCurrentBgImage(null);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!isMounted) break;

        index = (index + 1) % backgroundImages.length;
      }
    };

    runSlideshow();

    return () => {
      isMounted = false;
    };
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
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/10 dark:border-slate-800 bg-[#ffffee] dark:bg-slate-950">

      {/* ব্যাকগ্রাউন্ড ইমেজ ইনস্ট্যান্ট লোড করার জন্য ব্রাউজার ক্যাশে প্রি-লোড রাখা হিডেন ট্যাগ */}
      <div className="hidden">
        {backgroundImages.map((src, idx) => (
          <img key={idx} src={src} alt="preload" />
        ))}
      </div>

      {/* ব্যাকগ্রাউন্ড স্লাইডশো */}
      <div className="absolute inset-0 z-0 bg-[#ffffee] dark:bg-slate-950">
        <AnimatePresence mode="wait">
          {currentBgImage && (
            <motion.div
              key={currentBgImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentBgImage})` }}
            />
          )}
        </AnimatePresence>

        {/* ব্যাকগ্রাউন্ড ওভারলে */}
        <div className="absolute inset-0 bg-[#ffffee]/10 dark:bg-slate-950/40 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">

        {/* মিনি স্ক্রিন বা মোবাইল ফ্রেন্ডলি আরও বেশি ট্রান্সপারেন্ট ব্যাকগ্রাউন্ড কার্ড */}
        <div className="space-y-6 bg-[#ffffee]/15 dark:bg-slate-950/20 backdrop-blur-md p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-lg border border-amber-900/10 dark:border-slate-800/40 max-w-4xl mx-auto">

          {/* টাইপরাইটার অ্যানিমেশন ব্যাজ */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffee]/70 dark:bg-purple-950/60 border border-amber-900/20 dark:border-purple-800/50 text-slate-800 dark:text-white text-xs md:text-sm font-medium shadow-sm">
            <BookOpen size={16} className="text-purple-700 dark:text-white shrink-0" />
            <span className="text-slate-900 dark:text-white tracking-wide">
              {currentText}
              <span className="animate-pulse ml-0.5 text-purple-700 dark:text-purple-400 font-bold">|</span>
            </span>
          </div>

          {/* মূল হেডিং */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white max-w-4xl mx-auto leading-tight drop-shadow-sm"
          >
            স্বাগতম <span className="text-purple-700 dark:text-purple-400">আলোর ভুবন পাঠাগার</span>-এ
          </motion.h1>

          {/* সাবটাইটেল */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed drop-shadow"
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
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ffffee]/80 hover:bg-[#ffffee] dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-950 dark:text-slate-200 border border-amber-900/20 dark:border-slate-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-6 border-t border-amber-900/10 dark:border-slate-800/60"
        >
          {/* স্ট্যাটস কার্ড */}
          <div className="p-4 sm:p-5 bg-[#ffffee]/20 dark:bg-slate-950/30 backdrop-blur-md border border-amber-900/10 dark:border-slate-800/50 rounded-xl shadow-sm">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-1">১৫০০+</h4>
            <p className="text-xs sm:text-sm text-slate-900 dark:text-white">মোট বইয়ের সংখ্যা</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#ffffee]/20 dark:bg-slate-950/30 backdrop-blur-md border border-amber-900/10 dark:border-slate-800/50 rounded-xl shadow-sm">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-1">১৫০+</h4>
            <p className="text-xs sm:text-sm text-slate-900 dark:text-white">সক্রিয় পাঠক</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#ffffee]/20 dark:bg-slate-950/30 backdrop-blur-md border border-amber-900/10 dark:border-slate-800/50 rounded-xl shadow-sm">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-1">১০+</h4>
            <p className="text-xs sm:text-sm text-slate-900 dark:text-white">বইয়ের ক্যাটাগরি</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#ffffee]/20 dark:bg-slate-950/30 backdrop-blur-md border border-amber-900/10 dark:border-slate-800/50 rounded-xl shadow-sm">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-1">১০+</h4>
            <p className="text-xs sm:text-sm text-slate-900 dark:text-white">সফল ইভেন্ট</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}