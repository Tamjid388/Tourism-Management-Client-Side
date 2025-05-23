/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mansalva: ['Mansalva', 'serif'],
        lato:["Lato", "sans-serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
  daisyui: {
    themes: ["light", "dark"], // Define the themes
  },
}

