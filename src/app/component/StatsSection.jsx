export default function StatsSection() {
  return (
    <section className="py-16 border-t border-slate-900 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="p-6 bg-slate-900/80 border border-slate-800/80 rounded-xl">
          <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">১৫০০+</h4>
          <p className="text-xs md:text-sm text-slate-400">মোট বইয়ের সংখ্যা</p>
        </div>

        <div className="p-6 bg-slate-900/80 border border-slate-800/80 rounded-xl">
          <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">১৫০+</h4>
          <p className="text-xs md:text-sm text-slate-400">সক্রিয় পাঠক</p>
        </div>

        <div className="p-6 bg-slate-900/80 border border-slate-800/80 rounded-xl">
          <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">১০+</h4>
          <p className="text-xs md:text-sm text-slate-400">বইয়ের ক্যাটাগরি</p>
        </div>

        <div className="p-6 bg-slate-900/80 border border-slate-800/80 rounded-xl">
          <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">১০০%</h4>
          <p className="text-xs md:text-sm text-slate-400">বিনামূল্যে সেবা</p>
        </div>

      </div>
    </section>
  );
}