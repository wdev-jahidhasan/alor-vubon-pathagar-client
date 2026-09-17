import { BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/booksData";

export default function PopularBooks() {
  const popularBooks = books.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">

        {/* সেকশন হেডার */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">জনপ্রিয় <span className="text-purple-400">বইসমূহ</span></h2>
          <p className="text-white text-xs sm:text-base px-2">পাঠকদের মাঝে সবচেয়ে বেশি পঠিত ও সমাদৃত বইগুলোর তালিকা</p>
        </div>

        {/* বইয়ের কার্ড গ্রিড */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {popularBooks.map((book) => (
            <div
              key={book.id}
              className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col"
            >
              <div className="h-28 sm:h-40 lg:h-48 overflow-hidden relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-slate-950/80 backdrop-blur-md text-purple-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-purple-800/40 flex items-center gap-1">
                  <Star size={10} className="fill-purple-400 text-purple-400 sm:w-3 sm:h-3" />
                  {book.rating}
                </span> */}
              </div>

              <div className="p-2.5 sm:p-4 lg:p-5 flex flex-col flex-grow space-y-1 sm:space-y-2">
                <span className="text-[10px] sm:text-xs text-purple-400 font-medium">{book.category}</span>
                <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-white text-[11px] sm:text-sm pb-0.5 sm:pb-2 line-clamp-1">{book.writer}</p>

                <div className="pt-auto mt-auto">
                  <Link
                    href={`/books/${book.id}`}
                    className="w-full py-1.5 sm:py-2 bg-slate-800 hover:bg-violet-600 text-slate-200 hover:text-white text-[10px] sm:text-xs font-semibold rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <BookOpen size={12} className="sm:w-3.5 sm:h-3.5" />
                    বিস্তারিত পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* সব বই দেখুন বাটন */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-xs sm:text-base lg:text-lg transition-colors group"
          >
            সব বই দেখুন <ArrowRight size={14} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}