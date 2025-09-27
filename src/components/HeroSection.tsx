// src/components/HeroSection.tsx
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/coach.jpeg";

// === Your published CSV URL (A1 contains the full "Date • Time" line) ===
// Converted from pubhtml?... to CSV:
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4mFJJmIvI8PNLHMBVKXgZFw3QwFCeKXsAfA9znX8iUt5CrdC6sa4Gg8ALke_AzX0O5MbeR70SNESh/pub?gid=47810550&single=true&output=csv";

// === Your Razorpay Payment Button ID ===
const RZP_PAYMENT_BUTTON_ID = "pl_RMGQKIsgTiA3TO";

// Tiny CSV parser (handles quotes/commas)
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let cur = "", row: string[] = [], inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (c === '"' && inQuotes && n === '"') { cur += '"'; i++; continue; }
    if (c === '"') { inQuotes = !inQuotes; continue; }
    if (c === "," && !inQuotes) { row.push(cur); cur = ""; continue; }
    if ((c === "\n" || c === "\r") && !inQuotes) {
      if (cur.length || row.length) { row.push(cur); rows.push(row); row = []; cur = ""; }
      continue;
    }
    cur += c;
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows.filter(r => r.length && r.some(x => x.trim() !== ""));
}

/** Razorpay Payment Button as a React component */
function RazorpayPaymentButton() {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // If this form already has the script, don't add again (StrictMode safety)
    const already = formRef.current.querySelector<HTMLScriptElement>("script[data-payment_button_id]");
    if (already) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = RZP_PAYMENT_BUTTON_ID;

    formRef.current.appendChild(script);

    // cleanup (remove script to avoid duplicates on route changes)
    return () => {
      script.remove();
    };
  }, []);

  return <form ref={formRef} className="w-full" />;
}

export default function HeroSection() {
  const [dateTime, setDateTime] = useState<string>("");

  // Fetch A1 (verbatim) and show exactly as-is
  useEffect(() => {
    fetch(`${SHEET_CSV_URL}&cb=${Date.now()}`, { cache: "no-store" })
      .then(r => r.text())
      .then(txt => {
        const rows = parseCSV(txt);
        const a1 = rows?.[0]?.[0]?.trim();
        if (a1) setDateTime(a1);
      })
      .catch(() => {
        // keep empty; UI will simply hide the line if not available
      });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-aura-50 via-white to-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md rounded-3xl border border-aura-100 bg-white shadow-xl p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-center text-xl font-bold text-aura-800 sm:text-2xl">
          Manifest Your Dream Life – Scientific Masterclass with <br></br>Ankit Neerav
        </h1>

        {/* Poster */}
        <div className="mt-6 flex justify-center">
          <img
            src={heroImage}
            alt="Masterclass Poster"
            className="h-56 w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Price blurb */}
        <div className="mt-4 flex items-baseline justify-center gap-3">
          <span className="text-2xl font-extrabold text-aura-700">₹9</span>
          <span className="text-base text-ink-500 line-through">₹2999</span>
          <span className="ml-1 inline-flex items-center rounded-full bg-gild-100 px-2 py-0.5 text-xs font-medium text-ink-700">
            Limited seats
          </span>
        </div>

        {/* Date & Time (verbatim from A1). Hide if empty */}
        {dateTime && (
          <div className="mt-4 rounded-2xl bg-aura-50 p-3 text-center text-sm text-ink-700">
            <strong>Date &amp; Time:</strong> {dateTime}
          </div>
        )}

        {/* What You’ll Discover */}
        <div className="mt-6">
          <h2 className="font-semibold text-ink-700">What You’ll Learn</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li className="flex gap-2"><span className="text-aura-600">✓</span>The scientific principle behind manifestation</li>
            <li className="flex gap-2"><span className="text-aura-600">✓</span>How biology, physics & chemistry prove “You are the Universe”</li>
            <li className="flex gap-2"><span className="text-aura-600">✓</span>Real experiments showing thoughts create reality</li>
            <li className="flex gap-2"><span className="text-aura-600">✓</span>Why manifestation often fails & the #1 fix</li>
            <li className="flex gap-2"><span className="text-aura-600">✓</span>Simple steps to align science + spirituality</li>
          </ul>
        </div>
 <div className="mt-6 rounded-2xl border border-aura-100 p-4">
          <p className="mt-2 text-sm text-ink-600 font-bold">
           Perfect for working professionals struggling with unfulfillment, entrepreneurs wanting financial growth, and anyone feeling stuck despite their best efforts.
          </p>
        </div>

             
                {/* Razorpay Payment Button */}
                {/* Razorpay Payment Button */}
        <div className="mt-8 rounded-xl bg-aura-50 border border-aura-200 p-4 shadow-sm text-center">
          <h3 className="text-sm sm:text-base font-semibold text-aura-800 mb-3 flex items-center justify-center gap-1">
            <span className="text-orange-500">⚡</span> Limited seats at ₹9 only.
          </h3>

          <div className="flex justify-center">
            <div className="w-full max-w-[220px]">
              <RazorpayPaymentButton />
            </div>
          </div>

          <p className="mt-3 text-xs text-ink-600">
            Secure • Instant confirmation
          </p>
        </div>



        
        <p className="text-center text-xs text-ink-500">
          Claim your spot now and start manifesting your dream life!
        </p>
      </div>
    </section>
  );
}
