/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#4F46E5", 50: "#EEF2FF" },
        accent: { DEFAULT: "#F59E0B", 50: "#FEF3C7" },
        ink: {
          50: "#F7F8FA",
          100: "#EEF0F3",
          200: "#DCDFE4",
          300: "#B9BFC9",
          400: "#8B93A1",
          500: "#5A6373",
          600: "#3F4757",
          700: "#2C3340",
          800: "#1F2531",
          900: "#141926",
          950: "#0B0F1A",
        },
        paper: "#FAFAFB",
      },
      fontFamily: {
        sans: ["Manrope", "Pretendard", "system-ui", "sans-serif"],
        display: ["Manrope", "Pretendard", "system-ui", "sans-serif"],
        editorial: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle at 1px 1px, rgba(20,25,38,0.06) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-grid": "20px 20px",
      },
    },
  },
  plugins: [],
};
