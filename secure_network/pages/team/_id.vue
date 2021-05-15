<template>
	<div class="container">
		<main-section
			:buttons="buttons"
			:img="person.img"
			:title="person.name + ' ' + person.surname"
			:wrapper="person.id"
			:is-rounded="true"
		/>
		<alt-section
			:title="'About ' + person.name + '...'"
			:paragraphs="person.paragraphs"
			:wrapper="person.id"
		/>

		<image-components-section
			v-if="area != null"
			id="area"
			title="Current occupation"
			:components="[area]"
			:wrapper="person.id"
		/>

		<items-section
			v-if="services.length"
			id="services"
			title="Provided Services"
			:wrapper="person.id"
			:items="services"
		/>
		<hiring-section :wrapper="person.id" />
	</div>
</template>

<script>
import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import HiringSection from '~/components/sections/HiringSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ImageComponentsSection,
		ItemsSection,
		HiringSection,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
		const { id } = route.params
		let payload = await $axios.get(
			`${process.env.BASE_URL}/api/people/${id}`
		)
		const person = payload.data
		person.paragraphs = person.text.split('\n')

		payload = await $axios.get(
			`${process.env.BASE_URL}/api/areas/${person.area_id}`
		)

		const area = payload.data
		if (area && person.role) area.tag = person.role + ' at'

		payload = await $axios.get(
			`${process.env.BASE_URL}/api/services-by-person/${id}`
		)
		const services = payload.data

		return {
			person,
			area,
			services,
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
	computed: {
		buttons() {
			const buttons = []
			if (this.area != null) buttons.push(this.main_section.buttons[0])
			if (this.services.length) buttons.push(this.main_section.buttons[1])
			return buttons
		},
	},
}
</script>

<style></style>
