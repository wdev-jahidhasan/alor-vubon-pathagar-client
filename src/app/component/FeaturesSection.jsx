import Link from "next/link";
import { BookOpen, Bell, Users, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">আমাদের সেবাসমূহ</h2>
        <p className="text-slate-400 text-sm md:text-base">পাঠকদের সুবিধার জন্য আমাদের রয়েছে আধুনিক ও সহজ ব্যবস্থাপনা।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* কার্ড ১ */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">সমৃদ্ধ বইয়ের সংগ্রহ</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            উপন্যাস, ইতিহাস, ধর্মীয়, বিজ্ঞান ও শিশুসাহিত্যসহ বিভিন্ন ক্যাটাগরির শত শত বইয়ের সমাহার।
          </p>
          <Link href="/books" className="inline-flex items-center gap-1 text-purple-400 text-sm font-semibold hover:text-purple-300">
            বইগুলো দেখুন <ArrowRight size={16} />
          </Link>
        </div>

        {/* কার্ড ২ */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
            <Bell size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">নিয়মিত নোটিশ</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            পাঠাগার খোলার সময়সূচি, নতুন বই সংযুক্তি এবং অন্যান্য গুরুত্বপূর্ণ ঘোষণা পেতে চোখ রাখুন নোটিশ বোর্ডে।
          </p>
          <Link href="/notices" className="inline-flex items-center gap-1 text-purple-400 text-sm font-semibold hover:text-purple-300">
            নোটিশ জানুন <ArrowRight size={16} />
          </Link>
        </div>

        {/* কার্ড ৩ */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">পাঠক সদস্যতা</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            সহজ শর্তে আমাদের পাঠাগারের সদস্য হয়ে ঘরে বসেই বই ইস্যু ও পড়ার সুযোগ উপভোগ করুন।
          </p>
          <Link href="/login" className="inline-flex items-center gap-1 text-purple-400 text-sm font-semibold hover:text-purple-300">
            লগইন করুন <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}