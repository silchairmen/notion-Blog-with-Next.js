// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // `src` directory를 사용한다면
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
}