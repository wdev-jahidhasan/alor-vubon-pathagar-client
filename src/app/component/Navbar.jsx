"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="bg-[#fdf7d2] dark:bg-slate-950 shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 h-16 sm:h-20" />
    );
  }

  return (
    <header className="bg-[#fdf7d2] dark:bg-slate-950 shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

        {/* বাম পাশ: হ্যামবার্গার ও ডেস্কটপ মেনু */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* ডেস্কটপ ন্যাভ লিংকসমূহ */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-semibold">
            <Link
              href="/"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/' ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              <span>হোম</span>
              {pathname === '/' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/books"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/books' ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              <span>বইয়ের তালিকা</span>
              {pathname === '/books' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/notices"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/notices' ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              <span>নোটিশ বোর্ড</span>
              {pathname === '/notices' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
          </nav>
        </div>

        {/* মাঝের অংশ: লোগো ও নাম */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image src="/images/avp-logo-16-9.jpeg" alt="আলোর ভুবন পাঠাগার লোগো" fill className="object-contain" priority />
            </div>
            <span className="text-xs sm:text-sm md:text-xl font-bold tracking-wide text-purple-700 dark:text-purple-400 whitespace-nowrap">
              আলোর ভুবন পাঠাগার
            </span>
          </Link>
        </div>

        {/* ডান পাশ: থিম টগল ও লগইন */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center p-1.5 sm:p-2 rounded-lg bg-amber-200/30 dark:bg-slate-900 text-slate-800 dark:text-slate-300 hover:bg-amber-200/80 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-800" />}
          </button>

          <Link
            href="/login"
            className="flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-2.5 py-1.5 md:px-5 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all shadow-sm whitespace-nowrap"
          >
            লগইন
          </Link>
        </div>

      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f4df] dark:bg-slate-950 border-b border-amber-900/10 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg transition-colors">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm sm:text-base font-semibold transition-colors border-b border-amber-900/5 dark:border-slate-900 ${pathname === '/' ? 'text-slate-900 dark:text-purple-400 font-bold' : 'text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400'
              }`}
          >
            হোম
          </Link>
          <Link
            href="/books"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm sm:text-base font-semibold transition-colors border-b border-amber-900/5 dark:border-slate-900 ${pathname === '/books' ? 'text-slate-900 dark:text-purple-400 font-bold' : 'text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400'
              }`}
          >
            বইয়ের তালিকা
          </Link>
          <Link
            href="/notices"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm sm:text-base font-semibold transition-colors ${pathname === '/notices' ? 'text-slate-900 dark:text-purple-400 font-bold' : 'text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400'
              }`}
          >
            নোটিশ বোর্ড
          </Link>
        </div>
      )}
    </header>
  );
}