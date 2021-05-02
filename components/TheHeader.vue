<template>
	<nav class="nav">
		<div class="content">
			<nuxt-link :to="home.path" class="logo">
				{{ home.name }}
			</nuxt-link>
			<app-menu :align-right="true" />
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
		}
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
</style>
