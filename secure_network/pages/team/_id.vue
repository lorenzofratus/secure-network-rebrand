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
		<title-component :title="person.role + ' of the area:'" />
		<image-component
			:title="area.name"
			:text="area.text"
			:img="area.img"
			:btn-path="area.path"
			:wrapper="person.id"
			:no-margin="true"
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
import TitleComponent from '../../components/items/TitleComponent.vue'
import ImageComponent from '~/components/items/ImageComponent.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		// ItemsSection,
		ImageComponent,
		TitleComponent,
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
