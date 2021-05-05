<template>
	<nav class="nav" :class="{ opened: isOpened }">
		<div class="content">
			<nuxt-link :to="home.path" class="logo">
				{{ home.name }}
			</nuxt-link>
			<app-menu :align-right="true" :show-on-mobile="true" />
			<div class="nav-btn" @click="toggleOpened">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
		</div>
	</nav>
</template>

<script>
import AppMenu from './menus/AppMenu'

export default {
	components: {
		AppMenu,
	},
	data() {
		return {
			home: {
				name: 'Secure Network',
				path: '/',
			},
			isOpened: false,
		}
	},
	methods: {
		toggleOpened() {
			this.isOpened = !this.isOpened
		},
	},
}
</script>

<style scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
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
.nav::after {
	position: fixed;
	content: '';
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #121212;
	opacity: 0;
	transition: 0.35s opacity ease-in-out;
	transform: translateZ(-1px);
	pointer-events: none;
}
.nav.opened::after {
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
