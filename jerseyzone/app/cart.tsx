"use client";

import { useCart } from "@/app/components/CartContext";
import { useState } from "react";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const formatPrice = (amount: number) => `${amount} LYD`;

  const sendWhatsAppOrder = () => {
    const name = (document.getElementById("fullName") as HTMLInputElement)?.value || "غير محدد";
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || "غير محدد";
    const altPhone = (document.getElementById("altPhone") as HTMLInputElement)?.value || "غير محدد";
    const city = (document.getElementById("city") as HTMLInputElement)?.value || "غير محدد";
    const area = (document.getElementById("area") as HTMLInputElement)?.value || "غير محدد";
    const address = (document.getElementById("address") as HTMLInputElement)?.value || "غير محدد";
    const notes = (document.getElementById("notes") as HTMLTextAreaElement)?.value || "لا يوجد";

    if (!name || !phone || !city || !address) {
      alert("⚠️ الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    if (cart.length === 0) {
      alert("⚠️ سلة التسوق فارغة");
      return;
    }

    let productsStr = cart.map(item =>
      `• ${item.name}\n  المقاس: ${item.sizes[0] || 'M'}\n  الكمية: ${item.qty}\n  السعر: ${formatPrice(item.price * item.qty)}`
    ).join("\n\n");

    const total = getCartTotal();

    const msg = `🛒 *طلب جديد - JERSEY ZONE*%0A%0A👤 *الاسم:* ${name}%0A📱 *الهاتف:* ${phone}%0A📱 *هاتف بديل:* ${altPhone}%0A🏙️ *المدينة:* ${city}%0A📍 *المنطقة:* ${area}%0A🏠 *العنوان:* ${address}%0A📝 *ملاحظات:* ${notes}%0A%0A📦 *المنتجات:*%0A${productsStr}%0A%0A💰 *المجموع الكلي:* ${formatPrice(total)}%0A%0Aشكراً لتسوقكم من JERSEY ZONE! ❤️`;

    const url = `https://wa.me/2189156949?text=${msg}`;
    window.open(url, "_blank");
    clearCart();
    onClose();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🛒 سلة التسوق</h2>
        <button onClick={onClose} className="text-white/40 hover:text-white text-xl">
          <i className="fas fa-times"></i>
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12 text-white/30">🛒 سلة التسوق فارغة</div>
      ) : (
        <>
          <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover bg-purple-900/20" />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-white/40">{item.team}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 rounded-full bg-purple-900/20 hover:bg-purple-600 transition"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold">{item.qty}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 rounded-full bg-purple-900/20 hover:bg-purple-600 transition"
                  >
                    +
                  </button>
                </div>
                <div className="text-[#A020F0] font-bold text-sm min-w-[70px] text-left">
                  {formatPrice(item.price * item.qty)}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white/20 hover:text-red-500 transition"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between py-4 border-t border-purple-900/30 mt-4">
            <span className="font-bold text-lg">المجموع</span>
            <span className="text-[#A020F0] font-bold text-xl">{formatPrice(getCartTotal())}</span>
          </div>

          <button
            onClick={() => setShowCheckout(!showCheckout)}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#A020F0] to-[#8A2BE2] text-white font-bold transition hover:scale-[1.02] shadow-lg shadow-purple-500/30"
          >
            {showCheckout ? "إخفاء نموذج الدفع" : "المتابعة إلى الدفع"}
          </button>

          {showCheckout && (
            <div className="mt-4 pt-4 border-t border-purple-900/30">
              <h3 className="text-center font-bold text-lg mb-4">📋 معلومات الطلب</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-white/50 block mb-1">الاسم الكامل</label>
                  <input id="fullName" type="text" placeholder="أحمد محمد" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="text-xs text-white/50 block mb-1">رقم الهاتف</label>
                  <input id="phone" type="tel" placeholder="0912345678" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="text-xs text-white/50 block mb-1">هاتف بديل (اختياري)</label>
                  <input id="altPhone" type="tel" placeholder="0912345679" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="text-xs text-white/50 block mb-1">المدينة</label>
                  <input id="city" type="text" placeholder="طرابلس" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="text-xs text-white/50 block mb-1">المنطقة</label>
                  <input id="area" type="text" placeholder="سوق الجمعة" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="text-xs text-white/50 block mb-1">العنوان التفصيلي</label>
                  <input id="address" type="text" placeholder="شارع الاستقلال، مبنى 12" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs text-white/50 block mb-1">ملاحظات إضافية</label>
                  <textarea id="notes" rows={2} placeholder="أي ملاحظات حول الطلب..." className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 transition resize-none"></textarea>
                </div>
              </div>
              <button
                onClick={sendWhatsAppOrder}
                className="w-full mt-4 py-3 rounded-full bg-[#25D366] text-white font-bold transition hover:scale-[1.02] shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> تأكيد الطلب عبر واتساب
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}