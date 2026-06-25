"use client";

import Hero from "@/app/components/Hero";
import WhyUs from "@/app/components/WhyUs";
import Newsletter from "@/app/components/Newsletter";
import ProductGrid from "@/app/components/ProductGrid";
import { PRODUCTS } from "@/app/data/products";

export default function HomePage() {
  const featured = PRODUCTS.filter(p => p.badge === "الأكثر مبيعاً" || p.badge === "جديد").slice(0, 4);

  return (
    <>
      <Hero />
      
      {/* Featured Products */}
      <section className="section-wrap px-4 md:px-10 max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title text-2xl font-bold">
            <span className="text-[#A020F0]">★</span> الأكثر مبيعاً
          </h2>
          <a href="/shop" className="text-sm text-[#A020F0] hover:underline flex items-center gap-1">
            عرض الكل <span>←</span>
          </a>
        </div>
        <ProductGrid products={featured} />
      </section>

      <WhyUs />
      <Newsletter />
    </>
  );
}
"use client";

import { useState } from "react";
import ProductGrid from "@/app/components/ProductGrid";
import { PRODUCTS } from "@/app/data/products";

const TEAMS = [
  "الكل",
  "Real Madrid",
  "Barcelona",
  "Liverpool",
  "Arsenal",
  "Manchester City",
  "Chelsea",
  "Bayern Munich",
  "Juventus",
  "AC Milan",
  "Inter Milan",
  "PSG",
];

export default function ClubPage() {
  const [selectedTeam, setSelectedTeam] = useState("الكل");

  const clubProducts = PRODUCTS.filter(p => p.category === "club");
  
  const filtered = selectedTeam === "الكل"
    ? clubProducts
    : clubProducts.filter(p => p.team === selectedTeam);

  return (
    <div className="section-wrap px-4 md:px-10 max-w-7xl mx-auto py-8 pt-24">
      <div className="section-header flex justify-between items-center mb-6">
        <div>
          <h2 className="section-title text-2xl font-bold">⚽ أقمصة الأندية</h2>
          <p className="section-sub text-white/40 text-sm">تشكيلة حصرية من أشهر الأندية العالمية</p>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/5">
        {TEAMS.map(team => (
          <button
            key={team}
            className={`filter-btn ${selectedTeam === team ? "active" : ""}`}
            onClick={() => setSelectedTeam(team)}
          >
            {team === "الكل" ? "الكل" : team}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
"use client";

import { useState } from "react";
import ProductGrid from "@/app/components/ProductGrid";
import { PRODUCTS } from "@/app/data/products";

const COUNTRIES = [
  "الكل",
  "Argentina",
  "Brazil",
  "Spain",
  "France",
  "Portugal",
  "Germany",
];

export default function NationalPage() {
  const [selectedCountry, setSelectedCountry] = useState("الكل");

  const nationalProducts = PRODUCTS.filter(p => p.category === "national");
  
  const filtered = selectedCountry === "الكل"
    ? nationalProducts
    : nationalProducts.filter(p => p.team === selectedCountry);

  return (
    <div className="section-wrap px-4 md:px-10 max-w-7xl mx-auto py-8 pt-24">
      <div className="section-header flex justify-between items-center mb-6">
        <div>
          <h2 className="section-title text-2xl font-bold">🏆 أقمصة المنتخبات</h2>
          <p className="section-sub text-white/40 text-sm">تشكيلة حصرية من أقمصة المنتخبات العالمية</p>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/5">
        {COUNTRIES.map(country => (
          <button
            key={country}
            className={`filter-btn ${selectedCountry === country ? "active" : ""}`}
            onClick={() => setSelectedCountry(country)}
          >
            {country === "الكل" ? "الكل" : country}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
"use client";

import { useState } from "react";
import ProductGrid from "@/app/components/ProductGrid";
import { PRODUCTS } from "@/app/data/products";

const CLASSIC_TEAMS = [
  "الكل",
  "Arsenal",
  "Manchester United",
  "Milan",
  "Liverpool",
  "Barcelona",
  "Real Madrid",
];

export default function ClassicPage() {
  const [selectedTeam, setSelectedTeam] = useState("الكل");

  const classicProducts = PRODUCTS.filter(p => p.category === "classic");
  
  const filtered = selectedTeam === "الكل"
    ? classicProducts
    : classicProducts.filter(p => p.team === selectedTeam);

  return (
    <div className="section-wrap px-4 md:px-10 max-w-7xl mx-auto py-8 pt-24">
      <div className="section-header flex justify-between items-center mb-6">
        <div>
          <h2 className="section-title text-2xl font-bold">🕰️ أقمصة كلاسيكية</h2>
          <p className="section-sub text-white/40 text-sm">أقمصة أسطورية من عصور ذهبية لا تنسى</p>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/5">
        {CLASSIC_TEAMS.map(team => (
          <button
            key={team}
            className={`filter-btn ${selectedTeam === team ? "active" : ""}`}
            onClick={() => setSelectedTeam(team)}
          >
            {team === "الكل" ? "الكل" : team}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
"use client";

import { useState } from "react";
import ProductGrid from "@/app/components/ProductGrid";
import { PRODUCTS } from "@/app/data/products";

const CATEGORIES = [
  { key: "all", label: "الكل" },
  { key: "club", label: "أندية" },
  { key: "national", label: "منتخبات" },
  { key: "classic", label: "كلاسيكية" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="section-wrap px-4 md:px-10 max-w-7xl mx-auto py-8 pt-24">
      <div className="section-header flex justify-between items-center mb-6">
        <div>
          <h2 className="section-title text-2xl font-bold">🛍️ المتجر</h2>
          <p className="section-sub text-white/40 text-sm">جميع الأقمصة في مكان واحد</p>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/5">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            className={`filter-btn ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
