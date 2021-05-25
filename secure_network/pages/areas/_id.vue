<template>
	<main class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="area.img"
			:title="area.name"
			:wrapper="area.id"
		/>
		<alt-section
			title="About this area"
			:paragraphs="area.paragraphs"
			:wrapper="area.id"
		/>
		<grid-section
			id="categories"
			:wrapper="area.id"
			title="Categories Of Services"
			child="service-card"
			:elements="serviceCategories"
			type="category"
		/>
		<image-components-section
			id="team"
			title="Currently Employing"
			:components="managers"
			:wrapper="area.id"
			:rounded="true"
		/>
		<grid-section
			:wrapper="area.id"
			:small="true"
			child="person-card"
			:elements="people"
		/>
	</main>
</template>

<script>
import GridSection from '~/components/sections/GridSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		GridSection,
		ImageComponentsSection,
	},
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			// Retrieving the area
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/areas/${id}`
			)
			const area = payload.data
			area.paragraphs = area.text.split('\n')

			// Retrieving employees
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-area-and-role/${id}/employee/`
			)
			const people = payload.data

			// Retrieving the manager
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-area-and-role/${id}/manager/`
			)
			const managers = payload.data
			managers.forEach((manager) => (manager.tag = manager.role))

			// Retrieving the categories of services offered by the area
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/service-categories-by-area/${id}`
			)
			const serviceCategories = payload.data

			return {
				area,
				people,
				managers,
				serviceCategories,
			}
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			main_section: {
				buttons: [
					{
						class: 'primary',
						text: 'See Categories',
						path: '#categories',
					},
					{
						class: 'secondary',
						text: 'See Team',
						path: '#team',
					},
				],
			},
		}
	},
	head() {
		return {
			title: this.area.name + ' | Secure Network',
		}
	},
}
</script>

<style></style>
