<!--
 * Copyright (c) 2021
 *
 * This is the page for a single Area.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
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
			id="services"
			:wrapper="area.id"
			:wide="true"
			title="Provided Services"
			child="service-card"
			:elements="services"
			type="service"
		/>
		<image-components-section
			id="team"
			title="Area Manager"
			:alt="true"
			:components="managers"
			:wrapper="area.id"
			:rounded="true"
		/>
		<grid-section
			:wrapper="area.id"
			:small="true"
			:wide="true"
			title="Area Team"
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
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			// Retrieve the given area from the database
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/areas/${id}`
			)
			const area = payload.data
			area.paragraphs = area.text.split('\n')

			// Retrieve all employees working in this area from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-area-and-role/${id}/employee/`
			)
			const people = payload.data

			// Retrieve the manager of the area from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-area-and-role/${id}/manager/`
			)
			const managers = payload.data
			// Add to each manager the tag attribute
			// managers.forEach((manager) => (manager.tag = manager.role))

			// Retrieve services offered by this area from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/services-by-area/${id}`
			)
			const services = payload.data

			return {
				area,
				people,
				managers,
				services,
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
						text: 'See Services',
						path: '#services',
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
