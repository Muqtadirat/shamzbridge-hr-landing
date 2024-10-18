import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#0000FF",
        "gradient-mid": "#708090",
        "gradient-end": "#FFFFFF",
        "primary-blue": "#0000FF",
        "primary-slate": "#708090",
      },
    },
  },
  plugins: [],
};
export default config;
