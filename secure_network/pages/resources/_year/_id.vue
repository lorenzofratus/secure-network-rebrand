<template>
	<div class="container">
		<main-section
			:img="resource.img"
			:title="resource.title"
			:subtitle="'!------SHOULD BE REMOVED------! ' + resource.name"
			:wrapper="resource.id"
		/>
		<alt-section
			:title="resource.name"
			:paragraphs="resource.paragraphs"
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
		resource.title =
			('0' + date.getDate()).slice(-2) +
			' ' +
			date.toLocaleString('EN', { month: 'long' }) +
			' ' +
			date.getFullYear()
		resource.paragraphs = resource.text.split('\n')
		resource.img = '/images/covers/' + resource.type + '.svg'

		return { resource }
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
