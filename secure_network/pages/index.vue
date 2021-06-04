<!--
 * Copyright (c) 2021
 *
 * This is the home page of the website.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
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
		<grid-section
			id="news"
			:wrapper="wrapper"
			title="Latest News"
			child="resource-card"
			:elements="resources"
			type="resource"
			class="resources"
			:button="news_section.button"
		/>
		<grid-section
			:wrapper="wrapper"
			:small="true"
			:alt="true"
			child="threat-card"
			:title="$store.state.threats.title"
			:elements="$store.state.threats.blocks"
			:button="$store.state.threats.button"
		/>
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import GridSection from '~/components/sections/GridSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		GridSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, error }) {
		try {
			// Number of news you want to retrieve
			const n = 4
			// Retrieve last n news from the database
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
			news_section: {
				button: {
					class: 'secondary',
					text: 'All Resources',
					path: '/resources',
				},
			},
		}
	},
}
</script>

<style></style>
