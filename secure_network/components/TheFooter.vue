<!--
 * Copyright (c) 2021
 *
 * TheFooter is the footer of the website. It is implemented in the default layout.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<footer class="footer wave-before wave-concave-dark">
		<div class="content">
			<!-- Arrow link that scrolls to the top of the page -->
			<nuxt-link to="#__layout" class="logo arrow">
				<span class="left-bar"></span><span class="right-bar"></span>
				<p class="hidden">Scroll To Top</p>
			</nuxt-link>
			<nuxt-link to="/" class="logo"> Secure Network </nuxt-link>
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
import AppMenu from '~/components/menus/AppMenu.vue'
import SocialMenu from '~/components/menus/SocialMenu.vue'

export default {
	components: {
		AppMenu,
		SocialMenu,
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
	color: var(--accent-color);
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
.footer .arrow:focus {
	outline: none;
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
.footer .arrow:focus .left-bar,
.footer .arrow:focus .right-bar {
	outline: auto;
	outline-color: -webkit-focus-ring-color;
}
.footer .arrow:hover .left-bar,
.footer .arrow:focus .left-bar,
.footer .arrow:hover .right-bar,
.footer .arrow:focus .right-bar {
	background-color: var(--accent-color);
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

.footer .hidden {
	height: 0;
	overflow: hidden;
}
</style>
