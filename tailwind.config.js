/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontSize: {
      'as': '11px',
      'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
       '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
    },
    colors: {
      silver: '#f0f3f5',
      blue: '#0d5ab9',
      blue2:'#043d89',
      white: '#fff',
      black: '#000000',
      gray: '#d9d9d9',
      green : '#1f7d57'
    },
    extend: {
      spacing: {
        '0':'1px',
        '13': '3.25rem',
        '15': '2px',
        '38': '11rem',
        '95': '24rem',
        '100':'28rem',
        '128': '32rem',
        '144': '36rem',
        '150': '43rem'
      },
    },
  },
  plugins: [],
}