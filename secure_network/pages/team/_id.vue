<!--
 * Copyright (c) 2021
 *
 * This is the page for a single Person.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="person.img"
			:title="person.name + ' ' + person.surname"
			:wrapper="person.id"
			:rounded="true"
		/>
		<alt-section
			:title="'About ' + person.name + '...'"
			:paragraphs="person.paragraphs"
			:wrapper="person.id"
		/>
		<image-components-section
			id="area"
			type="area"
			title="Current occupation"
			:components="[area]"
			:wrapper="person.id"
		/>
		<grid-section
			id="services"
			:wrapper="person.id"
			title="Provided Services"
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
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ImageComponentsSection,
		GridSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			// Retrieve the given person from the database
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/people/${id}`
			)
			const person = payload.data
			// Split the person.text property in order to get several paragraphs.
			person.paragraphs = person.text.split('\n')

			// Retrieve the area in which the given person is enrolled from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/areas/${person.area_id}`
			)

			const area = payload.data

			// Add a tag to the given area in order to highlight the role of the given person within the area
			if (area && person.role)
				area.tag =
					person.role !== 'founder'
						? person.role + ' at'
						: person.role + ' of'

			// Retrieve all services provided by the given person from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/services-by-person/${id}`
			)
			const services = payload.data

			return {
				person,
				area,
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
						text: 'My Area',
						path: '#area',
					},
					{
						class: 'secondary',
						text: 'My Services',
						path: '#services',
					},
				],
			},
		}
	},
	head() {
		return {
			title:
				this.person.name +
				' ' +
				this.person.surname +
				' | Secure Network',
		}
	},
}
</script>

<style></style>
