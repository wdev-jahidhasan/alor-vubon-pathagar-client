import React from 'react';
import { BookOpen, Star, ArrowLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import { books } from '@/data/booksData';

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-400">দুঃখিত, বইটি খুঁজে পাওয়া যায়নি!</h1>
        <Link
          href="/books"
          className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} /> সব বইয়ের তালিকায় ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-6 sm:pt-10 pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <div>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs sm:text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            বইয়ের তালিকায় ফিরে যান
          </Link>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start shadow-xl">

          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-72 sm:h-96 md:h-[420px]">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
            {/* <span className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md text-purple-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-purple-800/40 flex items-center gap-1.5 shadow-md">
              <Star size={14} className="fill-purple-400 text-purple-400" />
              {book.rating}
            </span> */}
          </div>

          <div className="md:col-span-7 space-y-4 sm:space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                {book.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                {book.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-medium">
                লেখক: <span className="text-purple-400 font-semibold">{book.writer}</span>
              </p>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">বই সম্পর্কে বিস্তারিত</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300">
                এই বইটি সংগ্রহ করতে বা পাঠাগার সম্পর্কে জানতে যোগাযোগ করুন:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/30"
                >
                  <Phone size={14} /> কল করুন
                </a>
                <Link
                  href="/books"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 border border-slate-700"
                >
                  <BookOpen size={14} /> আরও বই দেখুন
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}