<template>
	<footer class="footer wave-before wave-concave-dark">
		<div class="content">
			<nuxt-link :to="home.path" class="logo focusable">
				{{ home.name }}
			</nuxt-link>
			<app-menu :light-theme="true" />
			<social-menu />
			<p class="copy-info h4">
				Secure Network S.r.l. - Via Valtorta, 48 - 20127, Milano MI,
				Italy - C.F./P.IVA 04205230966
			</p>
		</div>
	</footer>
</template>

<script>
import AppMenu from './menus/AppMenu'
import SocialMenu from './menus/SocialMenu.vue'

export default {
	components: {
		AppMenu,
		SocialMenu,
	},
	data() {
		return {
			home: {
				name: 'Secure Network',
				path: '/',
			},
		}
	},
}
</script>

<style scoped>
.footer {
	width: 100vw;
	background-color: var(--dark-color);

	/* Temporary Style */
	position: absolute;
	bottom: 0;
}
.footer .content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: var(--app);
	margin: 0 auto;
	padding: 0 2em;
	box-sizing: border-box;
}
.footer .logo {
	font-size: var(--logo-font-size);
	font-weight: var(--logo-font-weight);
	color: var(--light-color);
	padding: 0.25em 0.5em;
	margin: 1em 0 0;
	cursor: pointer;
	text-decoration: none;
	transition: 0.35s color ease-in-out;
}
.footer .logo:hover {
	color: var(--primary-color);
}
.footer .copy-info {
	color: var(--light-color);
	text-align: center;
}
</style>
