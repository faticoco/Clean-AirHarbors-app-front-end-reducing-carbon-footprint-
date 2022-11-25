const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fdf0e8',
					100: '#f9d2b9',
					200: '#f4b58a',
					300: '#f0975b',
					400: '#ec792d',
					500: '#d26013',
					600: '#a44a0f',
					700: '#75350b',
					800: '#462006',
					900: '#170b02'
				}
			}
		},
		 daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
		fontFamily: {
			body: [
				'Montserrat',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			sans: [
				'Montserrat',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]

		}
	},

	plugins: [require('flowbite/plugin')],
	plugins: [require("daisyui")],
	darkMode: 'class'

};


module.exports = config;
