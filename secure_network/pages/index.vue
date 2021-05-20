<template>
	<main class="container">
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
		<threats-section :wrapper="wrapper" />
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import BoxesSection from '~/components/sections/BoxesSection.vue'
import ThreatsSection from '~/components/sections/ThreatsSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		BoxesSection,
		ThreatsSection,
	},
	async asyncData({ $axios, error }) {
		// Choose the number of news you want to get
		try {
			const n = 4
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/last-news/${n}`
			)
			const resources = data
			return { resources }
		} catch (err) {
			error({ statusCode: 500 })
		}
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
						path: '/contacts#email',
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
		}
	},
}
</script>

<style></style>
