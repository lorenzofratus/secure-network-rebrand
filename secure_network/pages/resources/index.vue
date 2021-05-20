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
	layout: 'default',
	async asyncData({ $axios, error }) {
		try {
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/resources-aggregation`
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
			wrapper: 'resources',
			main_section: {
				title: 'All Our Resources Year By Year',
				img: '/images/covers/resources.svg',
			},
		}
	},
	head() {
		return {
			title: 'Resources | Secure Network',
		}
	},
}
</script>

<style></style>
