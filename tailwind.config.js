/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html,js}'],
	theme: {
		extend: {
			spacing: {
				xsMax: '550px',
				xsMax1: '570px',
				xsMax2: '450px',
			},
		},
	},
	plugins: [],
};
