<!--
 * Copyright (c) 2021
 *
 * This is the introductory page of the given resource.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
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
	</main>
</template>

<script>
import AltSection from '~/components/sections/AltSection.vue'
import MainSection from '~/components/sections/MainSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			// Retrieve the given resource from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/resources/${id}`
			)
			const resource = data
			// Perform some processing operations on the date to better display it
			const date = new Date(resource.date)
			const year = date.getFullYear()
			resource.title =
				('0' + date.getDate()).slice(-2) +
				' ' +
				date.toLocaleString('EN', { month: 'long' }) +
				' ' +
				year

			// Split the resource.text property in order to get several paragraphs.
			resource.paragraphs = resource.text.split('\n')

			// Compute the path of the image of the given resource.
			// Each resource of the same type will display the same image in the MainSection.
			resource.img = '/images/covers/' + resource.type + '.svg'

			return { resource }
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			main_section: {
				img: '/images/covers/',
			},
		}
	},
	head() {
		return {
			title: this.resource.title + ' | Secure Network',
		}
	},
}
</script>

<style scoped></style>
