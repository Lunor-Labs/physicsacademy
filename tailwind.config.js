/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
        dlSarani: ['"DL Sarani"', 'serif'],
        dsMano: ['"DS MANO"', 'serif'],
        suSathmina: ['"Su SATHMINA"', 'serif'],
        derana: ['"4u Derana"', 'serif'],
        boldidda: ['"0KDBOLIDDA"', 'serif'],
        dsAraliya: ['"DS Araliya"', 'serif']
      },
    },
  },
  plugins: [],
};
