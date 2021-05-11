<template>
	<div class="container">
		<main-section
			:buttons="buttons"
			:img="service.img"
			:title="service.name"
			:wrapper="service.id"
		/>
		<alt-section
			:title="'Service Overview'"
			:paragraphs="service.paragraphs"
			:wrapper="service.id"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
		const { id } = route.params
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/services/${id}`
		)
		const service = data
		service.paragraphs = service.text.split('\n')

		const buttons = [
			{
				class: 'primary',
				text: 'Area',
				path: '/areas/' + service.area_id,
			},
			{
				class: 'secondary',
				text: 'TBD',
				path: '/contacts',
			},
		]
		return {
			service,
			buttons,
		}
	},
}
</script>

<style></style>
