<template>
	<main class="container">
		<main-section
			:buttons="buttons"
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
			v-if="area != null"
			id="area"
			type="area"
			title="Current occupation"
			:components="[area]"
			:wrapper="person.id"
		/>
		<grid-section
			v-if="services.length"
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
import HiringSection from '~/components/sections/HiringSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ImageComponentsSection,
		GridSection,
		HiringSection,
	},
	async asyncData({ $axios, route, error }) {
		try {
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
			if (area && person.role)
				area.tag =
					person.role !== 'founder'
						? person.role + ' at'
						: person.role + ' of'

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
						class: 'secondary',
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
	computed: {
		buttons() {
			// Computes the structural links to be displayed in the main section (displayed only if the corresponding section exists)
			const buttons = []
			if (this.area != null) buttons.push(this.main_section.buttons[0])
			if (this.services.length) buttons.push(this.main_section.buttons[1])
			// Sets as primary the first button, independently on what it is
			if (buttons.length) buttons[0].class = 'primary'
			return buttons
		},
	},
}
</script>

<style></style>
