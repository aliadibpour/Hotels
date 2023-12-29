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
    colors: {
      silver: '#f0f3f5',
      blue: '#0d5ab9',
      blue2:'#043d89',
      white: '#fff',
      black: '#000000'
    },
    extend: {},
  },
  plugins: [],
}

