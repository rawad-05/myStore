"use client";

import { useEffect, useState } from "react";

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleToast = (e: CustomEvent) => {
      setMessage(e.detail);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener("toast", handleToast as EventListener);
    return () => window.removeEventListener("toast", handleToast as EventListener);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 px-6 py-3 rounded-xl glass border border-purple-500/30 text-white font-semibold shadow-2xl shadow-purple-500/20 animate-fadeIn">
      {message}
    </div>
  );
}