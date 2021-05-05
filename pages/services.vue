<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
			:button="alt_section.button"
		/>
		<services-section :wrapper="wrapper" :services="services" />
	</div>
</template>

<script>
import ServicesSection from '../components/sections/ServicesSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ServicesSection,
	},
	layout: 'default',
	async asyncData({ $axios }) {
		// fetch data from the api server
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/service_categories`
		)
		const services = data
		return {
			services,
		}
	},
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				title: 'All Service Categories',
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
				img: {
					src: '/images/covers/index.svg',
					class: 'cover',
				},
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
