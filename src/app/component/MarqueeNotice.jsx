"use client"
import Link from 'next/link';

export default function MarqueeNotice() {
  return (
    <div className="bg-slate-900/90 border-t border-slate-800 text-xs md:text-sm text-purple-300 py-2 overflow-hidden flex items-center relative w-full">

      {/* একদম গোল ও ছড়ানো ব্লিংকিং ডট */}
      <div className="flex items-center justify-center px-4 z-10 shrink-0">
        <span className="relative flex size-4 md:size-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] shrink-0"></span>
        </span>
      </div>

      {/* চলমান লেখা */}
      <div className="w-full overflow-hidden whitespace-nowrap relative flex items-center">
        <div className="inline-block animate-[marquee_18s_linear_infinite] font-medium tracking-wide">
          <span>আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি</span>
          <span className="mx-12 text-purple-500">•</span>
          <span>আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি</span>
          <span className="mx-12 text-purple-500">•</span>
          <span>আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি</span>
          <span className="mx-12 text-purple-500">•</span>
        </div>
      </div>

      {/* ডান পাশে ফিক্সড 'বিস্তারিত' বাটন */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center bg-gradient-to-l from-slate-900 via-slate-900/95 to-transparent pl-8 pr-4 z-20">
        <Link
          href="/notices"
          className="inline-flex items-center gap-1.5 bg-purple-950/80 hover:bg-purple-900 text-purple-300 hover:text-white px-3 py-1 rounded-md text-xs font-semibold border border-purple-800/60 shadow-md transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          <span>বিস্তারিত</span>
        </Link>
      </div>

      {/* মারকিউ অ্যানিমেশনের জন্য ইনলাইন স্টাইল */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}