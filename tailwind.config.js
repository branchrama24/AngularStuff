/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Procesa HTML y archivos TypeScript
  ],
  theme: {
    extend: {     
       boxShadow: {
      persona: '4px 4px 0px 0px rgba(255, 255, 255, 0.75), -4px -4px 0px 0px rgba(0, 0, 0, 0.75)',
    },},
  },
  plugins: [],
}
