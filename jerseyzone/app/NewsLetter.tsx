"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("⚠️ الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }
    alert("✅ تم الاشتراك بنجاح!");
    setEmail("");
  };

  return (
    <section className="px-4 md:px-10 max-w-7xl mx-auto py-10">
      <div className="glass rounded-3xl p-8 text-center border border-purple-800/20">
        <h3 className="text-2xl font-bold">📬 اشترك في النشرة البريدية</h3>
        <p className="text-white/40 text-sm mt-1">احصل على أحدث العروض والتشكيلات أول بأول</p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-purple-500 transition outline-none"
          />
          <button type="submit" className="btn-primary px-8 py-3 text-sm">
            اشترك
          </button>
        </form>
      </div>
    </section>
  );
}