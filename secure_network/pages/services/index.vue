<!--
 * Copyright (c) 2021
 *
 * This is the introductory page all Services.
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
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
			:button="alt_section.button"
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
	async asyncData({ $axios, error }) {
		try {
			// Retrieve all services from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/services`
			)
			const services = data
			return {
				services,
			}
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'Services',
			main_section: {
				title: 'All Available Services',
				buttons: [
					{
						class: 'primary',
						text: 'See Services',
						path: '#services',
					},
					{
						class: 'secondary',
						text: 'Contact Us',
						path: '/contacts#email',
					},
				],
				img: '/images/covers/services.svg',
			},
			alt_section: {
				title: 'Full coverage to meet specific demands',
				paragraphs: [
					'Secure Network’s Red Team is highly specialized and competent in most fields of security, guaranteeing protection that is dependable.',
					'The wide range of courses, delivered anywhere in the world, provides multiple paths that can meet the needs of all our customers, including developers and system administrators, commercial agents, security consultant, manager, law enforcement and military.',
					'In addition to the various courses offered and already defined, Secure Network is able to understand the specific needs of its customers and develop courses that meet every need.',
				],
				button: {
					class: 'secondary',
					text: 'Group By Category',
					path: '/services/categories',
				},
			},
		}
	},
	head() {
		return {
			title: 'Services | Secure Network',
		}
	},
}
</script>

<style></style>
