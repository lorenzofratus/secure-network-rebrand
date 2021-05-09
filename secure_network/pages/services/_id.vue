<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
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
		return {
			service,
		}
	},
	data() {
		return {
			main_section: {
				buttons: [
					{
						class: 'primary',
						text: 'TBD',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'TBD',
						path: '/contacts',
					},
				],
				img: '/images/covers/index.svg',
			},
		}
	},
}
</script>

<style></style>
