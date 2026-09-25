'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Star, ArrowLeft, MessageSquare, X, ExternalLink, Share2, Check, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { books } from '@/data/booksData';
import { motion, AnimatePresence } from 'framer-motion';

const categoryFolderMap = {
  "উপন্যাস": "novel",
  "মুক্তিযুদ্ধ": "war",
  "কাব্যগ্রন্থ": "poetry",
  "অনুবাদ": "translation",
  "নাটক": "drama",
  "প্রবন্ধ": "essay",
  "বিজ্ঞান": "science",
  "ভ্রমণ": "travel",
  "ইতিহাস": "history",
  "ছোটগল্প": "short-story",
  "ধর্মীয়": "religious",
  "অন্যান্য": "other"
};

export default function BookDetailsPage({ params }) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  const book = books.find((b) => b.id === id);

  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!book) return;

    const folderName = categoryFolderMap[book.category] || book.category.toLowerCase();

    async function fetchReviews() {
      try {
        const res = await fetch(`/reviewsAndPdfs/${folderName}/review.json`);
        if (res.ok) {
          const data = await res.json();
          const bookReviews = data.filter((item) => item.id === book.id);
          setReviews(bookReviews);
        }
      } catch (error) {
        console.log("Review not found");
      }
    }

    fetchReviews();
  }, [book]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-[#ffffee] dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col items-center justify-center p-6 space-y-4 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-red-500 dark:text-red-400">দুঃখিত, বইটি খুঁজে পাওয়া যায়নি!</h1>
          <Link
            href="/books"
            className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg shadow-purple-700/25"
          >
            <ArrowLeft size={16} /> সব বইয়ের তালিকায় ফিরে যান
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ffffee] dark:bg-slate-950 text-slate-900 dark:text-white pt-6 sm:pt-10 pb-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">

      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* ব্যাক বাটন এবং শেয়ার বাটন */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-400 text-xs sm:text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            বইয়ের তালিকায় ফিরে যান
          </Link>

          <button
            onClick={handleShare}
            className="px-3.5 py-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-amber-900/10 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            {copied ? <Check size={14} className="text-emerald-500 dark:text-emerald-400" /> : <Share2 size={14} />}
            {copied ? 'লিংক কপি হয়েছে!' : 'শেয়ার করুন'}
          </button>
        </motion.div>

        {/* মূল কার্ড */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-slate-900/60 border border-amber-900/10 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start shadow-2xl backdrop-blur-md"
        >

          {/* ইমেজ সেকশন */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-amber-900/10 dark:border-slate-800/80 shadow-2xl h-72 sm:h-96 md:h-[420px] group">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* ডিটেইলস ও বাটন সেকশন */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block bg-purple-100 dark:bg-purple-950/85 border border-purple-300 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-inner">
                {book.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
                {book.title}
              </h1>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
                লেখক: <span className="text-purple-700 dark:text-purple-400 font-semibold">{book.writer}</span>
              </p>
            </div>

            <div className="border-t border-amber-900/10 dark:border-slate-800/80 pt-4 space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">বই সম্পর্কে বিস্তারিত</h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* ই-লাইব্রেরি ভিজিট করুন এবং রিভিউ বাটন */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://drive.google.com/drive/folders/1k6i68jIb_HB3E7PLouuqVs-PiKh0iQPM?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-600/25 hover:scale-[1.02] cursor-pointer"
              >
                <ExternalLink size={16} /> ই-লাইব্রেরি ভিজিট করুন
              </a>

              {reviews.length > 0 && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-700/25 hover:scale-[1.02] cursor-pointer"
                >
                  <MessageSquare size={16} /> রিভিউ দেখুন ({reviews.length})
                </button>
              )}
            </div>

            {/* যোগাযোগের ও অন্যান্য অপশন বক্স */}
            <div className="bg-amber-50/60 dark:bg-slate-950/80 border border-amber-900/10 dark:border-slate-800/80 rounded-2xl p-4 space-y-3 shadow-inner">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                বইটি সংগ্রহ করতে বা পাঠাগারের সদস্য হতে যোগাযোগ করুন:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="px-3 py-2.5 bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 font-bold text-[11px] sm:text-xs rounded-xl border border-amber-900/10 dark:border-slate-800 shadow-sm hover:underline flex items-center justify-center text-center whitespace-nowrap"
                >
                  ০১৭-------------
                </a>

                <a
                  href="https://www.facebook.com/people/%E0%A6%86%E0%A6%B2%E0%A7%8B%E0%A6%B0-%E0%A6%AD%E0%A7%81%E0%A6%AC%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-Alor-Vubon-Pathagar/100064773873791/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold text-[11px] sm:text-xs rounded-xl border border-blue-200/50 dark:border-blue-800/40 transition-colors flex items-center justify-center text-center shadow-sm"
                >
                  ফেসবুক পেজ
                </a>

                <a
                  href="https://docs.google.com/forms/d/1FV5E9iroVe1c7zK5VWh0ASdjrbGow4skdTEcbJTQSVs/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold text-[11px] sm:text-xs rounded-xl border border-purple-200/60 dark:border-purple-800/40 transition-colors flex items-center justify-center text-center shadow-sm cursor-pointer gap-1.5"
                >
                  <UserPlus size={14} /> সদস্য ফরম
                </a>
              </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* রিভিউ মডাল */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#ffffee] dark:bg-slate-900 border border-amber-900/10 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-5 sm:p-7 space-y-5 relative max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-amber-900/10 dark:border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">পাঠকদের রিভিউ</h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer p-1.5 rounded-xl hover:bg-amber-100/60 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-amber-900/10 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{rev.reviewer}</h4>
                      <span className="text-[11px] text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-md border border-purple-200 dark:border-purple-800/40">
                        {rev.reviewerDetails}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{rev.review}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}