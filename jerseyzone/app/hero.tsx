"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden pt-28 pb-12 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">عيش شغفك،</span>
            <br />
            <span className="text-white">البس هويتك</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            أحدث تشكيلة من أقمصة كرة القدم الأصلية. جودة احترافية،
            تصاميم حصرية، وشحن سريع إلى جميع أنحاء ليبيا.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/shop" className="btn-primary">
              <i className="fas fa-shopping-bag"></i> تسوق الآن
            </Link>
            <Link href="/club" className="btn-outline">
              استكشف المجموعات
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 w-80 h-80 md:w-[380px] md:h-[380px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10">
            <img
              src="/jerseyzone-logo.jpg"
              alt="JERSEY ZONE"
              className="w-60 md:w-72 rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-800/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}