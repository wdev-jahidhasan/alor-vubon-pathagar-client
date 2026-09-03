"use client"
import Link from "next/link";
import { BookOpen, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["বইয়ের পাতায় নিজেকে খুঁজি"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
      timer = setTimeout(() => setIsDeleting(true), 2000); // লেখা শেষ হলে ২ সেকেন্ড থামবে
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
        
        {/* টাইপরাইটার অ্যানিমেশনসহ সিঙ্গেল ফাইল সলিউশন এবং সাদা টেক্সট */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-white text-xs md:text-sm font-medium shadow-lg shadow-purple-900/20">
          <BookOpen size={16} className="text-white shrink-0" />
          <span className="text-white tracking-wide">
            {currentText}
            <span className="animate-pulse ml-0.5 text-purple-400 font-bold">|</span>
          </span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          স্বাগতম <span className="text-purple-400">আলোর ভুবন পাঠাগার</span>-এ
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed"
        >
          বই পড়ার অভ্যাস গড়ে তুলতে, জ্ঞানচর্চা বাড়াতে এবং আমাদের পাঠাগারের সকল কার্যক্রম এক ছাদের নিচে পেতে যুক্ত থাকুন।
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
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
    </section>
  );
}