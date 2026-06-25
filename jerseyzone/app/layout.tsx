import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/components/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Toast from "@/app/components/Toast";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JERSEY ZONE • عيش شغفك، البس هويتك",
  description: "أحدث تشكيلة من أقمصة كرة القدم الأصلية في ليبيا",
  icons: {
    icon: "/jerseyzone-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
