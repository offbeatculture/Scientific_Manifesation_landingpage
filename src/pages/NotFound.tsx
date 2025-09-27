import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import heroImage from "@/assets/coach.jpeg";

// === Published Sheet: A1 contains the "Date • Time" line ===
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4mFJJmIvI8PNLHMBVKXgZFw3QwFCeKXsAfA9znX8iUt5CrdC6sa4Gg8ALke_AzX0O5MbeR70SNESh/pub?gid=47810550&single=true&output=csv";

// === Razorpay Payment Button ID ===
const RZP_PAYMENT_BUTTON_ID = "pl_RMGQKIsgTiA3TO";

// Minimal CSV parser
function parseCSV(text: string): string[][] {
  return text
    .trim()
    .split("\n")
    .map((row) => row.split(",").map((cell) => cell.replace(/^"|"$/g, "")));
}

function RazorpayPaymentButton() {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Avoid duplicate script in React StrictMode
    const already = formRef.current.querySelector("script[data-payment_button_id]");
    if (already) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = RZP_PAYMENT_BUTTON_ID;

    formRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <form ref={formRef} className="w-full" />;
}

const NotFound = () => {
  const location = useLocation();
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Fetch A1 value
  useEffect(() => {
    fetch(`${SHEET_CSV_URL}&cb=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.text())
      .then((txt) => {
        const rows = parseCSV(txt);
        const a1 = rows?.[0]?.[0]?.trim();
        if (a1) setDateTime(a1);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-aura-50 via-white to-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md rounded-3xl border border-aura-100 bg-white shadow-xl p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-center text-xl font-bold text-aura-800 sm:text-2xl">
          Manifest Your Dream Life – Masterclass by Ankit Neerav
        </h1>

        {/* Poster */}
        <div className="mt-6 flex justify-center">
          <img
            src={heroImage}
            alt="Masterclass Poster"
            className="h-56 w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-baseline justify-center gap-3">
          <span className="text-2xl font-extrabold text-aura-700">₹9</span>
          <span className="text-base text-ink-500 line-through">₹2999</span>
          <span className="ml-1 inline-flex items-center rounded-full bg-gild-100 px-2 py-0.5 text-xs font-medium text-ink-700">
            Limited seats
          </span>
        </div>

        {/* Date & Time */}
        {dateTime && (
          <div className="mt-4 rounded-2xl bg-aura-50 p-3 text-center text-sm text-ink-700">
            <strong>Date &amp; Time:</strong> {dateTime}
          </div>
        )}

        {/* What You’ll Discover */}
        <div className="mt-6">
          <h2 className="font-semibold text-ink-700">What You’ll Discover</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li>• How the Law of Attraction really works in daily life</li>
            <li>• 3 scientific experiments proving the power of the universe</li>
            <li>• How your mind influences reality</li>
            <li>• The secret to communicating with the universe</li>
            <li>• Why manifestation fails for most people &amp; how to fix it</li>
          </ul>
        </div>

        {/* Who Is This For */}
        <div className="mt-6">
          <h2 className="font-semibold text-ink-700">Who Is This For?</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li>• Tried manifestation but saw no results</li>
            <li>• Want to improve health, wealth, romance, and balance</li>
            <li>• Curious about science + spirituality</li>
            <li>• Skeptical about manifestation but open to learning</li>
          </ul>
        </div>

        {/* Coach */}
        <div className="mt-6 rounded-2xl border border-aura-100 p-4">
          <h3 className="font-semibold text-ink-700">Your Coach – Ankit Neerav</h3>
          <p className="mt-2 text-sm text-ink-600">
            Engineer-turned-Life Coach who blends science &amp; spirituality to make manifestation
            practical, fun, and transformational.
          </p>
        </div>

        {/* Razorpay Button */}
        <div className="mt-6">
          <RazorpayPaymentButton />
        </div>

        <p className="mt-3 text-center text-sm text-aura-800">⚡ Limited seats at ₹9 only.</p>
        <p className="text-center text-xs text-ink-500">
          Claim your spot now and start manifesting your dream life!
        </p>
      </div>
    </section>
  );
};

export default NotFound;
