'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Star, ArrowLeft, Phone, FileText, MessageSquare, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { books } from '@/data/booksData';

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

  useEffect(() => {
    if (!book) return;

    // বাংলা ক্যাটাগরি থেকে সঠিক ইংরেজি ফোল্ডার নাম বের করা
    const folderName = categoryFolderMap[book.category] || book.category.toLowerCase();

    // ক্যাটাগরি অনুযায়ী রিভিউ ফেচ করা
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

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-400">দুঃখিত, বইটি খুঁজে পাওয়া যায়নি!</h1>
        <Link
          href="/books"
          className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} /> সব বইয়ের তালিকায় ফিরে যান
        </Link>
      </div>
    );
  }

  const folderName = categoryFolderMap[book.category] || book.category.toLowerCase();

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-6 sm:pt-10 pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">

        {/* ব্যাক বাটন এবং ফেসবুক নোটিশ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs sm:text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            বইয়ের তালিকায় ফিরে যান
          </Link>

          <div className="text-[11px] sm:text-xs text-slate-300">
            নিয়মিত আপডেটের জন্য আমাদের{' '}
            <a
              href="https://www.facebook.com/people/%E0%A6%86%E0%A6%B2%E0%A7%8B%E0%A6%B0-%E0%A6%BD%E0%A7%81%E0%A6%AC%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-Alor-Vubon-Pathagar/100064773873791/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 font-bold hover:underline inline-flex items-center gap-1 mx-1"
            >
              ফেসবুক পেজ
            </a>{' '}
            ফলো করুন।
          </div>
        </div>

        {/* মূল কার্ড */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start shadow-xl">

          {/* ইমেজ সেকশন */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-72 sm:h-96 md:h-[420px]">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ডিটেইলস ও বাটন সেকশন */}
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

            {/* ই-লাইব্রেরি ভিজিট করুন এবং রিভিউ বাটন */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://drive.google.com/drive/folders/1k6i68jIb_HB3E7PLouuqVs-PiKh0iQPM?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <ExternalLink size={16} /> ই-লাইব্রেরি ভিজিট করুন
              </a>

              {reviews.length > 0 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  <MessageSquare size={16} /> রিভিউ দেখুন ({reviews.length})
                </button>
              )}
            </div>

            {/* যোগাযোগের বক্স */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300">
                এই বইটি সংগ্রহ করতে বা পাঠাগার সম্পর্কে জানতে যোগাযোগ করুন:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/30"
                >
                  <Phone size={14} /> কল করুন: +৮৮০ ১XXXXXXXXX
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

      {/* রিভিউ মডাল */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-4 sm:p-6 space-y-5 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-purple-400">পাঠকদের রিভিউ</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white cursor-pointer p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {reviews.map((rev, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-white text-sm">{rev.reviewer}</h4>
                    <span className="text-[11px] text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded-md border border-purple-800/30">
                      {rev.reviewerDetails}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{rev.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}