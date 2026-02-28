import { useMemo, useState } from "react";

// 🔗 Your live n8n webhook
const N8N_WEBHOOK = "https://offbeatn8n.coachswastik.com/webhook/smm-fb12";

type Status = "idle" | "submitting" | "success" | "error";
type CurrentStatus =
  | "Business Owner / Entrepreneur"
  | "Working Professional"
  | "Freelancer / Self-Employed"
  | "Student / Recent Graduate"
  | "Other";

export default function LeadCapture() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    currentStatus: "" as CurrentStatus | "",
    company: "", // honeypot
  });

  // ✅ UTM capture (safe for client-side; this component should be client-rendered)
  const utms = useMemo(() => {
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_content: p.get("utm_content") || "",
      utm_term: p.get("utm_term") || "",
    };
  }, []);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const isPhone = (v: string) =>
    /^\+?\d[\d\s-]{8,14}\d$/.test(v.replace(/\s+/g, ""));

  const handleChange =
    (field: keyof typeof values) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setValues((s) => ({ ...s, [field]: e.target.value }));

  const handleStatusChange = (v: CurrentStatus) => {
    setValues((s) => ({ ...s, currentStatus: v }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    if (values.company.trim() !== "") return;

    if (
      !values.name.trim() ||
      !isEmail(values.email) ||
      !isPhone(values.phone) ||
      !values.reason.trim() ||
      !values.currentStatus
    ) {
      setStatus("error");
      setMsg("Please fill in all fields correctly.");
      return;
    }

    setStatus("submitting");
    setMsg("");

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.replace(/\s+/g, ""),
        reason: values.reason.trim(),
        current_status: values.currentStatus,
        page: window.location.href,
        timestamp: new Date().toISOString(),
        ...utms,
      };

      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      });

      if (!(res.status >= 200 && res.status < 300)) {
        throw new Error(`Webhook ${res.status}`);
      }

      setStatus("success");
      setMsg("🎉 Registration successful! Redirecting...");

      // optional: clear fields before redirect
      setValues({
        name: "",
        email: "",
        phone: "",
        reason: "",
        currentStatus: "" as any,
        company: "",
      });

      // ✅ Redirect after success
      window.location.assign("/ty-smm-fb12");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMsg("Something went wrong. Please try again later.");
    }
  };

  const statusOptions: CurrentStatus[] = [
    "Business Owner / Entrepreneur",
    "Working Professional",
    "Freelancer / Self-Employed",
    "Student / Recent Graduate",
    "Other",
  ];

  return (
    <section id="register" className="py-12 px-4 flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-black text-center mb-6">
        Register Now
      </h2>

      {/* Form Card */}
      <div className="w-full max-w-md rounded-2xl border border-aura-100 bg-white shadow-sm p-6">
        <p className="text-sm text-ink-600 text-center mb-5">
          Enter your details to receive the <strong>masterclass link</strong> &{" "}
          <strong>bonuses</strong>.
        </p>

        <form onSubmit={onSubmit} className="grid gap-4">
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange("company")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Full Name"
            className="w-full rounded-xl border border-aura-200 bg-white px-4 py-2.5 text-ink-700 outline-none focus:ring-2 focus:ring-aura-300"
            required
          />

          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="Email"
            className="w-full rounded-xl border border-aura-200 bg-white px-4 py-2.5 text-ink-700 outline-none focus:ring-2 focus:ring-aura-300"
            required
          />

          <input
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="Phone (WhatsApp preferred)"
            className="w-full rounded-xl border border-aura-200 bg-white px-4 py-2.5 text-ink-700 outline-none focus:ring-2 focus:ring-aura-300"
            required
          />

          {/* ✅ NEW: Reason for joining (Textarea) */}
          <textarea
            value={values.reason}
            onChange={handleChange("reason")}
            placeholder="Reason For Joining"
            rows={3}
            className="w-full resize-none rounded-xl border border-aura-200 bg-white px-4 py-2.5 text-ink-700 outline-none focus:ring-2 focus:ring-aura-300"
            required
          />

          {/* ✅ NEW: Current Status (Radio group) */}
          <div className="pt-1">
            <p className="text-sm font-semibold text-ink-700 mb-2">
              Select your current status
            </p>

            <div className="grid gap-2">
              {statusOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 text-sm text-ink-700"
                >
                  <input
                    type="radio"
                    name="currentStatus"
                    value={opt}
                    checked={values.currentStatus === opt}
                    onChange={() => handleStatusChange(opt)}
                    className="h-4 w-4 accent-aura-700"
                    required
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 rounded-xl bg-aura-700 py-2.5 font-semibold text-white shadow hover:bg-aura-800 focus:outline-none focus:ring-4 focus:ring-aura-200 disabled:opacity-60 transition"
          >
            {status === "submitting" ? "Registering..." : "Register Now"}
          </button>

          {msg && (
            <div
              className={`rounded-lg px-3 py-2 text-sm text-center ${
                status === "error"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              }`}
            >
              {msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}