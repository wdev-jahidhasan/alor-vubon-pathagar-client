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
    <div className="bg-[#fdf7d2] dark:bg-slate-950 border-b border-amber-900/10 dark:border-slate-800 py-2 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-[#fcf3c5] dark:bg-slate-900 border border-amber-900/20 dark:border-slate-700 sm:rounded-lg text-xs md:text-sm text-purple-900 dark:text-purple-300 py-2 flex items-center relative overflow-hidden shadow-sm transition-colors duration-300">

          {/* Icon with blinking effect */}
          <div className="flex items-center justify-center px-2 sm:px-3 z-10 shrink-0">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <span className="animate-ping absolute inset-0 rounded-full bg-purple-600/50 dark:bg-white opacity-70"></span>
              <div className="relative z-10 text-purple-950 dark:text-white drop-shadow-[0_0_6px_rgba(126,34,206,0.5)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                <BookOpen className="w-4 h-4 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Marquee Text (Bold & Eye-friendly) */}
          <div
            ref={scrollerRef}
            className="w-full overflow-hidden whitespace-nowrap relative flex items-center scrollbar-none pr-16 sm:pr-20"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="inline-flex items-center font-semibold tracking-wide text-purple-800/90 dark:text-purple-300 text-[11px] sm:text-xs md:text-sm">
              <span className="px-3 sm:px-4">
                আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-4 sm:mx-6 text-purple-600 dark:text-purple-400">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-4 sm:mx-6 text-purple-600 dark:text-purple-400">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি
              </span>
              <span className="px-3 sm:px-4">
                আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-4 sm:mx-6 text-purple-600 dark:text-purple-400">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি <span className="mx-4 sm:mx-6 text-purple-600 dark:text-purple-400">•</span> আলোর ভুবন পাঠাগার | বইয়ের পাতায় নিজেকে খুঁজি
              </span>
            </div>
          </div>

          {/* Right side button with soft background */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center bg-gradient-to-l from-[#fcf3c5] via-[#fcf3c5]/95 to-transparent dark:from-slate-900 dark:via-slate-900/95 dark:to-transparent pl-8 sm:pl-12 pr-2 sm:pr-4 z-20">
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 bg-amber-200/50 hover:bg-amber-200 dark:bg-purple-950/40 dark:hover:bg-purple-900/70 text-purple-950 dark:text-purple-200 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold border-2 border-purple-900/60 dark:border-purple-400 shadow-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>বিস্তারিত</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}