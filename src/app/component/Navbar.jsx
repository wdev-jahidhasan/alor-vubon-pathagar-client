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
      <header className="text-slate-900 dark:text-white shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 h-20" />
    );
  }

  return (
    <header className="text-slate-900 dark:text-white shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-1 mr-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* ডেস্কটপ ন্যাভ লিংকসমূহ */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <Link
              href="/"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${pathname === '/' ? 'text-purple-600 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-300'
                }`}
            >
              <span>হোম</span>
              {pathname === '/' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/books"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${pathname === '/books' ? 'text-purple-600 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-300'
                }`}
            >
              <span>বইয়ের তালিকা</span>
              {pathname === '/books' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/notices"
              className={`relative flex flex-col items-center py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${pathname === '/notices' ? 'text-purple-600 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-300'
                }`}
            >
              <span>নোটিশ বোর্ড</span>
              {pathname === '/notices' && (
                <span className="absolute -bottom-1 w-full h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
          </nav>
        </div>

        {/* মাঝের অংশ: লোগো ও পাঠাগারের নাম */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image src="/images/avp-logo-16-9.jpeg" alt="আলোর ভুবন পাঠাগার লোগো" fill className="object-contain" priority />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-wide text-purple-600 dark:text-purple-400 whitespace-nowrap">
              আলোর ভুবন পাঠাগার
            </span>
          </Link>
        </div>

        {/* ডান পাশ: থিম টগল ও লগইন বাটন */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-amber-100/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>

          <Link
            href="/login"
            className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all shadow-sm whitespace-nowrap"
          >
            লগইন
          </Link>
        </div>

      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden border-b border-amber-900/10 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg transition-colors">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-base font-medium transition-colors border-b border-amber-900/5 dark:border-slate-900 ${pathname === '/' ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
          >
            হোম
          </Link>
          <Link
            href="/books"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-base font-medium transition-colors border-b border-amber-900/5 dark:border-slate-900 ${pathname === '/books' ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
          >
            বইয়ের তালিকা
          </Link>
          <Link
            href="/notices"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-base font-medium transition-colors ${pathname === '/notices' ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
          >
            নোটিশ বোর্ড
          </Link>
        </div>
      )}
    </header>
  );
}