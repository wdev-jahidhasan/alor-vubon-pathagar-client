"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function MarqueeNotice() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId;
    let scrollPosition = 0;
    const speed = 0.8;

    const step = () => {
      scrollPosition += speed;
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scroller.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-slate-950 border-b border-slate-900 py-1 w-full">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border-y sm:border border-slate-800 sm:rounded-lg text-xs md:text-sm text-purple-300 py-2 flex items-center relative overflow-hidden shadow-inner">

          {/* ছোট এবং সাদা আলো ছড়ানো খোলা বইয়ের আইকন */}
          <div className="flex items-center justify-center px-3 z-10 shrink-0">
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* সাদা রঙের গ্লোয়িং ও ব্লিংকিং অ্যানিমেশন */}
              <span className="animate-ping absolute inset-0 rounded-full bg-white opacity-50"></span>

              {/* খোলা বইয়ের আইকন (সাদা রঙের এবং ছোট সাইজের) */}
              <div className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                <BookOpen size={16} />
              </div>
            </div>
          </div>

          {/* চলমান লেখা */}
          <div
            ref={scrollerRef}
            className="w-full overflow-hidden whitespace-nowrap relative flex items-center scrollbar-none"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="inline-flex items-center font-medium tracking-wide">
              <span className="px-4">
                আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-6 text-purple-500">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-6 text-purple-500">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি
              </span>

              <span className="px-4">
                আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-6 text-purple-500">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-6 text-purple-500">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি
              </span>
            </div>
          </div>

          {/* ডান পাশে ফিক্সড 'বিস্তারিত' বাটন */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center bg-gradient-to-l from-slate-900 via-slate-900/95 to-transparent pl-8 pr-3 sm:pr-4 z-20">
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 bg-purple-950/80 hover:bg-purple-900 text-purple-300 hover:text-white px-3 py-1 rounded-md text-xs font-semibold border border-purple-800/60 shadow-md transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>বিস্তারিত</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}