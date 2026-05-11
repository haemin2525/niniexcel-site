/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Apple text & surface
        ink: "#1d1d1f",
        "ink-muted-80": "#333333",
        "ink-muted-48": "#7a7a7a",
        paper: "#ffffff",
        parchment: "#f5f5f7",
        "tile-1": "#272729",
        "tile-2": "#2a2a2c",
        "tile-3": "#252527",
        // Apple Action Blue
        primary: "#0066cc",
        "primary-focus": "#0071e3",
        "primary-on-dark": "#2997ff",
        // Body / utility grays
        "body-gray": "#4b4b4b",
        "body-muted": "#cccccc", // body on dark surface
        "muted-gray": "#afafaf",
        "chip-gray": "#efefef",
        "chip-translucent": "rgba(210, 210, 215, 0.64)",
        "hover-gray": "#e2e2e2",
        "hover-light": "#f3f3f3",
        hairline: "#e0e0e0",
        "divider-soft": "#f0f0f0",
      },
      fontFamily: {
        // SF Pro on Apple devices; Inter as cross-platform sub; Pretendard for KR
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Inter"',
          "Pretendard",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Inter"',
          "Pretendard",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.025em",
        "apple-tight": "-0.022em", // ~ -0.374px at 17px
      },
      borderRadius: {
        none: "0",
        xs: "5px",
        sm: "8px",
        md: "11px",
        lg: "18px",
        "pill-full": "9999px",
      },
      boxShadow: {
        // Apple's one-and-only product photo shadow
        product: "0 3px 30px rgba(0, 0, 0, 0.22)",
        // Soft hairline for store utility cards (functions like a ring)
        hairline: "0 0 0 1px rgba(0, 0, 0, 0.08)",
        // Legacy retained for transition
        "card-light": "0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-medium": "0 2px 8px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
