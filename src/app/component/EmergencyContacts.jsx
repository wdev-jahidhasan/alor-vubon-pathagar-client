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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">

        {/* মোডাল হেডার */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <h3 className="text-xl font-bold text-purple-400">জরুরি নম্বরসমূহ</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl font-bold transition-colors cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* মোডাল বডি (লিস্ট) */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-3">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/50 transition-all gap-2"
            >
              <span className="text-sm font-medium text-slate-200">{item.title}</span>
              <a
                href={`tel:${item.number}`}
                className="text-sm font-bold text-purple-400 hover:text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg w-fit transition-colors"
              >
                {item.number}
              </a>
            </div>
          ))}
        </div>

        {/* মোডাল ফুটার */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
}