/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          // soft, spiritual gradient-friendly purples/pinks
          50:  "#faf7ff",
          100: "#f4ecff",
          200: "#e7d4ff",
          300: "#d3afff",
          400: "#b985ff",
          500: "#a45bff",
          600: "#8d3ef2",
          700: "#732bcc",
          800: "#5c22a3",
          900: "#4b1c82",
        },
        dusk: {
          // deep background contrast
          900: "#0d0a13",
          800: "#171228",
          700: "#20183a",
        },
        gild: {
          // gentle gold for accents (not harsh yellow)
          50:  "#fffaf0",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#facc15",
          400: "#eab308",
          500: "#d4a106",
        },
        ink: {
          700: "#2b2b33",
          600: "#3c3c47",
          500: "#4b4b59",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(164, 91, 255, 0.25)",
        gold: "0 8px 24px rgba(234, 179, 8, 0.25)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
