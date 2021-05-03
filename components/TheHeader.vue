<template>
	<nav class="nav">
		<div class="content">
			<nuxt-link :to="home.path" class="logo">
				{{ home.name }}
			</nuxt-link>
			<app-menu :align-right="true" />
			<div class="anchor h4 hidden">
				<div
					class="logo"
					:class="{ opened: isOpened }"
					@click="toggleOpened"
				>
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
				</div>
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

.hidden {
	display: none;
}

@media screen and (max-width: 785px) {
	.hidden {
		display: block;
	}
}

.bar1,
.bar2,
.bar3 {
	width: 20px;
	height: var(--line-weight);
	background-color: var(--dark-color);
	margin: 3px 0;
	cursor: pointer;
	text-decoration: none;
	transition: 0.35s ease-in-out;
	transition-property: color, transform, opacity;
	border-radius: var(--line-radius);
	opacity: 1;
}

.opened {
	position: relative;
}

.opened .bar1 {
	transform: rotate(-45deg) translate(-4px, 4px);
}

.opened .bar2 {
	opacity: 0;
}

.opened .bar3 {
	transform: rotate(45deg) translate(-4px, -4px);
}
</style>
