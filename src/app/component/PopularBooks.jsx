"use client"
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/booksData";
import { motion } from "framer-motion";

export default function PopularBooks() {
  const popularBooks = books.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-[#ffffee] dark:bg-slate-950 border-b border-amber-900/10 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">

        {/* সেকশন হেডার অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-12 space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            জনপ্রিয় <span className="text-purple-700 dark:text-purple-400">বইসমূহ</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base px-2">
            পাঠকদের মাঝে সবচেয়ে বেশি পঠিত ও সমাদৃত বইগুলোর তালিকা
          </p>
        </motion.div>

        {/* বইয়ের কার্ড গ্রিড ও স্মুথ এন্ট্রান্স অ্যানিমেশন */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {popularBooks.map((book, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              key={book.id}
              className="bg-white dark:bg-slate-900/50 border border-amber-900/10 dark:border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-600/50 dark:hover:border-purple-500/50 transition-all group flex flex-col shadow-sm dark:shadow-xl"
            >
              <div className="h-28 sm:h-40 lg:h-48 overflow-hidden relative bg-amber-50 dark:bg-slate-950">
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
                <p className="text-slate-600 dark:text-slate-300 text-[11px] sm:text-sm pb-0.5 sm:pb-2 line-clamp-1">
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

        {/* সব বই দেখুন বাটন অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center pt-2 sm:pt-4"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold text-xs sm:text-base lg:text-lg transition-colors group"
          >
            সব বই দেখুন <ArrowRight size={14} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}