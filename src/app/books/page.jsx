'use client';

import React, { useState } from 'react';
import { BookOpen, Star, Search } from 'lucide-react';
import Link from 'next/link';
import { books } from '@/data/booksData';
import { motion } from 'framer-motion';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const categories = ['সব', ...new Set(books.map(book => book.category))];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.writer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'সব' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#ffffee] dark:bg-slate-950 text-slate-900 dark:text-white pt-6 sm:pt-10 pb-12 px-3 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

        {/* পেজ হেডার অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            পাঠাগারের <span className="text-purple-700 dark:text-purple-400">বইয়ের তালিকা</span>
          </h1>

          <div className="max-w-lg mx-auto space-y-2 px-2">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              বই সম্পর্কে আরো তথ্য জানতে অথবা পাঠাগারের সদস্য হওয়ার নিয়ম জানতে যোগাযোগ করুন এই নম্বরে:{' '}
              <a href="tel:+8801XXXXXXXXX" className="text-purple-700 dark:text-purple-400 font-bold hover:underline inline-block">
                +৮৮০ ১XXXXXXXXX
              </a>
            </p>

            {/* ফেসবুক পেজ এবং ই-লাইব্রেরি লিংক সেকশন */}
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5 pt-1">
              <div>
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

              <div>
                অনলাইনে বই পড়তে আমাদের{' '}
                <a
                  href="https://drive.google.com/drive/folders/1k6i68jIb_HB3E7PLouuqVs-PiKh0iQPM?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-400 font-bold hover:underline"
                >
                  ই-লাইব্রেরি
                </a>{' '}
                ভিজিট করুন।
              </div>
            </div>
          </div>
        </motion.div>

        {/* সার্চ বার এবং ফিল্টার সেকশন অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 bg-white dark:bg-slate-900/60 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-amber-900/10 dark:border-slate-800 shadow-sm dark:shadow-xl transition-colors"
        >
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            <input
              type="text"
              placeholder="বইয়ের নাম বা লেখকের নাম..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#ffffee]/50 dark:bg-slate-950 border border-amber-900/10 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-700/20'
                  : 'bg-[#ffffee]/60 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-amber-100/50 dark:hover:bg-slate-800 border border-amber-900/10 dark:border-slate-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* বইয়ের গ্রিড */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 8) * 0.06,
                  ease: [0.22, 1, 0.36, 1]
                }}
                key={book.id}
                className="bg-white dark:bg-slate-900/50 border border-amber-900/10 dark:border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-600/50 dark:hover:border-purple-500/50 transition-all group flex flex-col shadow-sm dark:shadow-xl"
              >
                <div className="h-28 sm:h-44 lg:h-52 overflow-hidden relative bg-amber-50 dark:bg-slate-950">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-2.5 sm:p-4 lg:p-5 flex flex-col flex-grow space-y-1 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs text-purple-700 dark:text-purple-400 font-medium">
                    {book.category}
                  </span>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-[11px] sm:text-sm pb-0.5 sm:pb-1 line-clamp-1">
                    {book.writer}
                  </p>

                  <div className="pt-auto mt-auto">
                    <Link
                      href={`/books/${book.id}`}
                      className="w-full py-1.5 sm:py-2 bg-purple-50 hover:bg-purple-700 dark:bg-slate-800 dark:hover:bg-purple-600 text-purple-700 hover:text-white dark:text-slate-200 dark:hover:text-white border border-purple-200/60 dark:border-slate-700 text-[10px] sm:text-xs font-semibold rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    >
                      <BookOpen size={12} className="sm:w-3.5 sm:h-3.5" />
                      বিস্তারিত পড়ুন
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12 sm:py-16 space-y-3 bg-white dark:bg-slate-900/30 rounded-2xl border border-amber-900/10 dark:border-slate-800 shadow-sm dark:shadow-xl"
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg">
              দুঃখিত, আপনার অনুসন্ধানের সাথে মিলে কোনো বই পাওয়া যায়নি।
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('সব'); }}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-md shadow-purple-700/20"
            >
              সব বই দেখুন
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}