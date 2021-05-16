<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
			:button="alt_section.button"
			:centered="alt_section.centered"
		/>
		<boxes-section
			id="news"
			:title="'Latest News'"
			:boxes="resources"
			:wrapper="wrapper"
			class="resources"
		/>
		<blocks-section
			:title="blocks_section.title"
			:blocks="blocks_section.blocks"
			:button="blocks_section.button"
			:wrapper="wrapper"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import BoxesSection from '~/components/sections/BoxesSection.vue'
import BlocksSection from '~/components/sections/BlocksSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		BoxesSection,
		BlocksSection,
	},
	async asyncData({ $axios }) {
		// Choose the number of news you want to get
		const n = 4
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/last-news/${n}`
		)
		const resources = data
		return { resources }
	},
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				title: 'Secure Network',
				subtitle: 'Your Protection, Our Mission',
				buttons: [
					{
						class: 'primary',
						text: 'Latest News',
						path: '#news',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts',
					},
				],
				img: '/images/covers/index.svg',
			},
			alt_section: {
				title: 'A truly connected world needs security',
				paragraphs: [
					'Secure Network performs comprehensive security assessments, securing your applications and infrastructures thoroughly and extensively.',
					'Our Team acts like determined attackers, simulating real-world attacks and in-depth analysis of your platform, so that no part of it can lead to service disruption, data breach or financial damage.',
					'We can train your staff and raise your overall security awareness, so that future developments stay reliably and predictably secure.',
				],
				button: {
					class: 'secondary',
					text: 'About Us',
					path: '/about',
				},
			},
			blocks_section: {
				title: 'It is not a matter of if, but when and how',
				blocks: [
					{
						icon: 'live_tv',
						title: 'Many high profile incidents',
						text:
							'Notable incidents do not happen yearly, or monthly. They happen daily. Even estabilished firms with huge capitals cannot whitstand attackers, when proper security and processes have not been estabilished or have been postponed.',
					},
					{
						icon: 'wifi_tethering',
						title: 'A connected world has consequences',
						text:
							'Prosperous markets can be highly competitive. Knowledge of hacking has become trivial to obtain even for small businesses. As such it is not just a matter of “what could happen”, but “when” and “how to be prepared”.',
					},
					{
						icon: 'volunteer_activism',
						title: 'Trust and human data',
						text:
							'When you are processing and managing user data, personal or credit information, every breach would be disastrous and have permanent, long-lasting consequences on both the wellness of your users, and your reputation.',
					},
				],
				button: {
					class: 'secondary',
					text: 'See Services',
					path: '/services',
				},
			},
		}
	},
}
</script>

<style></style>
