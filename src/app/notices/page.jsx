import React from 'react';
import { Bell, Calendar, AlertCircle } from 'lucide-react';

export default function NoticesPage() {
  const notices = [];

  return (
    <div className="bg-[#ffffee] dark:bg-slate-950 text-slate-900 dark:text-white pt-6 sm:pt-10 pb-12 px-3 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        {/* পেজ হেডার */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Bell className="text-purple-700 dark:text-purple-400" size={28} />
            পাঠাগারের <span className="text-purple-700 dark:text-purple-400">নোটিশ বোর্ড</span>
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto px-2">
            পাঠাগারের সকল গুরুত্বপূর্ণ ঘোষণা, কার্যক্রম ও আপডেট এখানে দেখতে পাবেন।
          </p>
        </div>

        {/* নোটিশ সেকশন - কন্ডিশনাল রেন্ডারিং */}
        {notices.length > 0 ? (
          <div className="space-y-4">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900/60 border border-amber-900/10 dark:border-slate-800 p-3 sm:p-4 rounded-xl space-y-1.5 hover:border-purple-600/50 dark:hover:border-purple-500/50 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-purple-700 dark:text-purple-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {notice.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{notice.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{notice.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* অ্যারে ফাঁকা থাকলে এই অংশটি দেখাবে */
          <div className="text-center py-10 sm:py-16 px-4 bg-white dark:bg-slate-900/40 rounded-xl border border-amber-900/10 dark:border-slate-800/80 space-y-3 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto border border-purple-200 dark:border-purple-500/20">
              <AlertCircle size={22} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">কোনো নোটিশ নেই</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mx-auto">
                এখনো কোনো নোটিশ যোগ করা হয়নি। নতুন কোনো ঘোষণা এলে তা এখানে দেখতে পাবেন।
              </p>

              {/* ফেসবুক পেজ লিংক সেকশন */}
              <div className="pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                নিয়মিত আপডেটের জন্য আমাদের{' '}
                <a
                  href="https://www.facebook.com/people/%E0%A6%86%E0%A6%B2%E0%A7%8B%E0%A6%B0-%E0%A6%AD%E0%A7%81%E0%A6%AC%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-Alor-Vubon-Pathagar/100064773873791/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-400 font-bold hover:underline inline-flex items-center gap-1.5 mx-1 align-middle"
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
        )}

      </div>
    </div>
  );
}