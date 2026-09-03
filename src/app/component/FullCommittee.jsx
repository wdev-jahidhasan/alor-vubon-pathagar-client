export default function FullCommittee() {
  // পূর্ণাঙ্গ কমিটির ডামি মেম্বার লিস্ট (সঠিক ছেলে ও মেয়ের ছবি সহ)
  const committeeMembers = [
    { 
      name: "মো. রফিকুল ইসলাম", 
      role: "সহ-সভাপতি", 
      dept: "অর্থ ও পরিকল্পনা",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" // পুরুষ প্রফেশনাল
    },
    { 
      name: "সাবিহা সুলতানা", 
      role: "যুগ্ম সাধারণ সম্পাদক", 
      dept: "সাহিত্য ও প্রকাশনা",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" // নারী প্রফেশনাল
    },
    { 
      name: "তানভীর আহমেদ", 
      role: "সাংগঠনিক সম্পাদক", 
      dept: "পাঠাগার পরিচালনা",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" // পুরুষ প্রফেশনাল
    },
    { 
      name: "ফাতেমা তুজ জোহরা", 
      role: "কোষাধ্যক্ষ", 
      dept: "হিসাব রক্ষণ",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" // নারী প্রফেশনাল
    },
    { 
      name: "ইমরান হোসেন", 
      role: "দপ্তর সম্পাদক", 
      dept: "যোগাযোগ ও তথ্য",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" // পুরুষ প্রফেশনাল
    },
    { 
      name: "আয়েশা সিদ্দিকা", 
      role: "প্রচার সম্পাদক", 
      dept: "মিডিয়া ও প্রেস",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" // নারী প্রফেশনাল
    },
    { 
      name: "রাশেদুল ইসলাম", 
      role: "কার্যকরী সদস্য", 
      dept: "সাধারণ",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" // পুরুষ প্রফেশনাল
    },
    { 
      name: "নুসরাত জাহান", 
      role: "কার্যকরী সদস্য", 
      dept: "সাধারণ",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" // নারী প্রফেশনাল
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {committeeMembers.map((member, index) => (
        <div 
          key={index} 
          className="bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between hover:border-purple-500/40 transition-all gap-4"
        >
          <div className="flex items-center gap-3">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-12 h-12 rounded-lg object-cover border border-purple-500/30 shadow-sm shrink-0"
            />
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">{member.name}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{member.dept}</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-medium rounded-lg shrink-0">
            {member.role}
          </span>
        </div>
      ))}
    </div>
  );
}