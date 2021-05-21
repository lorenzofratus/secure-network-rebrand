/* eslint-disable prettier/prettier */
// Redirect of ssl requests only on production mode
const servMid = [
	{
		path: '/api',
		handler: '~/server/rest/api.js',
	},
]
if (process.env.NODE_ENV === 'production') {
	servMid.push('redirect-ssl')
}

export default {
	ssr: true,
	target: 'server',
	env: {
		// BASE_URL: 'https://securenetwork.herokuapp.com', // Production URL
		// BASE_URL: '', // Development URL,
		BASE_URL:
			process.env.NODE_ENV === 'dev'
				? 'http://localhost:3000'
				: 'https://securenetwork.herokuapp.com',
		configurationId: '5bbb2329-982d-4bb0-824e-1a52912f9962',
	},
	serverMiddleware: servMid,
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Secure Network',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Secure Network performs comprehensive security assessments, securing your applications and infrastructures thoroughly and extensively.',
			},
			{ name: 'msapplication-TileColor', content: '#003554' },
			{ name: 'theme-color', content: '#003554' },
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#00a6fb',
			},
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;400;700;800&display=swap',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/normalize', '~/assets/css/style'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~/plugins/mmcc.js', '~/plugins/scroll-to.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
