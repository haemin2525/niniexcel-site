/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        "hover-gray": "#E2E2E2",
        "hover-light": "#F3F3F3",
        "chip-gray": "#EFEFEF",
        "body-gray": "#4B4B4B",
        "muted-gray": "#AFAFAF",
      },
      fontFamily: {
        sans: ['"Inter"', "Pretendard", "system-ui", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        display: ['"Inter"', "Pretendard", "system-ui", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.025em",
      },
      borderRadius: {
        "pill-full": "999px",
      },
      boxShadow: {
        "card-light": "0px 4px 16px rgba(0, 0, 0, 0.12)",
        "card-medium": "0px 4px 16px rgba(0, 0, 0, 0.16)",
        "press": "inset 0px 0px 0px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
