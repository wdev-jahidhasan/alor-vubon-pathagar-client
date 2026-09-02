'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ১. বাম পাশের ন্যাভ লিংকসমূহ (মোবাইলে লুকিয়ে থাকবে) */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            হোম
          </Link>
          <Link href="/books" className="hover:text-emerald-400 transition-colors">
            বইয়ের তালিকা
          </Link>
          <Link href="/notices" className="hover:text-emerald-400 transition-colors">
            নোটিশ বোর্ড
          </Link>
        </nav>

        {/* ২. মিডল লোগো ও পাঠাগারের নাম */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/avp-logo-16-9.jpeg" 
                alt="আলোর ভুবন পাঠাগার লোগো" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide text-emerald-400">
              আলোর ভুবন পাঠাগার
            </span>
          </Link>
        </div>

        {/* ৩. ডান পাশের অ্যাকশন বাটন ও মোবাইল হ্যামবার্গার আইকন */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/login" 
            className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
          >
            লগইন
          </Link>

          {/* মোবাইল মেনু টগল বাটন */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* ৪. মোবাইল ড্রপডাউন মেনু (ছোট স্ক্রিনে ক্লিক করলে নিচে ওপেন হবে) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-emerald-400 transition-colors"
          >
            হোম
          </Link>
          <Link 
            href="/books" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-emerald-400 transition-colors"
          >
            বইয়ের তালিকা
          </Link>
          <Link 
            href="/notices" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium hover:text-emerald-400 transition-colors"
          >
            নোটিশ বোর্ড
          </Link>
          <div className="pt-2">
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              লগইন
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}