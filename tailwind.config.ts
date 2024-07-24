import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F9F9",
        tonprimary: "#1E2337",
        secondary: "#F7F9FB",
        textColor: "#0098EA",
      },
    },
  },
  plugins: [],
};
export default config;
