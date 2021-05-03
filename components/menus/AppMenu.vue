<template>
	<ul
		class="app-menu"
		:class="{ light: lightTheme, 'align-right': alignRight }"
	>
		<li v-for="(option, index) in menuOptions" :key="'app-item-' + index">
			<nuxt-link :to="option.path" class="anchor h4">
				{{ option.name }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		lightTheme: {
			type: Boolean,
			default: false,
		},
		alignRight: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			menuOptions: [
				{
					name: 'Services',
					path: '/services',
				},
				{
					name: 'Areas',
					path: '/areas',
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
.app-menu {
	display: inline-block;
	padding: 0;
}
.app-menu > li {
	display: inline;
	list-style: none;
}
.app-menu .anchor {
	position: relative;
	float: left;
	cursor: pointer;
	padding: 0.5em;
	margin: 0 1.5em;
	text-decoration: none;
	color: #000;
	transition: 0.35s color ease-in-out;
}
.app-menu.light .anchor {
	color: var(--light-color);
}
.app-menu.align-right .anchor:last-child {
	margin-right: 0;
}
.app-menu .anchor::after {
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
.app-menu .anchor.active::after {
	width: 100%;
}
.app-menu .anchor:hover {
	color: var(--primary-color);
}

@media screen and (max-width: 785px) {
	.app-menu {
		display: none;
	}
}

.hidden {
	display: none;
}

.bar1,
.bar2,
.bar3 {
	width: 20px;
	height: 5px;
	background-color: var(--dark-color);
	margin: 2px 0;
	transition: 0.4s;
	cursor: pointer;
	text-decoration: none;
	transition: 0.35s color ease-in-out;
}
</style>
