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
			v-if="referents.length"
			title="Provided by"
			:components="referents"
			:wrapper="service.id"
			:is-rounded="true"
		/>
		<people-section
			v-if="people.length"
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

		const buttons = [
			{
				class: 'primary',
				text: 'Area',
				path: '/areas/' + service.area_id,
			},
			{
				class: 'secondary',
				text: 'TBD',
				path: '/contacts',
			},
		]

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
			buttons,
			referents,
			people,
		}
	},
}
</script>

<style></style>
