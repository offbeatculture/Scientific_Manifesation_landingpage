// src/pages/ThankYou.tsx
import { useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const WA_GROUP_LINK = "https://join.ankitneerav.com/wap-fb";

const PIXEL_MAIN = "586972862820606";
const PIXEL_LEADS = "1235272225360337";

export default function ThankYouFb() {
  // Loads script + init both pixels + PageView
  useFacebookPixel();

 useEffect(() => {
  if (!window.fbq) return;

  // ✅ Fire PageView ONLY for pixel 586...
  window.fbq("trackSingle", "586972862820606", "PageView");

  // ✅ Fire Lead events ONLY for pixel 123...
  window.fbq("trackSingle", "1235272225360337", "Lead",);
  window.fbq("trackSingleCustom", "1235272225360337", "Lead-Website");
}, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-aura-50 via-white to-white flex items-center justify-center px-4 py-10">
      {/* Optional noscript fallback (usually not needed for SPA) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_MAIN}&ev=PageView&noscript=1`}
          alt=""
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_LEADS}&ev=Lead&noscript=1`}
          alt=""
        />
      </noscript>

      <div className="w-full max-w-md rounded-3xl border border-aura-100 bg-white shadow-xl p-6 sm:p-8 text-center">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-md">
          <iframe
            src="https://www.youtube.com/embed/FqA9KP050eg"
            title="Thank You Video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-aura-800">
          🎉 Thank You for Registering!
        </h1>

        <p className="mt-3 text-sm text-ink-600">
          You’ve successfully booked your seat for the <br />
          <strong>Manifest Your Dream Life – Masterclass</strong>.
        </p>

        <div className="mt-6">
          <a
            href={WA_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-2xl bg-green-600 px-6 py-3 font-medium text-white shadow transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
}