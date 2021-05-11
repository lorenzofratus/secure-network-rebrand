<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="person.img"
			:title="person.name + ' ' + person.surname"
			:wrapper="person.id"
			:is-rounded="main_section.isRounded"
		/>
		<alt-section
			:title="'About ' + person.name + '...'"
			:paragraphs="person.paragraphs"
			:wrapper="person.id"
		/>

		<image-components-section
			v-if="area != null"
			title="Current occupation"
			:components="[area]"
			:wrapper="person.id"
		/>

		<!-- <items-section :wrapper="wrapper" :items="services" /> -->
		<alt-section
			:title="alt_section2.title"
			:paragraphs="alt_section2.paragraphs"
			:wrapper="person.id"
			:button="alt_section2.button"
			:centered="alt_section2.centered"
		/>
	</div>
</template>

<script>
// import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ImageComponentsSection,
		// ItemsSection,
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

		return {
			person,
			area,
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
				isRounded: true,
			},
			alt_section: {
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
			},
			alt_section2: {
				title: 'We are hiring!',
				paragraphs: ['Come hack with us!'],
				button: {
					class: 'primary',
					text: 'Contact Us',
					path: '/contact',
				},
				centered: true,
			},
		}
	},
}
</script>

<style></style>
