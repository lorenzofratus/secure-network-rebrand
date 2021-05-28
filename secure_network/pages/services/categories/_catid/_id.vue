<!--
 * Copyright (c) 2021
 *
 * This is the page of the given Service.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
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
			:button="alt_section.button"
		/>
		<image-components-section
			id="areas"
			type="area"
			title="Located In"
			:components="[area]"
			:wrapper="service.id"
		/>
		<image-components-section
			v-if="referents.length"
			id="team"
			title="Provided by"
			:components="referents"
			:wrapper="service.id"
			:rounded="true"
		/>
		<grid-section
			v-if="people.length"
			:id="referents.length ? '' : 'team'"
			:wrapper="service.id"
			:small="true"
			:title="referents.length ? '' : 'Provided by'"
			child="person-card"
			:elements="people"
		/>
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import GridSection from '~/components/sections/GridSection.vue'

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
			// Retrieve the given service from the database
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/services/${id}`
			)
			const service = payload.data
			// Split the service.text property in order to get several paragraphs.
			service.paragraphs = service.text.split('\n')

			// Retrieve the area of the given service from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/areas/${service.area_id}`
			)
			const area = payload.data

			// Retrieve all people which are referents for the given service
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-service/${id}/true`
			)
			const referents = payload.data
			// Add to each referent the tag attribute
			referents.forEach((person) => (person.tag = 'reference'))

			// Retrieve all people which are not referents for the given service
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-service/${id}/false`
			)

			const people = payload.data

			return {
				service,
				referents,
				people,
				area,
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
						text: 'See Area',
						path: '#areas',
					},
					{
						class: 'secondary',
						text: 'See Team',
						path: '#team',
					},
				],
			},
			alt_section: {
				button: {
					class: 'secondary',
					text: 'Contact Us',
					path: '/contacts#email',
				},
			},
		}
	},
	head() {
		return {
			title: this.service.name + ' | Secure Network',
		}
	},
}
</script>

<style></style>
