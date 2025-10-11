import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/coach2.jpeg";

/* Sheets: A1 contains the full "Date • Time" line */
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4mFJJmIvI8PNLHMBVKXgZFw3QwFCeKXsAfA9znX8iUt5CrdC6sa4Gg8ALke_AzX0O5MbeR70SNESh/pub?gid=47810550&single=true&output=csv";

/* Tiny CSV parser */
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

export const Carousel = () => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    fetch(`${SHEET_CSV_URL}&cb=${Date.now()}`, { cache: "no-store" })
      .then(r => r.text())
      .then(txt => {
        const rows = parseCSV(txt);
        const a1 = rows?.[0]?.[0]?.trim();
        if (a1) setDateTime(a1);
      })
      .catch(() => {});
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-[#F8F6E8] px-4 py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* === MOBILE (stacked) === */}
          <div className="order-1 lg:hidden fade-in text-center space-y-4">
            {/* Badges */}
            <div className="flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FDE68A] text-[#7A4E00]">
                LAST 50 SEATS
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E5F8F1] text-[#0B5B4F]">
                Today Only Free
              </span>
            </div>

            <h1 className="font-lora text-[#312B24] text-[24px] leading-snug font-medium">
              From <span className="italic">Frustrated Dreamer</span> →{" "}
              <span className="italic">Manifestation Master</span>
            </h1>

            <p className="text-[12.5px] font-semibold tracking-tight">
              <span className="text-[#B91C1C]">End the struggle</span> •{" "}
              <span className="text-[#1E3A8A]">Discover the science</span> •{" "}
              <span className="text-[#14532D]">Start attracting immediately</span>
            </p>

            {/* Poster */}
            <div className="mx-auto w-full max-w-[360px] aspect-[4/5] max-h-[260px] rounded-2xl overflow-hidden shadow-wellness">
              <img
                src={heroImage}
                alt="Ankit Neerav — Scientific Manifestation Breakthrough"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Session + Price strip */}
            <div className="mx-auto w-full max-w-[420px] bg-white/70 border border-[#E0DED2] rounded-xl px-4 py-3 space-y-1">
              <div className="flex items-center justify-center gap-2 text-[12.5px] font-bold text-[#2B2620]">
                <Calendar className="w-4 h-4 text-[#175B53]" />
                <span>{dateTime || "LIVE: Next Monday • 7:30 PM"}</span>
              </div>
              <p className="text-[12.5px] text-[#2B2620]/80">
                Worth <span className="line-through">₹2,499</span> →{" "}
                <span className="font-bold">Today Only Free</span>
              </p>
            </div>

            {/* CTA → scroll to register */}
            <div className="mx-auto w-full max-w-[240px]">
              <button
                onClick={scrollToRegister}
                className="w-full rounded-xl bg-aura-700 py-2.5 text-white font-semibold shadow hover:bg-aura-800 focus:outline-none focus:ring-4 focus:ring-aura-200"
              >
                Register Now
              </button>
            </div>

            <div className="text-[12px] text-[#2B2620]/70">
              Over <span className="font-semibold">2,847</span> people registered in last 48 hours
            </div>
          </div>

          {/* Image (desktop only) */}
          <div className="hidden lg:block order-2 fade-in">
            <div className="mx-auto w-full max-w-[460px] sm:max-w-none aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-wellness">
              <img
                src={heroImage}
                alt="Ankit Neerav — Scientific Manifestation Breakthrough"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* === DESKTOP TEXT COLUMN === */}
          <div className="hidden lg:block order-1 space-y-6 fade-in">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-[#FDE68A] text-[#7A4E00]">
                LAST 50 SEATS
              </span>
              <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-[#E5F8F1] text-[#0B5B4F]">
                Today Only Free
              </span>
            </div>

            <h1 className="font-lora text-5xl lg:text-6xl leading-tight text-[#312B24]">
              From <span className="italic">Frustrated Dreamer</span> →{" "}
              <span className="italic">Manifestation Master</span>
            </h1>

            <h2 className="text-lg lg:text-xl font-bold tracking-tight">
              <span className="text-[#B91C1C]">End the struggle</span> •{" "}
              <span className="text-[#1E3A8A]">Discover the science</span> •{" "}
              <span className="text-[#14532D]">Start attracting immediately</span>
            </h2>

            <div className="flex items-center gap-3 text-base text-[#2B2620] font-bold">
              <Calendar className="w-5 h-5 text-[#175B53]" />
              <span>{dateTime || "LIVE: Next Monday • 7:30 PM"}</span>
            </div>

            <p className="text-[15px] text-[#2B2620]/80">
              Worth <span className="line-through">₹2,499</span> →{" "}
              <span className="font-semibold">Today Only Free</span> • 90-Minute LIVE with{" "}
              <span className="font-semibold">Ankit Neerav</span>
            </p>

            {/* CTA → scroll to register */}
            <div className="w-full max-w-[260px]">
              <button
                onClick={scrollToRegister}
                className="w-full rounded-xl bg-aura-700 py-2.5 text-white font-semibold shadow hover:bg-aura-800 focus:outline-none focus:ring-4 focus:ring-aura-200"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-8 md:mt-12 h-px w-full bg-[#E9E4D6]" />

        {/* Guarantee */}
        <div className="mt-6 text-center text-[12px] text-[#2B2620]/70">
          <span className="font-semibold">IRON-CLAD GUARANTEE:</span> If the first 30 minutes
          don’t give you chills from the scientific evidence .
        </div>
      </div>
    </section>
  );
};
