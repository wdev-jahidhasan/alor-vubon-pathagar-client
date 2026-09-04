import { BookOpen, Award, GraduationCap, HeartHandshake } from "lucide-react";

export default function OurActivities() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-900">

      {/* সেকশনের মূল হেডিং */}
      <div className="text-center mb-8 sm:mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">আমাদের <span className="text-purple-400">কার্যক্রমসমূহ</span></h2>
        <p className="text-white text-xs sm:text-base px-2">পাঠকদের জ্ঞানচর্চা ও সমাজের উন্নয়নে আমাদের নিয়মিত নানা উদ্যোগ</p>
      </div>

      {/* ছোট স্ক্রিনে ২টা এবং বড় স্ক্রিনে ৪টি কার্ড */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

        {/* কার্যক্রম ১ */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all group flex flex-col">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <BookOpen size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2">বই সংরক্ষণ ও বিতরণ</h3>

          <div className="w-8 sm:w-12 h-[2px] bg-purple-500/50 rounded-full mb-2 sm:mb-3"></div>

          <p className="text-white text-[11px] sm:text-sm leading-relaxed">
            পাঠকদের মাঝে নিয়মমাফিক বই ইস্যু ও ঘরে বসে পড়ার সুযোগ নিশ্চিত করা।
          </p>
        </div>

        {/* কার্যক্রম ২ */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all group flex flex-col">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <Award size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2">কুইজ প্রতিযোগিতার আয়োজন</h3>

          <div className="w-8 sm:w-12 h-[2px] bg-purple-500/50 rounded-full mb-2 sm:mb-3"></div>

          <p className="text-white text-[11px] sm:text-sm leading-relaxed">
            মেধা বিকাশে নিয়মিত কুইজ ও পঠনভিত্তিক প্রতিযোগিতার আয়োজন ও পুরস্কার বিতরণ।
          </p>
        </div>

        {/* কার্যক্রম ৩ */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all group flex flex-col">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <GraduationCap size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2">শিক্ষার প্রসার</h3>

          <div className="w-8 sm:w-12 h-[2px] bg-purple-500/50 rounded-full mb-2 sm:mb-3"></div>

          <p className="text-white text-[11px] sm:text-sm leading-relaxed">
            সমাজের পিছিয়ে পড়া শিক্ষার্থীদের মাঝে পড়াশোনার আগ্রহ ও শিক্ষার আলো ছড়িয়ে দেওয়া।
          </p>
        </div>

        {/* কার্যক্রম ৪ */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all group flex flex-col">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <HeartHandshake size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2">স্বেচ্ছাসেবী কার্যক্রম</h3>

          <div className="w-8 sm:w-12 h-[2px] bg-purple-500/50 rounded-full mb-2 sm:mb-3"></div>

          <p className="text-white text-[11px] sm:text-sm leading-relaxed">
            পাঠাগার পরিচালনা ও সামাজিক বিভিন্ন উদ্যোগে তরুণ স্বেচ্ছাসেবকদের সম্পৃক্ত করা।
          </p>
        </div>

      </div>
    </section>
  );
}