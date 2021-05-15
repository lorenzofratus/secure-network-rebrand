<template>
	<div class="container">
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

		<people-section
			v-if="people.length"
			:id="referents.length ? '' : 'team'"
			:title="referents.length ? '' : 'Provided by'"
			:people="people"
			:wrapper="service.id"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import PeopleSection from '~/components/sections/PeopleSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ImageComponentsSection,
		PeopleSection,
	},
	async asyncData({ $axios, route }) {
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

		const breadcrumbs = [
			{ text: 'Services', path: '/services' },
			{ text: 'Categories', path: '/services/categories' },
			{ text: area.name, path: '/services/categories/' + area.id },
		]

		return {
			service,
			referents,
			people,
			area,
			breadcrumbs,
		}
	},
	data() {
		return {
			buttons: [
				{
					class: 'primary',
					text: 'Area',
					path: '#areas',
				},
				{
					class: 'secondary',
					text: 'Team',
					path: '#team',
				},
			],
		}
	},
}
</script>

<style></style>
