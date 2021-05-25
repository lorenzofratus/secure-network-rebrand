<!--
 * Copyright (c) 2021
 *
 * This is the introductory page of all Areas.
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
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
		/>
		<image-components-section
			id="areas"
			type="area"
			:components="areas"
			:wrapper="wrapper"
		/>
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
export default {
	components: { MainSection, AltSection, ImageComponentsSection },
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, error }) {
		try {
			// Retrieve all available areas from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/areas`
			)
			const areas = data
			return {
				areas,
			}
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'Areas',
			main_section: {
				title: 'Our Fields of Expertise',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'See Areas',
						path: '#areas',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts#email',
					},
				],
				img: '/images/covers/areas.svg',
			},
			alt_section: {
				title: 'Overview',
				paragraphs: [
					'Secure Network’s years of experience in information security are at your service to provide our knowledge and specialised courses.',
					'The policies form the basis of any security plan and define the requirements to be followed and rules that must be adhered to in different business areas. These documents provide, together with the implementation of appropriate technological tools, which all entities involved realize security measures in the form prescribed respecting the mandatory regulations and contributing to the security company.',
				],
			},
		}
	},
	head() {
		return {
			title: 'Areas | Secure Network',
		}
	},
}
</script>

<style></style>
