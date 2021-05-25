<!--
 * Copyright (c) 2021
 *
 * This is the page of the given Category, which contains all Services that belong to it.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
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
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { catid } = route.params
			// Retrieve all services that belong to the given category from the database
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/services-by-category/${catid}`
			)
			const services = payload.data

			// Retrieve the given category from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/service-category/${catid}`
			)
			const category = payload.data

			// Split the category.text property in order to get several paragraphs.
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
