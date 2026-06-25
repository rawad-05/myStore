import ProductCard from "@/app/components/ProductCard";

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

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-white/30 text-lg">
        لا توجد منتجات
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}