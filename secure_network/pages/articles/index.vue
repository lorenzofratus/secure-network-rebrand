<!--
 * Copyright (c) 2021
 *
 * This is the introductory page all Articles grouped and counted by year and type.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
		<main-section
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<timeline-section :wrapper="wrapper" :years="years" />
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import TimelineSection from '~/components/sections/TimelineSection.vue'

export default {
	components: {
		MainSection,
		TimelineSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, error }) {
		try {
			// Retrieve aggregated information about articles, grouped and counted by year and type from the database
			// This is the most complex query implemented.
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/articles-aggregation`
			)
			const years = data
			return {
				years,
			}
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'articles',
			main_section: {
				title: 'All Our Articles',
				subtitle: 'Year By Year',
				img: '/images/covers/articles.svg',
			},
		}
	},
	head() {
		return {
			title: 'Articles | Secure Network',
		}
	},
}
</script>

<style></style>
