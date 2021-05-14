<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="category.name"
			:wrapper="wrapper"
		/>
		<alt-section
			title="About this category"
			:paragraphs="category.paragraphs"
			:wrapper="wrapper"
		/>
		<items-section :wrapper="wrapper" :items="services" />
	</div>
</template>

<script>
import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ItemsSection,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
		const { catid } = route.params
		let payload = await $axios.get(
			`${process.env.BASE_URL}/api/services-by-category/${catid}`
		)
		const services = payload.data

		payload = await $axios.get(
			`${process.env.BASE_URL}/api/service-category/${catid}`
		)
		const category = payload.data
		category.paragraphs = category.text.split('\n')

		return {
			services,
			category,
		}
	},
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				buttons: [
					{
						class: 'primary',
						text: 'Section',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Contact us',
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
