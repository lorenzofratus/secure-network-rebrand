<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<timeline-section :wrapper="wrapper" :years="years" />
	</div>
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
	async asyncData({ $axios }) {
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/resources-aggregation`
		)
		const years = data
		console.log(years)
		return {
			years,
		}
	},
	data() {
		return {
			wrapper: 'resources',
			main_section: {
				title: 'All Updates\nYear By Year',
				buttons: [
					{
						class: 'primary',
						text: 'Tbd',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Tbd',
						path: '/',
					},
				],
				img: '/images/covers/resources.svg',
			},
		}
	},
}
</script>

<style></style>
