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
import LinkedinLogo from '~/components/social-logos/LinkedinLogo'
import FacebookLogo from '~/components/social-logos/FacebookLogo'
import TwitterLogo from '~/components/social-logos/TwitterLogo'
import GithubLogo from '~/components/social-logos/GithubLogo'

export default {
	data() {
		return {
			components: {
				LinkedinLogo,
				FacebookLogo,
				TwitterLogo,
				GithubLogo,
			},
			menuOptions: [
				{
					name: 'LinkedIn',
					href:
						'https://www.linkedin.com/company/secure-network-s.r.l./',
					icon: LinkedinLogo,
				},
				{
					name: 'Facebook',
					href:
						'https://www.facebook.com/pages/Secure-Network-Srl/73399076138',
					icon: FacebookLogo,
				},
				{
					name: 'Twitter',
					href: 'https://twitter.com/_securenetwork',
					icon: TwitterLogo,
				},
				{
					name: 'GitHub',
					href: 'https://github.com/securenetwork',
					icon: GithubLogo,
				},
			],
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
