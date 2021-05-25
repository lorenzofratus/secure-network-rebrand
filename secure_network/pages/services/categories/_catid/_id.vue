<template>
	<main class="container">
		<main-section
			:buttons="buttons"
			:img="service.img"
			:title="service.name"
			:wrapper="service.id"
		/>
		<alt-section
			:title="'Service Overview'"
			:paragraphs="service.paragraphs"
			:wrapper="service.id"
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
			:is-rounded="true"
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
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			let payload = await $axios.get(
				`${process.env.BASE_URL}/api/services/${id}`
			)
			const service = payload.data
			service.paragraphs = service.text.split('\n')

			payload = await $axios.get(
				`${process.env.BASE_URL}/api/areas/${service.area_id}`
			)

			const area = payload.data

			payload = await $axios.get(
				`${process.env.BASE_URL}/api/people-by-service/${id}/true`
			)
			const referents = payload.data
			referents.forEach((person) => (person.tag = 'reference'))

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
