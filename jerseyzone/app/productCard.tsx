"use client";

import { useCart } from "@/app/components/CartContext";

type Product = {
  id: number;
  name: string;
  team: string;
  category: string;
  price: number;
  image: string;
  badge: string;
  sizes: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="glass-card rounded-2xl p-4 text-center">
      <div className="relative">
        <div className="aspect-square rounded-xl overflow-hidden bg-purple-900/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>
      <h3 className="font-bold mt-3 text-sm md:text-base">{product.name}</h3>
      <p className="text-white/40 text-xs md:text-sm">{product.team}</p>
      <div className="sizes flex flex-wrap gap-1 justify-center my-2">
        {product.sizes.map(size => (
          <span key={size} className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs">
            {size}
          </span>
        ))}
      </div>
      <p className="text-[#A020F0] font-bold text-lg">{product.price} LYD</p>
      <button onClick={handleAdd} className="btn-add mt-2">
        <i className="fas fa-plus"></i> أضف للسلة
      </button>
    </div>
  );
}