/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'color-secondary': {
					900: 'rgb(17, 24, 39)',
					800: 'rgb(31, 41, 55)',
					700: 'rgb(55, 65, 81)',
					600: 'rgb(75, 85, 99)',
					500: 'rgb(107, 114, 128)',
					400: 'rgb(156, 163, 175)',
					300: 'rgb(209, 213, 219)',
					200: 'rgb(229, 231, 235)',
					100: 'rgb(243, 244, 246)',
					50: 'rgb(249, 250, 251)',
					0: 'rgb(255, 255, 255)',
				},
				'color-primary': {
					900: 'rgb(77, 112, 255)',
					800: 'rgb(92, 124, 255)',
					700: 'rgb(92, 124, 255)',
					600: 'rgb(128, 153, 255)',
					500: 'rgb(146, 167, 255)',
					400: 'rgb(164, 182, 255)',
					300: 'rgb(183, 197, 255)',
					200: 'rgb(201, 211, 255)',
					100: 'rgb(219, 226, 255)',
					50: 'rgb(228, 233, 255)',
				},

				'border-radius-tiny': '3px',
				'border-radius-sm': '5px',
				'border-radius-md': '7px',
				'border-radius-lg': '9px',

				'color-success': 'rgb(0, 192, 115)',
				'color-warning': 'rgb(255, 153, 0)',
				'color-error': 'rgb(255, 71, 87)',
				'color-red-700': 'rgb(185, 28, 28)',
				'color-red-800': 'rgb(153, 27, 27)',
				'color-red-500': 'rgb(239, 68, 68)',
				'color-red-300': 'rgb(252, 165, 165)',
				'color-red-100': 'rgb(254, 226, 226)',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
};
