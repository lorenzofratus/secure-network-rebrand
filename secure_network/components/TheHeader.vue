<!--
 * Copyright (c) 2021
 *
 * TheHeader is the header of the website. It is implemented in the default layout.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<header>
		<nav class="nav" :class="{ opened: isOpened }">
			<div class="content">
				<!-- Closes the mobile menu when the link is clicked -->
				<nuxt-link to="/" class="logo" @click.native="closeOpened">
					Secure Network
				</nuxt-link>
				<!-- Closes the mobile menu when a link is clicked -->
				<app-menu
					:align-right="true"
					:show-on-mobile="true"
					@navigation="closeOpened"
				/>
				<!-- Toggles the mobile menu when the button is clicked -->
				<div class="nav-btn" @click="toggleOpened">
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
				</div>
			</div>
		</nav>

		<div class="shadow"></div>
	</header>
</template>

<script>
import AppMenu from '~/components/menus/AppMenu'

export default {
	components: {
		AppMenu,
	},
	data() {
		return {
			// Controls the css that opens and closes the mobile menu
			isOpened: false,
		}
	},
	methods: {
		toggleOpened() {
			this.isOpened = !this.isOpened
		},
		closeOpened() {
			this.isOpened = false
		},
	},
}
</script>

<style scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 2;
	background-color: var(--background);
	transform-style: preserve-3d;
}
.nav .content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: var(--app);
	height: var(--nav-height);
	margin: 0 auto;
	padding: 0 2em;
	box-sizing: border-box;
}
.nav .logo {
	font-size: var(--logo-font-size);
	font-weight: var(--logo-font-weight);
	color: var(--dark-color);
	padding: 0.25em 0.5em;
	cursor: pointer;
	text-decoration: none;
	transition: 0.35s color ease-in-out;
}
.nav .logo:hover {
	color: var(--primary-color);
}
.nav ~ .shadow {
	position: fixed;
	content: '';
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #121212;
	opacity: 0;
	transition: 0.35s opacity ease-in-out;
	/* transform: translateZ(-1px); */
	z-index: 1;
	pointer-events: none;
}
.nav.opened ~ .shadow {
	opacity: 0.35;
	pointer-events: all;
}

.nav-btn .bar1,
.nav-btn .bar2,
.nav-btn .bar3 {
	width: 20px;
	height: var(--line-weight);
	background-color: var(--dark-color);
	margin: 4px 0;
	cursor: pointer;
	text-decoration: none;
	transition: 0.35s ease-in-out;
	transition-property: color, transform, opacity;
	border-radius: var(--line-radius);
	opacity: 1;
}
.nav-btn .bar1 {
	margin-top: 0;
	transform-origin: 50% 50%;
}
.nav-btn .bar3 {
	margin-bottom: 0;
	transform-origin: 50% 50%;
}

.opened .nav-btn {
	position: relative;
}
.opened .nav-btn .bar1 {
	transform: translateY(7px) rotate(-45deg);
}
.opened .nav-btn .bar2 {
	opacity: 0;
}
.opened .nav-btn .bar3 {
	transform: translateY(-7px) rotate(45deg);
}

@media screen and (min-width: 786px) {
	.nav-btn {
		display: none;
	}
}
</style>
