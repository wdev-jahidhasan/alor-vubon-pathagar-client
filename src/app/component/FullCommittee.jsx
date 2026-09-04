import { Mail, Phone } from "lucide-react";
export default function FullCommittee() {
  // সভাপতি এবং সাধারণ সম্পাদক (শীর্ষ নেতৃত্ব)
  const topLeaders = [
    {
      role: "সভাপতি",
      name: "মোঃ রাশেদ মিয়া",
      desc: "শিক্ষা ও সাহিত্য অনুরাগী, প্রতিষ্ঠাতা ও প্রধান উপদেষ্টা",
      phone: "০১৭০০-০০০০০৯",
      email: "rashed@example.com",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: "সাধারণ সম্পাদক",
      name: "মোঃ ইমরান",
      desc: "সমাজকর্মী ও তরুণ সংগঠক, পাঠাগার পরিচালনা পর্ষদ",
      phone: "০১৭০০-০০০০১০",
      email: "imran@example.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // কার্যনির্বাহী কমিটির অন্যান্য সদস্য
  const otherMembers = [
    {
      name: "মো. রফিকুল ইসলাম",
      role: "সহ-সভাপতি",
      phone: "০১৭০০-০০০০০১",
      email: "rafiqul@example.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "সাবিহা সুলতানা",
      role: "যুগ্ম সাধারণ সম্পাদক",
      phone: "০১৭০০-০০০০০২",
      email: "sabiha@example.com",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "তানভীর আহমেদ",
      role: "সাংগঠনিক সম্পাদক",
      phone: "০১৭০০-০০০০০৩",
      email: "tanvir@example.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "ফাতেমা তুজ জোহরা",
      role: "কোষাধ্যক্ষ",
      phone: "০১৭০০-০০০০০৪",
      email: "fatema@example.com",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "আব্দুল্লাহ আল নোমান",
      role: "দপ্তর সম্পাদক",
      phone: "০১৭০০-০০০০০৫",
      email: "noman@example.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "আরিফুর রহমান",
      role: "প্রচার সম্পাদক",
      phone: "০১৭০০-০০০০০৬",
      email: "arifur@example.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "শামসুল ইসলাম",
      role: "কার্যকরী সদস্য",
      phone: "০১৭০০-০০০০০৭",
      email: "shamsul@example.com",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "জুবায়ের হোসেন",
      role: "কার্যকরী সদস্য",
      phone: "০১৭০০-০০০০০৮",
      email: "zubayer@example.com",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-8">

      {/* ১. শীর্ষ নেতৃত্ব সেকশন (সভাপতি ও সাধারণ সম্পাদক) */}
      <div className="space-y-4">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-full">
            শীর্ষ নেতৃত্ব
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {topLeaders.map((leader, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border-2 border-purple-500/40 p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center gap-3 sm:gap-4 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-950/50 hover:-translate-y-1 transition-all duration-300 ease-in-out group relative overflow-hidden"
            >
              {/* প্রোফাইল ছবি */}
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-purple-500/30 group-hover:border-purple-400 shadow-xl shrink-0 transition-all duration-300"
              />

              {/* তথ্য */}
              <div className="flex-grow space-y-2 w-full">
                <div>
                  <h4 className="font-black text-white text-base sm:text-2xl tracking-tight group-hover:text-purple-300 transition-colors">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-300 font-bold mt-1 px-3 py-1 bg-purple-900/60 rounded-full inline-block border border-purple-700">
                    {leader.role}
                  </p>
                </div>

                {/* বিবরণ (desc) */}
                {leader.desc && (
                  <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 px-2 italic">
                    {leader.desc}
                  </p>
                )}

                {/* যোগাযোগ তথ্য (ফোন ও ইমেইল) */}
                <div className="text-slate-300 text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-700/80">
                  <a href={`tel:${leader.phone}`} className="flex items-center justify-center gap-1.5 hover:text-purple-300 transition-colors">
                    <Phone size={13} className="text-purple-400 shrink-0" />
                    <span className="truncate">{leader.phone}</span>
                  </a>
                  <a href={`mailto:${leader.email}`} className="flex items-center justify-center gap-1.5 hover:text-purple-300 transition-colors">
                    <Mail size={13} className="text-purple-400 shrink-0" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>

              {/* ডেকোরেশন লাইন */}
              <div className="w-16 sm:w-24 h-1 bg-purple-500/50 rounded-full group-hover:bg-purple-400 transition-all"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ২. পূর্ণাঙ্গ পরিচালনা পর্ষদ (অন্যান্য সদস্য - মোবাইল: ২ কলাম, বড় স্ক্রিন: ৩ কলাম) */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="text-center mb-2">
          <h3 className="text-sm sm:text-base font-semibold text-slate-400">
            কার্যনির্বাহী কমিটি
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {otherMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 p-3 sm:p-6 rounded-2xl flex flex-col items-center text-center gap-3 sm:gap-5 hover:border-purple-500/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out group"
            >
              {/* প্রোফাইল ছবি */}
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover border-2 sm:border-4 border-slate-700 group-hover:border-purple-500/50 shadow-lg shrink-0 transition-all duration-300"
              />

              {/* নাম ও পদবী */}
              <div className="flex-grow space-y-2 sm:space-y-3 w-full">
                <div>
                  <h4 className="font-extrabold text-white text-sm sm:text-xl tracking-tight group-hover:text-purple-300 transition-colors line-clamp-1">
                    {member.name}
                  </h4>
                  <p className="text-[11px] sm:text-sm text-purple-400 font-semibold mt-1 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-purple-950/50 rounded-full inline-block border border-purple-900">
                    {member.role}
                  </p>
                </div>

                {/* যোগাযোগ তথ্য (ফোন ও ইমেইল) */}
                <div className="text-slate-300 text-[10px] sm:text-xs space-y-1.5 sm:space-y-2.5 pt-2 border-t border-slate-700/70">
                  <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-1.5 hover:text-purple-300 transition-colors">
                    <Phone size={12} className="text-purple-400 shrink-0 sm:w-3.5 sm:h-3.5" />
                    <span className="truncate">{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-1.5 hover:text-purple-300 transition-colors">
                    <Mail size={12} className="text-purple-400 shrink-0 sm:w-3.5 sm:h-3.5" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </div>

              {/* ডেকোরেশন লাইন */}
              <div className="w-12 sm:w-20 h-1 bg-slate-700 rounded-full group-hover:bg-purple-500/50 transition-all mt-1"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}