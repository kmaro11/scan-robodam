/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0057FF',
        'primary': '#000000',
        gray: {
          DEFAULT: '#F5F5F5',
          100: '#D9D9D9',
          200: "#8A8A8A"
        }
      }
    },
  },
  plugins: [],
}