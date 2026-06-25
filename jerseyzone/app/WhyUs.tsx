export default function WhyUs() {
  const features = [
    { icon: "fa-check-circle", title: "جودة عالية", desc: "أقمشة احترافية مطابقة للمواصفات" },
    { icon: "fa-truck-fast", title: "توصيل سريع", desc: "شحن إلى جميع مدن ليبيا" },
    { icon: "fa-tag", title: "أسعار ممتازة", desc: "أفضل الأسعار وعروض حصرية" },
    { icon: "fa-headset", title: "دعم مباشر", desc: "فريق متخصص 24/7" },
  ];

  return (
    <section className="px-4 md:px-10 max-w-7xl mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="section-title text-2xl font-bold">
          لماذا <span className="text-gradient">JERSEY ZONE</span>؟
        </h2>
        <p className="section-sub text-white/40 text-sm">نقدم لك أفضل تجربة تسوق لأقمصة كرة القدم</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 text-center">
            <div className="text-3xl text-[#A020F0] mb-3">
              <i className={`fas ${f.icon}`}></i>
            </div>
            <h4 className="font-bold text-sm md:text-base">{f.title}</h4>
            <p className="text-white/40 text-xs md:text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}