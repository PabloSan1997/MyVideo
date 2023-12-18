const rojoVideos = {
  '50': '#fcf4f4',
  '100': '#f9e7e7',
  '200': '#f4d4d4',
  '300': '#ebb6b6',
  '400': '#de8b8b',
  '500': '#d27070',
  '600': '#b94949',
  '700': '#9b3a3a',
  '800': '#813333',
  '900': '#6c3030',
  '950': '#3a1515',
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				rojoVideos,
			},
			backgroundColor: {
				rojoVideos,
			},
			borderColor: {
				rojoVideos,
			},
		},
	},
	plugins: [],
};
