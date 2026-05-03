/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#14110D",
        "surface-1": "#1A1612",
        "surface-2": "#221C16",
        "surface-3": "#2C251D",
        hairline: "#3A3127",
        muted: "#968976",
        body: "#C9BEA6",
        head: "#F0E8D5",
        accent: "#D4A063",
        "accent-soft": "#5C4528",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "Pretendard", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Pretendard", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.025em",
      },
      backgroundImage: {
        "warm-wash": "radial-gradient(120% 80% at 50% -10%, #221C16 0%, #14110D 60%)",
      },
    },
  },
  plugins: [],
};
