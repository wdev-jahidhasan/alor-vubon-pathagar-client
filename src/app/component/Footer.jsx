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

          {/* ফুটারের মূল গ্রিড: এখন ৪টি কলাম (মোবাইল/ট্যাবলেটে রেসপন্সিভ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-center md:text-left">

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
              <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">জাতীয় তথ্য বাতায়ন</a>
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
                className="text-sm text-purple-400 hover:underline inline-block pt-1"
              >
                ফেইসবুক পেজ
              </a>
            </div>

            {/* কলাম ৪: গুগল ম্যাপ লোকেশন */}
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <div>
                <h4 className="text-white font-semibold inline-block">গুগল ম্যাপ লোকেশন</h4>
                <div className="w-8 h-[2px] bg-purple-500/60 rounded-full mx-auto md:mx-0 mt-1 mb-2"></div>
              </div>

              <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-800 shadow-md">
                <iframe
                  title="Alor Vubon Pathagar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2!2d89.3615846!3d25.1286357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce3b9848074e7%3A0x305120b4b53dc908!2sAlor%20Vubon%20Pathagar!5e1!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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