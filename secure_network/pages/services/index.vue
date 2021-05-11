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
		<items-section :wrapper="wrapper" :items="services" />
	</div>
</template>

<script>
import ItemsSection from '~/components/sections/ItemsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ItemsSection,
	},
	layout: 'default',
	// async asyncData({ store }) {
	// 	// fetch data from store
	// 	const services = await store.dispatch('getServices')
	// 	return {
	// 		services,
	// 	}
	// },
	async asyncData({ $axios }) {
		// fetch data from api server
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/services`
		)
		const services = data
		return {
			services,
		}
	},
	data() {
		return {
			wrapper: 'Services',
			main_section: {
				title: 'All Available Services',
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
				img: '/images/covers/services.svg',
			},
			alt_section: {
				title: 'Lorem Ipsum',
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
				button: {
					class: 'secondary',
					text: 'Filter By Category',
					path: '/services/categories',
				},
			},
		}
	},
	computed: {},
}
</script>

<style></style>
