<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
			:button="alt_section.button"
		/>
		<services-section :wrapper="wrapper" :services="services" />
		<filter-section
			:title="filter_section.title"
			:wrapper="wrapper"
			:buttons="filter_section.buttons"
		/>
		<boxes-section :wrapper="wrapper" :boxes="boxes_section.boxes" />
	</div>
</template>

<script>
import ServicesSection from '../components/sections/ServicesSection.vue'
import FilterSection from '../components/sections/FilterSection.vue'
import BoxesSection from '../components/sections/BoxesSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		ServicesSection,
		FilterSection,
		BoxesSection,
	},
	layout: 'default',
	async asyncData({ $axios }) {
		// fetch data from the api server
		const { data } = await $axios.get('/api/services')
		const services = data.data
		return {
			services,
		}
	},
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				title: 'Secure Network',
				subtitle: 'Your Protection, Our Mission',
				buttons: [
					{
						class: 'primary',
						text: 'Tbd',
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
			boxes_section: {
				boxes: [
					{
						title: 'Mobile Application',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'smartphone',
						button: {
							class: 'secondary',
							text: 'Read More',
							path: '/',
						},
					},
					{
						title: 'Wireless Network & Infrastructures',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing ',
						icon: 'wifi',
						button: {
							class: 'secondary',
							text: 'Read More',
							path: '/',
						},
					},
					{
						title: 'Middleware Infrastructures',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'code',
						button: {
							class: 'secondary',
							text: 'Read More',
							path: '/',
						},
					},
				],
			},
		}
	},
}
</script>

<style></style>
