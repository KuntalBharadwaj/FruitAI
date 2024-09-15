/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto Mono", "monospace"],
      Montserrat: ["Montserrat", "sans-serif"],
      Protest: ["Protest Guerrilla", "sans-serif"],
      Tajawal: ["Tajawal", "sans-serif"],
      Dosis: ['Dosis',"sans-serif"]
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)',
    },
  },
  plugins: [],
}