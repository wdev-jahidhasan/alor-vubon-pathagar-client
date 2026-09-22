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
      <nav className="bg-[#ffffee] dark:bg-slate-950 shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 h-16 sm:h-20 w-full" />
    );
  }

  return (
    <nav className="bg-[#ffffee] dark:bg-slate-950 shadow-sm border-b border-amber-900/10 dark:border-slate-800 sticky top-0 z-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1 sm:gap-4">

        {/* Left Side: Mobile Menu Button & Desktop Nav */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-slate-800 dark:text-slate-300 focus:outline-none transition-transform active:scale-95"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-base font-semibold">
            <Link
              href="/"
              className={`relative py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/' ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              হোম
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/books"
              className={`relative py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/books' ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              বইয়ের তালিকা
              {pathname === '/books' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/notices"
              className={`relative py-2 transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${pathname === '/notices' ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-800 dark:text-slate-300'
                }`}
            >
              নোটিশ বোর্ড
              {pathname === '/notices' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 dark:bg-purple-400 rounded-full"></span>
              )}
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 min-w-0 max-w-[50%] sm:max-w-none justify-center flex-1 md:flex-none overflow-hidden"
        >
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0">
            <Image src="/images/avp-logo-16-9.jpeg" alt="Logo" fill className="object-contain" priority />
          </div>
          <span className="text-[11px] xs:text-xs sm:text-sm md:text-xl font-bold tracking-tight text-purple-700 dark:text-purple-400 truncate">
            আলোর ভুবন পাঠাগার
          </span>
        </Link>

        {/* Right Side: Theme Toggle & Login */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 sm:p-2 rounded-lg bg-amber-100/40 dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors hover:bg-amber-100/80 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

          <Link
            href="/login"
            className="bg-violet-600 hover:bg-violet-700 text-white px-2.5 py-1 md:px-5 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap shadow-sm transition-colors"
          >
            লগইন
          </Link>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fbf7e4] dark:bg-slate-950 border-b border-amber-900/10 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 border-b border-amber-900/5 dark:border-slate-900"
          >
            হোম
          </Link>
          <Link
            href="/books"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 border-b border-amber-900/5 dark:border-slate-900"
          >
            বইয়ের তালিকা
          </Link>
          <Link
            href="/notices"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
          >
            নোটিশ বোর্ড
          </Link>
        </div>
      )}
    </nav>
  );
}