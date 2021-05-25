<template>
	<main class="container">
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
		<grid-section
			id="services"
			:wrapper="wrapper"
			child="service-card"
			:elements="services"
			type="service"
		/>
	</main>
</template>

<script>
import GridSection from '~/components/sections/GridSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		GridSection,
	},
	async asyncData({ $axios, route, error }) {
		try {
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
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				buttons: [
					{
						class: 'primary',
						text: 'See Services',
						path: '#services',
					},
				],
				img: '/images/covers/index.svg',
			},
		}
	},
	head() {
		return {
			title: this.category.name + ' | Secure Network',
		}
	},
}
</script>

<style></style>
