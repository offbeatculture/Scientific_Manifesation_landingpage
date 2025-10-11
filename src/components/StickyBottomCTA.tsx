// StickyBottomCTA.tsx
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

function useRazorpay() {
  useEffect(() => {
    if (window.Razorpay) return;
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

export const StickyBottomCTA = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useRazorpay();

  const CREATE_ORDER_URL =
    "https://drvalarproject.netlify.app/.netlify/functions/create-order";

  const handlePay = useCallback(async () => {
    if (!window.Razorpay) {
      alert("Payment system is initializing. Please try again in a moment.");
      return;
    }

    // ⚠️ UI-only: amount unchanged. TODO: set to 900 for ₹9 when backend is ready.
    const amountPaise = 9901;

    const orderRes = await fetch(CREATE_ORDER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        notes: { product: "90-Min Scientific Manifestation Breakthrough" },
      }),
    });

    const order = await orderRes.json();
    if (!order?.id) {
      console.error("Order creation failed:", order);
      alert("Could not create order. Please try again.");
      return;
    }

    const options: any = {
      key: "rzp_live_wiof4A5PtjJvJM",
      order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      name: "Scientific Manifestation Breakthrough",
      description: "90-Min LIVE with Ankit Neerav (₹9 promo - UI)",
      theme: { color: "#0e4740" },
      prefill: { name: "", email: "", contact: "" },
      handler: () => {
        window.location.href = "/ty-er-fb1";
      },
      modal: { ondismiss: () => console.log("Checkout closed") },
    };

    const rzp = new window.Razorpay(options);
    rzp.on?.("payment.failed", (e: any) => {
      console.error("Payment failed:", e);
      alert(e?.error?.description || "Payment failed. Please try again.");
    });
    rzp.open();
  }, []);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    let timeoutId: number | undefined;

    const getDocEl = () =>
      (document.scrollingElement || document.documentElement) as HTMLElement;

    const checkVisibility = () => {
      const el = getDocEl();
      const scrollY = window.scrollY || el.scrollTop || 0;
      const windowHeight = window.innerHeight || 0;
      const docHeight = el.scrollHeight || 0;
      const scrollable = Math.max(docHeight - windowHeight, 0);
      const threshold = scrollable * 0.15;
      const scrolledEnough = scrollY > 120 || scrollY > threshold;
      setIsVisible(scrolledEnough);
    };

    const showIfNotScrollableSoon = () => {
      const el = getDocEl();
      const scrollable = Math.max(el.scrollHeight - (window.innerHeight || 0), 0);
      if (scrollable < 8) {
        timeoutId = window.setTimeout(() => setIsVisible(true), 1000);
      }
    };

    checkVisibility();
    showIfNotScrollableSoon();

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);
    window.addEventListener("orientationchange", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("orientationchange", checkVisibility);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isMounted || !isVisible || dismissed) return null;

  const bar = (
    <div
      className="
        fixed inset-x-0 bottom-0 z-[9999]
        px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2
        animate-slide-up
      "
      role="region"
      aria-label="Sticky CTA"
      style={{ isolation: "isolate" }}
    >
      <div
        className="
          mx-auto max-w-xl relative overflow-hidden
          rounded-2xl bg-[#0F2925] text-white
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        "
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-[#FDE68A]/50 pointer-events-none animate-glow" />
        <div className="flex items-center gap-3 px-4 py-3 relative z-10">
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">
              From Frustrated Dreamer → Manifestation Master
            </div>
            <div className="text-xs text-[#FDE68A] font-medium animate-price-pop">
              LIVE: Next Monday • 7:30 PM — 90-Min • Today Only ₹9
            </div>
          </div>

          <button
            className="
              ml-auto inline-flex items-center gap-2
              rounded-full px-4 py-2 font-semibold text-[#0F2925]
              bg-[#FDE68A] hover:bg-[#fcd34d]
              transition-transform duration-300 active:scale-95
              shadow-[0_6px_20px_rgba(253,230,138,0.35)]
            "
            onClick={handlePay}
          >
            Get My ₹9 Seat
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            aria-label="Close"
            onClick={() => setDismissed(true)}
            className="shrink-0 rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 320ms ease-out both; }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px rgba(253,230,138,0.4), 0 0 16px rgba(253,230,138,0.25); }
          50% { box-shadow: 0 0 14px rgba(253,230,138,0.6), 0 0 28px rgba(253,230,138,0.35); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }

        @keyframes price-pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        .animate-price-pop { animation: price-pop 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );

  return createPortal(bar, document.body);
};
