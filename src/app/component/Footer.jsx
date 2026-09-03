import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* কলাম ১: লোগো ও পাঠাগারের নাম */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/avp-logo-16-9.jpeg" 
                  alt="আলোর ভুবন পাঠাগার লোগো" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-purple-400">আলোর ভুবন পাঠাগার</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              জ্ঞানের আলো ছড়িয়ে দিতে এবং গ্রামের পাঠকদের মধ্যে পড়ার অভ্যাস গড়ে তুলতে আমাদের এই ক্ষুদ্র প্রয়াস।
            </p>
          </div>

          {/* কলাম ২: দ্রুত লিংকসমূহ */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold mb-1">গুরুত্বপূর্ণ লিংক</h4>
            <Link href="/" className="text-sm hover:text-purple-400 transition-colors">হোম</Link>
            <Link href="/books" className="text-sm hover:text-purple-400 transition-colors">বইয়ের তালিকা</Link>
            <Link href="/notices" className="text-sm hover:text-purple-400 transition-colors">নোটিশ বোর্ড</Link>
            <Link href="/emergency-contacts" className="text-sm hover:text-purple-400 transition-colors">জরুরি নম্বরসমূহ</Link>
          </div>

          {/* কলাম ৩: যোগাযোগ তথ্য */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold mb-1">যোগাযোগ</h4>
            <p className="text-sm text-slate-400">পারগয়রা, গোবিন্দগঞ্জ, গাইবান্ধা</p>
            <p className="text-sm text-slate-400">ইমেইল: alorvubonpathagar@gmail.com</p>
            <p className="text-sm text-slate-400">ফোন: +৮৮০ ১XXXXXXXXX</p>
          </div>

        </div>

        {/* কপিরাইট সেকশন */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} আলোর ভুবন পাঠাগার। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}