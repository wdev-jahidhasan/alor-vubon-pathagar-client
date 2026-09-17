import React from 'react';
import { BookOpen, Star, ArrowLeft, Phone, Share2 } from 'lucide-react';
import Link from 'next/link';

export default async function BookDetailsPage({ params }) {
  // Next.js 15 অনুযায়ী params হ্যান্ডেল করা
  const { id } = await params;

  // আপনার বইগুলোর ডাটা (এখানে আপনি চাইলে পরে API বা ডাটাবেজ কানেক্ট করতে পারেন)
  const booksData = {
    "pather-panchali": {
      title: "পথের পাঁচালী",
      writer: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      category: "উপন্যাস",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop",
      description: "পথের পাঁচালী বিভূতিভূষণ বন্দ্যোপাধ্যায় রচিত একটি বিখ্যাত বাংলা উপন্যাস। এটি ১৯২৯ সালে প্রকাশিত হয়। এই উপন্যাসে গ্রামীণ বাংলার প্রকৃতি ও মানুষের জীবনযাত্রার অত্যন্ত সুক্ষ্ম ও বাস্তবসম্মত চিত্র ফুটিয়ে তোলা হয়েছে। অপু ও দুর্গার শৈশব, তাদের পরিবার এবং গ্রামীণ সমাজের নানা রূপ এই উপন্যাসের মূল বিষয়বস্তু।"
    },
    "aguner-poroshmoni": {
      title: "আগুনের পরশমণি",
      writer: "হুমায়ূন আহমেদ",
      category: "মুক্তিযুদ্ধ",
      rating: "৪.৮",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=600&auto=format&fit=crop",
      description: "আগুনের পরশমণি বাংলাদেশের স্বাধীনতা যুদ্ধভিত্তিক একটি জনপ্রিয় উপন্যাস, যা লিখেছেন কথাসাহিত্যিক হুমায়ূন আহমেদ। এই উপন্যাসে ১৯৭১ সালের অবরুদ্ধ ঢাকার একটি মধ্যবিত্ত পরিবারের চোখে মুক্তিযুদ্ধের দিনগুলোর আবেগ, আতঙ্ক এবং বিজয়ের প্রত্যাশাকে সুন্দরভাবে তুলে ধরা হয়েছে।"
    },
    "je-jole-agun-jole": {
      title: "যে জলে আগুন জ্বলে",
      writer: "হেলাল হাফিজ",
      category: "কাব্যগ্রন্থ",
      rating: "৪.৭",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
      description: "যে জলে আগুন জ্বলে কবি হেলাল হাফিজের প্রথম কাব্যগ্রন্থ। ১৯৮৬ সালে প্রকাশিত এই বইটি বাংলা কবিতার জগতে এক অভাবনীয় আলোড়ন সৃষ্টি করেছিল। বইটির বহু পঙ্‌ক্তি মানুষের মুখে মুখে আজো উচ্চারিত হয়। যৌবনের দ্রোহ, প্রেম এবং নস্টালজিয়া এই কাব্যগ্রন্থের প্রধান সুর।"
    },
    "a-tale-of-two-cities": {
      title: "এ টেল অব টু সিটিজ",
      writer: "চার্লস ডিকেন্স",
      category: "অনুবাদ",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
      description: "চার্লস ডিকেন্সের বিখ্যাত ঐতিহাসিক উপন্যাস 'A Tale of Two Cities'-এর বাংলা অনুবাদ সংস্করণ। ফরাসি বিপ্লবের পটভূমিতে লন্ডন ও প্যারিস—এই দুই শহরের প্রেক্ষাপটে রচিত এই উপন্যাসে মানুষের আত্মত্যাগ, ভালোবাসা এবং বিপ্লবের নির্মম বাস্তবতার অপূর্ব মেলবন্ধন ঘটেছে।"
    },
    "payer-awaj-pawa-jay": {
      title: "পায়ের আওয়াজ পাওয়া যায়",
      writer: "সৈয়দ শামসুল হক",
      category: "নাটক",
      rating: "৪.৮",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
      description: "পায়ের আওয়াজ পাওয়া যায় সৈয়দ শামসুল হক রচিত একটি বহুল পঠিত কাব্যনাট্য। ১৯৭১ সালের মুক্তিযুদ্ধের পটভূমিতে গ্রামীণ জনপদের একটি গ্রামের মানুষের মনস্তত্ত্ব এবং পাক হানাদার বাহিনীর বর্বরতার বিরুদ্ধে সাধারণ মানুষের প্রতিরোধ ও আত্মত্যাগের চিত্র এতে রূপায়িত হয়েছে।"
    },
    "kobitar-kotha": {
      title: "কবিতার কথা",
      writer: "জীবনানন্দ দাশ",
      category: "প্রবন্ধ",
      rating: "৪.৬",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
      description: "কবিতার কথা আধুনিক বাংলা কবিতার অন্যতম শ্রেষ্ঠ কবি জীবনানন্দ দাশের একটি অনন্য প্রাবন্ধিক গ্রন্থ। এতে কবি কবিতার সংজ্ঞা, এর সৃষ্টির রহস্য, ভাষার ব্যবহার এবং বিশ্বসাহিত্যের সাথে বাংলা কবিতার তুলনামূলক আলোচনা অত্যন্ত প্রাজ্ঞ ভঙ্গিতে উপস্থাপন করেছেন।"
    },
    "sagorer-rohosyopuri": {
      title: "সাগরের রহস্যপুরী",
      writer: "আবদুল্লাহ আল মুতী শরফুদ্দিন",
      category: "বিজ্ঞান",
      rating: "৪.৯",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
      description: "সাগরের রহস্যপুরী প্রখ্যাত বিজ্ঞান লেখক আবদুল্লাহ আল মুতী শরফুদ্দিন রচিত একটি জনপ্রিয় বিজ্ঞান বিষয়ক গ্রন্থ। সমুদ্রের তলদেশের অজানা রহস্য, জলরাশির নিচে লুকিয়ে থাকা জীববৈচিত্র্য এবং সমুদ্রবিজ্ঞান সম্পর্কে কিশোর ও সাধারণ পাঠকদের মনে কৌতূহল জাগানোর জন্য এটি একটি মাস্টারপিস।"
    },
    "deshe-bideshe": {
      title: "দেশে ‍বিদেশে",
      writer: "সৈয়দ মুজতবা আলী",
      category: "ভ্রমণ",
      rating: "৪.৭",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=600&auto=format&fit=crop",
      description: "দেশে বিদেশে প্রখ্যাত সাহিত্যিক ও ভ্রমণকাহিনীকার সৈয়দ মুজতবা আলীর একটি ক্লাসিক ভ্রমণসাহিত্য। কাবুলে তাঁর প্রবাস জীবনের দিনগুলো, সেখানকার মানুষের সংস্কৃতি, রীতিনীতি এবং তাঁর নিজস্ব হাস্যরসাত্মক ও সুমধুর লেখনী এই বইটিকে বাংলা সাহিত্যের অন্যতম সেরা ভ্রমণকাহিনীতে পরিণত করেছে।"
    }
  };

  // আইডি অনুযায়ী বই খুঁজে বের করা, না পেলে ডিফল্ট একটি মেসেজ দেখানোর ব্যবস্থা
  const book = booksData[id];

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-400">দুঃখিত, বইটি খুঁজে পাওয়া যায়নি!</h1>
        <p className="text-slate-400 text-sm">আপনি সঠিক লিঙ্কে প্রবেশ করেছেন কি না দয়া করে নিশ্চিত করুন।</p>
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

        {/* ব্যাক বাটন */}
        <div>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs sm:text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            বইয়ের তালিকায় ফিরে যান
          </Link>
        </div>

        {/* মেইন ডিটেইলস কার্ড */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start shadow-xl">
          
          {/* বইয়ের ছবি */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-72 sm:h-96 md:h-[420px]">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md text-purple-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-purple-800/40 flex items-center gap-1.5 shadow-md">
              <Star size={14} className="fill-purple-400 text-purple-400" />
              {book.rating}
            </span>
          </div>

          {/* বইয়ের তথ্য */}
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

            {/* কল টু অ্যাকশন বা কন্টাক্ট ইনফো বক্স */}
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