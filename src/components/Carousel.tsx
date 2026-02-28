import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/coach3.jpeg";

/* Google Sheet (Published as CSV): Column A = Date, Column B = Time */
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwPzzgnuxnM99svb-wpxDwzfPA-3lZP9cVqLv4hMH0GtKLollq3-tOFZ0jgzug_-vl3zXvo_HBYNs/pub?gid=43987342&single=true&output=csv";

/* Tiny CSV parser (handles quotes + CRLF safely) */
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let cur = "";
  let row: string[] = [];
  let inQuotes = false;

  const s = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const n = s[i + 1];

    // escaped quote inside quotes ("")
    if (c === '"' && inQuotes && n === '"') {
      cur += '"';
      i++;
      continue;
    }

    // toggle quotes
    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    // comma separator
    if (c === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    // newline separator
    if (c === "\n" && !inQuotes) {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
      continue;
    }

    cur += c;
  }

  // push final cell/row
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }

  // trim + remove empty rows
  return rows
    .map((r) => r.map((x) => (x ?? "").trim()))
    .filter((r) => r.some((x) => x !== ""));
}

export const Carousel = () => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    fetch(`${SHEET_CSV_URL}&cb=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.text())
      .then((txt) => {
        const rows = parseCSV(txt);

        // Find first non-header row (skip "Date,Time")
        const dataRow =
          rows.find((r) => (r[0] || "").toLowerCase() !== "date" && r[0]) ??
          rows[1] ??
          rows[0];

        const date = (dataRow?.[0] || "").trim(); // Column A
        const time = (dataRow?.[1] || "").trim(); // Column B

        if (date && time) setDateTime(`LIVE: ${date} • ${time}`);
        else if (date) setDateTime(`LIVE: ${date}`);
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
              Over <span className="font-semibold">2,847</span> people registered
              in last 48 hours
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
              <span className="font-semibold">Today Only Free</span> • 90-Minute
              LIVE with <span className="font-semibold">Ankit Neerav</span>
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
     
      </div>
    </section>
  );
};