'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmergencyContacts from './EmergencyContacts';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-950 text-white border-t border-slate-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">

            {/* কলাম ১: লোগো ও পাঠাগারের নাম */}
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/avp-logo-16-9.jpeg"
                    alt="আলোর ভুবন পাঠাগার লোগো"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-purple-400">আলোর ভুবন পাঠাগার</span>
              </div>
              <p className="text-sm text-slate-300 max-w-xs">
                জ্ঞানের আলো ছড়িয়ে দিতে এবং গ্রামের পাঠকদের মধ্যে পড়ার অভ্যাস গড়ে তুলতে আমাদের এই ক্ষুদ্র প্রয়াস।
              </p>
            </div>

            {/* কলাম ২: দ্রুত লিংকসমূহ */}
            <div className="flex flex-col space-y-2">
              <div>
                <h4 className="text-white font-semibold inline-block">গুরুত্বপূর্ণ লিংক</h4>
                <div className="w-8 h-[2px] bg-purple-500/60 rounded-full mx-auto md:mx-0 mt-1 mb-2"></div>
              </div>

              {/* জরুরি নম্বর ক্লিক করার জন্য বাটন */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-slate-300 hover:text-purple-400 transition-colors text-center md:text-left cursor-pointer w-fit mx-auto md:mx-0"
              >
                জরুরি নম্বরসমূহ
              </button>

              <a href="https://jgk.gov.bd/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">জাতীয় গ্রন্থকেন্দ্র</a>
              <a href="https://bskbd.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">বিশ্ব সাহিত্য কেন্দ্র</a>
              <a href="https://bskbd.org/mobile-library" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">ভ্রাম্যমাণ লাইব্রেরি</a>
              <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">জাতীয় তথ্য বাতায়ন</a>
            </div>

            {/* কলাম ৩: যোগাযোগ তথ্য */}
            <div className="flex flex-col space-y-2">
              <div>
                <h4 className="text-white font-semibold inline-block">যোগাযোগ</h4>
                <div className="w-8 h-[2px] bg-purple-500/60 rounded-full mx-auto md:mx-0 mt-1 mb-2"></div>
              </div>
              <p className="text-sm text-slate-300">পারগয়রা, গোবিন্দগঞ্জ, গাইবান্ধা</p>
              <p className="text-sm text-slate-300">ইমেইল: alorvubonpathagar@gmail.com</p>
              <p className="text-sm text-slate-300">ফোন: +৮৮০ ১XXXXXXXXX</p>
              {/* ফেসবুক পেজ লিংক */}
              <a
                href="https://www.facebook.com/people/%E0%A6%86%E0%A6%B2%E0%A7%8B%E0%A6%B0-%E0%A6%AD%E0%A7%81%E0%A6%AC%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-Alor-Vubon-Pathagar/100064773873791/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:underline inline-block"
              >
                ফেইসবুক পেজ
              </a>
            </div>

          </div>

          {/* কপিরাইট সেকশন */}
          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} আলোর ভুবন পাঠাগার। সর্বস্বত্ব সংরক্ষিত।
          </div>
        </div>
      </footer>

      {/* জরুরি নম্বর মোডাল */}
      <EmergencyContacts isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}