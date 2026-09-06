'use client';

import React, { useState } from 'react';
import { BookOpen, Star, Search } from 'lucide-react';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  // আপনার বইগুলোর ডেটা লিস্ট
  const books = [
    {
      title: "পথের পাঁচালী",
      writer: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      category: "উপন্যাস",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "আগুনের পরশমণি",
      writer: "হুমায়ূন আহমেদ",
      category: "মুক্তিযুদ্ধ",
      rating: "৪.৮",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "যে জলে আগুন জ্বলে",
      writer: "হেলাল হাফিজ",
      category: "কাব্যগ্রন্থ",
      rating: "৪.৭",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "এ টেল অব টু সিটিজ",
      writer: "চার্লস ডিকেন্স",
      category: "অনুবাদ",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "পায়ের আওয়াজ পাওয়া যায়",
      writer: "সৈয়দ শামসুল হক",
      category: "নাটক",
      rating: "৪.৮",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "কবিতার কথা",
      writer: "জীবনানন্দ দাশ",
      category: "প্রবন্ধ",
      rating: "৪.৬",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "সাগরের রহস্যপুরী",
      writer: "আবদুল্লাহ আল মুতী শরফুদ্দিন",
      category: "বিজ্ঞান",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "দেশে ‍বিদেশে",
      writer: "সৈয়দ মুজতবা আলী",
      category: "ভ্রমণ",
      rating: "৪.৭",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // ইউনিক ক্যাটাগরি লিস্ট
  const categories = ['সব', ...new Set(books.map(book => book.category))];

  // ফিল্টার লজিক
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.writer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'সব' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-6 sm:pt-10 pb-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

        {/* পেজ হেডার */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">পাঠাগারের <span className="text-purple-400">বইয়ের তালিকা</span></h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mx-auto px-2">
            আমাদের পাঠাগারে থাকা ক্যাটাগরিভিত্তিক জনপ্রিয় বইসমূহ থেকে আপনার পছন্দের বইটি খুঁজে নিন।
          </p>
          <div className="pt-0.5">
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed px-2">
              বই সম্পর্কে আরো তথ্য জানতে অথবা পাঠাগারের সদস্য হওয়ার নিয়ম জানতে যোগাযোগ করুন এই নম্বরে:
              <a href="tel:+8801XXXXXXXXX" className="text-purple-400 font-bold hover:underline ml-1.5 inline-block">
                +৮৮০ ১XXXXXXXXX
              </a>
            </p>
          </div>
        </div>

        {/* সার্চ বার এবং ফিল্টার সেকশন */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 bg-slate-900/60 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800">

          {/* সার্চ ইনপুট */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            <input
              type="text"
              placeholder="বইয়ের নাম বা লেখকের নাম..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* ক্যাটাগরি ফিল্টার বাটনস */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* বইয়ের গ্রিড */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col"
              >
                <div className="h-28 sm:h-44 lg:h-52 overflow-hidden relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-slate-950/85 backdrop-blur-md text-purple-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-purple-800/40 flex items-center gap-1">
                    <Star size={10} className="fill-purple-400 text-purple-400 sm:w-3 sm:h-3" />
                    {book.rating}
                  </span>
                </div>

                <div className="p-2.5 sm:p-4 lg:p-5 flex flex-col flex-grow space-y-1 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs text-purple-400 font-medium">{book.category}</span>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-slate-300 text-[11px] sm:text-sm pb-0.5 sm:pb-1 line-clamp-1">{book.writer}</p>

                  <div className="pt-auto mt-auto">
                    <button className="w-full py-1.5 sm:py-2 bg-slate-800 hover:bg-violet-600 text-slate-200 hover:text-white text-[10px] sm:text-xs font-semibold rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                      <BookOpen size={12} className="sm:w-3.5 sm:h-3.5" />
                      বিস্তারিত পড়ুন
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* কোনো বই না পাওয়া গেলে */
          <div className="text-center py-12 sm:py-16 space-y-3 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm sm:text-lg">দুঃখিত, আপনার অনুসন্ধানের সাথে মিলে কোনো বই পাওয়া যায়নি।</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('সব'); }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              সব বই দেখুন
            </button>
          </div>
        )}

      </div>
    </div>
  );
}