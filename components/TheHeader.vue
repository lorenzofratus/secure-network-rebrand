<template>
	<nav class="nav">
		<div class="content">
			<nuxt-link :to="home.path" class="logo">
				{{ home.name }}
			</nuxt-link>
			<ul class="menu">
				<li
					v-for="(option, index) in menuOptions"
					:key="'menu-item-' + index"
				>
					<nuxt-link :to="option.path" class="anchor h4">
						{{ option.name }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			home: {
				name: 'Secure Network',
				path: '/',
			},
			menuOptions: [
				{
					name: 'Services',
					path: '/services',
				},
				{
					name: 'Areas',
					path: '/area',
				},
				{
					name: 'Team',
					path: '/team',
				},
				{
					name: 'Resources',
					path: '/resources',
				},
				{
					name: 'About',
					path: '/about',
				},
				{
					name: 'Contacts',
					path: '/contacts',
				},
			],
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
.nav .menu {
	display: inline-block;
}
.nav .menu > li {
	display: inline;
	list-style: none;
}
.nav .anchor {
	position: relative;
	float: left;
	cursor: pointer;
	padding: 0.5em 2px;
	margin: 0 1.5em;
	text-decoration: none;
	color: #000;
	transition: 0.35s color ease-in-out;
}
.nav .anchor:last-child {
	margin-right: 0;
}
.nav .anchor::after {
	content: '';
	position: absolute;
	width: 0;
	height: var(--line-weight);
	bottom: 0;
	left: 50%;
	border-radius: var(--line-radius);
	transform: translateX(-50%);
	background-color: var(--primary-color);
	transition: 0.35s width ease-in-out;
}
.nav .anchor.active::after {
	width: 100%;
	width: calc(100% + 4px);
}
.nav .logo:hover,
.nav .anchor:hover {
	color: var(--primary-color);
}
.nav .logo:focus,
.nav .anchor:focus {
	outline: none;
	box-shadow: 0 0 3pt 2pt var(--light-color);
}

@media screen and (max-width: 749px) {
	.nav .menu {
		display: none;
	}
}
</style>
