import React from 'react';
import { LogIn, PhoneCall } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="bg-slate-950 text-white pt-10 sm:pt-12 pb-12 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto space-y-6 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl text-center">

        {/* আইকন এবং হেডার */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mx-auto border border-purple-500/20">
          <LogIn size={28} />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold">
            লগইন <span className="text-purple-400">পেইজ</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            লগইন পেইজ এখনো যুক্ত করা হয়নি। খুব শীঘ্রই যুক্ত করা হবে।
          </p>
        </div>

        {/* সদস্য হওয়ার নিয়ম বা যোগাযোগের তথ্য */}
        <div className="pt-4 border-t border-slate-800/80 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            আলোর ভুবন পাঠাগারের সদস্য হওয়ার নিয়ম জানতে কল করুন এই নম্বরে:
          </p>

          <div className="inline-flex">
            <a
              href="tel:+8801XXXXXXXXX"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              <PhoneCall size={14} />
              +৮৮০ ১XXXXXXXXX
            </a>
          </div>

          {/* ফেসবুক পেজ লিংক সেকশন */}
          <div className="pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            নিয়মিত আপডেটের জন্য আমাদের{' '}
            <a
              href="https://www.facebook.com/people/%E0%A6%86%E0%A6%B2%E0%A7%8B%E0%A6%B0-%E0%A6%AD%E0%A7%81%E0%A6%AC%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-Alor-Vubon-Pathagar/100064773873791/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 font-bold hover:underline inline-flex items-center gap-1.5 mx-1 align-middle"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>ফেসবুক পেজ</span>
            </a>{' '}
            ফলো করুন।
          </div>
        </div>

      </div>
    </div>
  );
}