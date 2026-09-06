import React from 'react';
import { Bell, Calendar, AlertCircle } from 'lucide-react';

export default function NoticesPage() {
  const notices = [];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-6 sm:pt-10 pb-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        {/* পেজ হেডার */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Bell className="text-purple-400" size={28} />
            পাঠাগারের <span className="text-purple-400">নোটিশ বোর্ড</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto px-2">
            পাঠাগারের সকল গুরুত্বপূর্ণ ঘোষণা, কার্যক্রম ও আপডেট এখানে দেখতে পাবেন।
          </p>
        </div>

        {/* নোটিশ সেকশন - কন্ডিশনাল রেন্ডারিং */}
        {notices.length > 0 ? (
          <div className="space-y-4">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 rounded-2xl space-y-2 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between text-xs text-purple-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {notice.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{notice.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{notice.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* অ্যারে ফাঁকা থাকলে এই অংশটি দেখাবে */
          <div className="text-center py-16 sm:py-24 px-4 bg-slate-900/40 rounded-2xl border border-slate-800/80 space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mx-auto border border-purple-500/20">
              <AlertCircle size={28} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-white">কোনো নোটিশ নেই</h3>
              <p className="text-slate-400 text-xs sm:text-sm mx-auto">
                এখনো কোনো নোটিশ যোগ করা হয়নি। নতুন কোনো ঘোষণা এলে তা এখানে দেখতে পাবেন।
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}