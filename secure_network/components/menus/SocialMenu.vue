<!--
 * Copyright (c) 2021
 *
 * A SocialMenu is used to model social logos which are embedded in the
 * footer of the page.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<ul class="social-menu">
		<li
			v-for="(option, index) in menuOptions"
			:key="'social-item-' + index"
		>
			<a
				:href="option.href"
				:title="'Follow us on ' + option.name"
				target="_blank"
				rel="noopener noreferrer"
				class="link"
			>
				<!-- We used components instead of images because it was the cleanest way to change the color on hover -->
				<component
					:is="option.icon"
					role="link"
					class="icon"
					:title="'Follow us on ' + option.name"
				/>
			</a>
		</li>
	</ul>
</template>

<script>
import LinkedinLogo from '~/components/social-logos/LinkedinLogo.vue'
import FacebookLogo from '~/components/social-logos/FacebookLogo.vue'
import TwitterLogo from '~/components/social-logos/TwitterLogo.vue'
import GithubLogo from '~/components/social-logos/GithubLogo.vue'

export default {
	components: {
		LinkedinLogo,
		FacebookLogo,
		TwitterLogo,
		GithubLogo,
	},
	data() {
		return {
			menuOptions: this.$store.state.menu.social,
		}
	},
}
</script>

<style scoped>
.social-menu {
	display: inline-block;
	padding: 0;
}
.social-menu > li {
	display: inline-block;
	list-style: none;
}
.social-menu .link {
	display: inline-block;
	color: var(--light-color);
	transition: 0.35s color ease-in-out;
	margin: 0 0.25em;
}
.social-menu .link:hover {
	color: var(--primary-color);
}
.social-menu .icon {
	display: block;
	width: 2em;
	padding: 0.25em;
}
</style>
