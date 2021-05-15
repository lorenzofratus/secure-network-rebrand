<template>
	<div class="container">
		<main-section
			:img="resource.img"
			:title="resource.title"
			:subtitle="resource.subtitle"
			:wrapper="resource.id"
		/>
		<alt-section
			:title="resource.name"
			:paragraphs="resource.paragraphs"
			:contains-link="true"
			:wrapper="resource.id"
		/>
	</div>
</template>

<script>
import AltSection from '~/components/sections/AltSection.vue'
import MainSection from '~/components/sections/MainSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
		const { id } = route.params
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/resources/${id}`
		)
		const resource = data
		const date = new Date(resource.date)
		const year = date.getFullYear()
		resource.title =
			('0' + date.getDate()).slice(-2) +
			' ' +
			date.toLocaleString('EN', { month: 'long' }) +
			' ' +
			year
		resource.paragraphs = resource.text.split('\n')
		resource.img = '/images/covers/' + resource.type + '.svg'
		const breadcrumbs = [
			{ text: 'Resources', path: '/resources' },
			{ text: year, path: '/resources/' + year },
		]

		return { resource, breadcrumbs }
	},
	data() {
		return {
			main_section: {
				img: '/images/covers/',
			},
		}
	},
}
</script>

<style scoped></style>
