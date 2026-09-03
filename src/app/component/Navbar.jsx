"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-950 text-white shadow-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1 mr-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* ডেস্কটপ ন্যাভ লিংকসমূহ */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <Link href="/" className="hover:text-purple-400 transition-colors">হোম</Link>
            <Link href="/books" className="hover:text-purple-400 transition-colors">বইয়ের তালিকা</Link>
            <Link href="/notices" className="hover:text-purple-400 transition-colors">নোটিশ বোর্ড</Link>
          </nav>
        </div>

        {/* মাঝের অংশ: লোগো ও পাঠাগারের নাম */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image src="/images/avp-logo-16-9.jpeg" alt="আলোর ভুবন পাঠাগার লোগো" fill className="object-contain" priority />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-wide text-purple-400 whitespace-nowrap">
              আলোর ভুবন পাঠাগার
            </span>
          </Link>
        </div>

        {/* ডান পাশ: লগইন বাটন */}
        <div className="flex items-center">
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
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-purple-400 transition-colors border-b border-slate-900"
          >
            হোম
          </Link>
          <Link
            href="/books"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-purple-400 transition-colors border-b border-slate-900"
          >
            বইয়ের তালিকা
          </Link>
          <Link
            href="/notices"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-purple-400 transition-colors"
          >
            নোটিশ বোর্ড
          </Link>
        </div>
      )}
    </header>
  );
}