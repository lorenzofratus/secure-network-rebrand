<template>
	<ul
		class="app-menu"
		:class="{
			light: lightTheme,
			'align-right': alignRight,
			mobile: showOnMobile,
		}"
	>
		<li
			v-for="(option, index) in menuOptions"
			:key="'app-item-' + index"
			:style="'--delay: ' + index * 0.1 + 's'"
		>
			<nuxt-link
				:to="option.path"
				class="anchor h4"
				:class="{ active: option.path == $nuxt.$route.path }"
				@click.native="closeMenu"
			>
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
		showOnMobile: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			menuOptions: this.$store.state.menu.navigation,
		}
	},
	methods: {
		// Emits a navigation event that is used to close the mobile menu
		closeMenu() {
			this.$emit('navigation')
		},
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
	.app-menu:not(.mobile) {
		display: none;
	}
	.app-menu.mobile {
		display: block;
		position: fixed;
		margin: 0;
		top: var(--nav-height);
		right: 0;
		width: 100%;
		opacity: 0;
		background-color: var(--alt-background);
		visibility: hidden;
		transition: 0.35s opacity ease-in-out, visibility 0.35s;
	}
	.opened .app-menu.mobile {
		visibility: visible;
		opacity: 1;
	}
	.app-menu.mobile > li {
		display: block;
		text-align: center;
		margin: 2em auto;
		transform: translateX(120%);
		transition: 0.35s transform cubic-bezier(0.51, 0.92, 0.24, 1.15);
		transition-delay: var(--delay);
	}
	.opened .app-menu.mobile > li {
		transform: translateX(0);
	}
	.app-menu.mobile .anchor {
		float: none;
		font-size: 1.1em;
		margin: 0 auto;
		opacity: 0;
		transition: 0.5s opacity ease-in-out;
	}
	.opened .app-menu.mobile .anchor {
		opacity: 1;
	}
}
</style>
