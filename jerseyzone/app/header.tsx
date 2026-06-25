"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/components/CartContext";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/club", label: "أندية" },
    { href: "/national", label: "منتخبات" },
    { href: "/classic", label: "كلاسيكية" },
    { href: "/shop", label: "المتجر" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8 py-3 flex items-center justify-between border-b border-purple-900/30">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A020F0] to-[#4B0082] flex items-center justify-center font-bold text-white text-xl shadow-glow">
          JZ
        </div>
        <span className="text-xl font-bold">
          <span className="text-gradient">JERSEY</span> ZONE
        </span>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-2">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isActive(item.href)
                ? "text-[#A020F0] bg-purple-900/20"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="text-white/50 hover:text-white transition">
          <i className="fas fa-search text-lg"></i>
        </button>
        <button
          className="text-white/50 hover:text-[#A020F0] transition relative"
          onClick={() => setCartOpen(true)}
        >
          <i className="fas fa-shopping-bag text-xl"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#A020F0] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button className="text-white/50 hover:text-white transition">
          <i className="fas fa-user-circle text-2xl"></i>
        </button>
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="bg-[#120c1e] border border-purple-800/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={e => e.stopPropagation()}
          >
            <Cart onClose={() => setCartOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

// Import Cart component
import Cart from "@/app/components/Cart";