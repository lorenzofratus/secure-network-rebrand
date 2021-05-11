<template>
	<footer class="footer wave-before wave-concave-dark">
		<div class="content">
			<nuxt-link to="" class="logo arrow"
				><span class="left-bar"></span><span class="right-bar"></span
			></nuxt-link>
			<nuxt-link :to="home.path" class="logo">
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
	background-color: var(--dark-color);
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

.footer .arrow {
	margin-top: 1.5em;
	height: 1em;
	width: 4em;
	padding: 0;
	position: relative;
}
.footer .arrow .left-bar,
.footer .arrow .right-bar {
	position: absolute;
	top: 0;
	width: 1em;
	height: var(--line-weight);
	border-radius: var(--line-radius);
	transition: 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
	transition-property: transform, background-color;
	background-color: var(--light-color);
}
.footer .arrow:hover .left-bar,
.footer .arrow:focus .left-bar,
.footer .arrow:hover .right-bar,
.footer .arrow:focus .right-bar {
	background-color: var(--primary-color);
}
.footer .arrow .left-bar {
	right: 50%;
	transform-origin: top right;
	transform: rotate(-30deg);
}
.footer .arrow:hover .left-bar,
.footer .arrow:focus .left-bar {
	transform: translateY(-0.35em) rotate(-40deg);
}
.footer .arrow .right-bar {
	left: 50%;
	transform-origin: top left;
	transform: rotate(30deg);
}
.footer .arrow:hover .right-bar,
.footer .arrow:focus .right-bar {
	transform: translateY(-0.35em) rotate(40deg);
}
</style>
