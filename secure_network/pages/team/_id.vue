<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="person.img"
			:title="person.name + ' ' + person.surname"
			:wrapper="person.id"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="person.paragraphs"
			:wrapper="person.id"
		/>
		<!-- <items-section :wrapper="wrapper" :items="services" /> -->
	</div>
</template>

<script>
// import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		// ItemsSection,
	},
	layout: 'default',
	async asyncData({ $axios, route }) {
		const { id } = route.params
		const payload = await $axios.get(
			`${process.env.BASE_URL}/api/people/${id}`
		)
		const person = payload.data
		person.paragraphs = person.text.split('\n')

		return {
			person,
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
			filter_section: {
				title: 'Filter Showcase',
				buttons: [
					{
						class: 'primary',
						text: 'All types',
						path: '/',
					},
					{
						class: 'outlined',
						text: 'Research',
						path: '/',
					},
					{
						class: 'outlined',
						text: 'News',
						path: '/',
					},
				],
			},
		}
	},
}
</script>

<style></style>