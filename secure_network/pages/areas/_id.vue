<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="area.img"
			:title="area.name"
			:wrapper="area.id"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="area.paragraphs"
			:wrapper="area.id"
		/>
		<title-component title="Available Services" />
		<items-section :wrapper="area.id" :items="serviceCategories" />
		<title-component title="Manager" />
		<circle-card-description
			:person="manager"
			title="Manager of the Area"
		/>
		<title-component title="Employees" />
		<people-section :people="people" :wrapper="area.id" />
	</div>
</template>

<script>
import TitleComponent from '../../components/items/TitleComponent.vue'
import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import PeopleSection from '~/components/sections/PeopleSection.vue'
import CircleCardDescription from '~/components/items/CircleCardDescription.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ItemsSection,
		PeopleSection,
		TitleComponent,
		CircleCardDescription,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
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
		const manager = payload.data[0]

		// Retrieving the categories of services offered by the area
		payload = await $axios.get(
			`${process.env.BASE_URL}/api/service-categories-by-area/${id}`
		)
		const serviceCategories = payload.data

		return {
			area,
			people,
			manager,
			serviceCategories,
		}
	},
	data() {
		return {
			main_section: {
				buttons: [
					{
						class: 'primary',
						text: 'Section',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts',
					},
				],
			},
			alt_section: {
				title: 'Lorem Ipsum',
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
			},
			title_comp_emp: 'Employee',
		}
	},
}
</script>

<style></style>
