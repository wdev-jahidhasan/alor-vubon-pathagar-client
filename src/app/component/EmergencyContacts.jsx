import React from 'react';

export default function EmergencyContacts({ isOpen, onClose }) {
  if (!isOpen) return null;

  // জরুরি সেবার ডেটা তালিকা
  const contacts = [
    { title: 'জাতীয় জরুরি সেবা', number: '999' },
    { title: 'উপজেলা স্বাস্থ্য কমপ্লেক্স, গোবিন্দগঞ্জ', number: '+৮৮০ ১XXXXXXXXX' },
    { title: 'ফায়ার সার্ভিস, গোবিন্দগঞ্জ', number: '+৮৮০ ১XXXXXXXXX' },
    { title: 'ফায়ার সার্ভিস, পলাশবাড়ী', number: '+৮৮০ ১XXXXXXXXX' },
    { title: 'ফায়ার সার্ভিস, ঘোড়াঘাট', number: '+৮৮০ ১XXXXXXXXX' },
    { title: 'গোবিন্দগঞ্জ থানা', number: '+৮৮০ ১XXXXXXXXX' },
    { title: 'গোবিন্দগঞ্জ হাইওয়ে থানা', number: '+৮৮০ ১XXXXXXXXX' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="bg-[#ffffee] dark:bg-slate-900 border border-amber-900/10 dark:border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 transition-colors duration-300">

        {/* মোডাল হেডার */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/10 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-950">
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">জরুরি নম্বরসমূহ</h3>
          <button
            onClick={onClose}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-2xl font-bold transition-colors cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* মোডাল বডি (লিস্ট) */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-3">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-amber-900/10 dark:border-slate-800 hover:border-purple-600/50 dark:hover:border-purple-500/50 transition-all gap-2 shadow-sm text-center sm:text-left"
            >
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.title}</span>
              <a
                href={`tel:${item.number}`}
                className="text-sm font-extrabold text-purple-700 dark:text-white bg-purple-100/80 dark:bg-purple-900/80 border border-purple-300/60 dark:border-purple-700 px-3.5 py-1 rounded-lg w-fit mx-auto sm:mx-0 transition-colors hover:bg-purple-200 dark:hover:bg-purple-800"
              >
                {item.number}
              </a>
            </div>
          ))}
        </div>

        {/* মোডাল ফুটার */}
        <div className="px-6 py-4 border-t border-amber-900/10 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer shadow-md shadow-purple-700/25"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
}