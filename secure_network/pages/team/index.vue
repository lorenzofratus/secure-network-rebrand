<!--
 * Copyright (c) 2021
 *
 * This is the page of the whole Team.
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
			id="founders"
			title="Our Founders"
			:components="founders"
			:wrapper="wrapper"
			:rounded="true"
		/>
		<grid-section
			id="employees"
			:wrapper="wrapper"
			:small="true"
			title="Our Employees"
			child="person-card"
			:elements="team"
		/>
		<alt-section
			:title="alt_section_2.title"
			:paragraphs="alt_section_2.paragraphs"
			:wrapper="wrapper"
			:button="alt_section_2.button"
			:centered="alt_section_2.centered"
		/>
	</main>
</template>

<script>
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import GridSection from '~/components/sections/GridSection.vue'

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
	async asyncData({ $axios, error }) {
		try {
			// Retrieve all people whose role is not founder from the database
			let payload = await $axios.get(`${process.env.BASE_URL}/api/team`)
			const team = payload.data

			// Retrieve all people whose role is founder from the database
			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-role/founder`
			)
			const founders = payload.data

			return {
				team,
				founders,
			}
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'Team',
			main_section: {
				title: 'A Cutting-Edge Team Of Researchers',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'Our Founders',
						path: '#founders',
					},
					{
						class: 'secondary',
						text: 'Our Employees',
						path: '#employees',
					},
				],
				img: '/images/covers/team.svg',
			},
			alt_section: {
				title: 'Who we are',
				paragraphs: [
					'Secure Network acts like your most determined attackers and performs realistic and in-depth analysis of your most critical systems.',
					'Formed by a young and cutting-edge Red Team of engineers and always up to date thanks to the close collaboration with Politecnico di Milano.',
					'The stable research and development studies and the active participation to international conferences, lectures and workshops, make Secure Network one of the most effective security companies.',
				],
			},
			alt_section_2: {
				title: 'We are hiring!',
				paragraphs: ['Come hack with us!'],
				button: {
					class: 'primary',
					text: 'Contact Us',
					path: '/contacts',
				},
				centered: true,
			},
		}
	},
	head() {
		return {
			title: 'Team | Secure Network',
		}
	},
}
</script>

<style scoped></style>
