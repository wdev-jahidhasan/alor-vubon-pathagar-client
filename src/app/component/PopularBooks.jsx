import { BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PopularBooks() {
  const books = [
    {
      title: "পথের পাঁচালী",
      writer: "বিভূষণ বন্দ্যোপাধ্যায়",
      category: "উপন্যাস",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400&auto=format&fit=crop" // নিখাদ বই ও রিডিং ভিউ
    },
    {
      title: "আগুনের পরশমণি",
      writer: "হুমায়ূন আহমেদ",
      category: "মুক্তিযুদ্ধ",
      rating: "৪.৮",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=400&auto=format&fit=crop" // সারিবদ্ধ বইয়ের স্ট্যাক
    },
    {
      title: "যে জলে আগুন জ্বলে",
      writer: "হেলাল হাফিজ",
      category: "কাব্যগ্রন্থ",
      rating: "৪.৭",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=400&auto=format&fit=crop" // খোলা বই ও পাতার টেক্সচার
    },
    {
      title: "আশি দিনে বিশ্বভ্রমণ",
      writer: "জুল ভার্ন",
      category: "ভ্রমণ/অনুবাদ",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop" // বিশাল লাইব্রেরি ও বুক শেল্ফ
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              জনপ্রিয় <span className="text-purple-400">বইসমূহ</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              পাঠকদের মাঝে সবচেয়ে বেশি পঠিত ও সমাদৃত বইগুলোর তালিকা।
            </p>
          </div>
          <Link 
            href="/books" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
          >
            সব বই দেখুন <ArrowRight size={16} />
          </Link>
        </div>

        {/* বইয়ের কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-800/40 flex items-center gap-1">
                  <Star size={12} className="fill-purple-400 text-purple-400" />
                  {book.rating}
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-grow space-y-2">
                <span className="text-xs text-purple-400 font-medium">{book.category}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-400 text-sm pb-2">{book.writer}</p>
                
                <div className="pt-auto mt-auto">
                  <button className="w-full py-2 bg-slate-800 hover:bg-violet-600 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                    <BookOpen size={14} />
                    বিস্তারিত পড়ুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}