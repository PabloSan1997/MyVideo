
const rojoVideos = {
  '50': '#fef2f2',
  '100': '#fde3e3',
  '200': '#fdcbcb',
  '300': '#faa7a7',
  '400': '#f57474',
  '500': '#eb4848',
  '600': '#d82a2a',
  '700': '#b52020',
  '800': '#961e1e',
  '900': '#7d1f1f',
  '950': '#410b0b',
};



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        rojoVideos
      },
      backgroundColor:{
        rojoVideos
      },
      borderColor:{
        rojoVideos
      }
    },
  },
  plugins: [],
}