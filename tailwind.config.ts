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
        solace: {
          primary: "rgb(40, 94, 80)",
          "primary-dark": "rgb(32, 75, 64)",
          "primary-light": "rgb(48, 113, 96)",
          "primary-50": "rgb(240, 245, 243)",
          "primary-100": "rgb(220, 235, 230)",
          "primary-200": "rgb(180, 215, 205)",
          "primary-300": "rgb(140, 195, 180)",
          "primary-400": "rgb(100, 175, 155)",
          "primary-500": "rgb(40, 94, 80)",
          "primary-600": "rgb(32, 75, 64)",
          "primary-700": "rgb(24, 56, 48)",
          "primary-800": "rgb(16, 37, 32)",
          "primary-900": "rgb(8, 19, 16)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
