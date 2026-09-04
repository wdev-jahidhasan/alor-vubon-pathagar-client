import { BookOpen, Target, Eye, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

        {/* সেকশন হেডার */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">আমাদের <span className="text-purple-400">সম্পর্কে</span></h2>
          <p className="text-white text-xs sm:text-base px-2">আলোর ভুবন পাঠাগারের লক্ষ্য, উদ্দেশ্য ও পথচলার গল্প</p>
        </div>

        {/* মূল কন্টেন্ট ও কার্ড গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">

          {/* বাম দিকের মূল বিবরণী কার্ড */}
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              আলোর ভুবন পাঠাগার
            </h3>
            <div className="w-12 h-[2px] bg-purple-500/60 rounded-full"></div>
            <p className="text-white text-xs sm:text-base leading-relaxed">
              গ্রামাঞ্চলের তরুণ সমাজ ও পাঠকদের মধ্যে বই পড়ার অভ্যাস গড়ে তোলার প্রত্যয় নিয়ে প্রতিষ্ঠিত হয়েছে <span className="text-purple-400 font-semibold">আলোর ভুবন পাঠাগার</span>। প্রযুক্তির যুগে হারিয়ে যাওয়া বইমুখী সংস্কৃতি ফিরিয়ে আনা এবং জ্ঞানভিত্তিক সমাজ গঠনে আমাদের এই ক্ষুদ্র প্রয়াস নিয়মিত কাজ করে যাচ্ছে।
            </p>
            <p className="text-white text-xs sm:text-base leading-relaxed">
              এখানে নিয়মিত বই পাঠ, কুইজ প্রতিযোগিতা, শিক্ষামূলক আলোচনা এবং স্বেচ্ছাসেবী কার্যক্রমের মাধ্যমে এলাকার তরুণদের মননশীল বিকাশে কাজ করা হয়।
            </p>
          </div>

          {/* ডান দিকের লক্ষ্য ও উদ্দেশ্য কার্ড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* লক্ষ্য কার্ড */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                <Target size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">আমাদের লক্ষ্য</h4>
              <div className="w-8 h-[2px] bg-purple-500/50 rounded-full mb-2"></div>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                প্রতিটি ঘরে শিক্ষার আলো পৌঁছে দেওয়া এবং একটি আলোকিত সমাজ বিনির্মাণ করা।
              </p>
            </div>

            {/* দৃষ্টি বা ভিশন কার্ড */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                <Eye size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">আমাদের দৃষ্টিভঙ্গি</h4>
              <div className="w-8 h-[2px] bg-purple-500/50 rounded-full mb-2"></div>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                পাঠকদের মননশীল ও সৃজনশীল মেধা বিকাশের একটি আদর্শ কেন্দ্র হিসেবে পাঠাগারকে গড়ে তোলা।
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}