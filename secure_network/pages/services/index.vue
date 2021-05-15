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
		<items-section id="services" :wrapper="wrapper" :items="services" />
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
						text: 'Our Services',
						path: '#services',
					},
					{
						class: 'secondary',
						text: 'Contact Us',
						path: '/contacts',
					},
				],
				img: '/images/covers/services.svg',
			},
			alt_section: {
				title: 'Full coverage to meet specific demands',
				paragraphs: [
					'Secure Network’s Red Team is highly specialized and competent in most fields of security, guaranteeing protection that is dependable.',
					'The wide range of courses, delivered anywhere in the world, provides multiple paths that can meet the needs of all our customers, including developers and system administrators, commercial agents, security consultant, manager, law enforcement and military.',
					'In addition to the various courses offered and already defined, Secure Network is able to understand the specific needs of its customers and develop courses that meet every need.',
				],
				button: {
					class: 'secondary',
					text: 'Group By Category',
					path: '/services/categories',
				},
			},
		}
	},
	computed: {},
}
</script>

<style></style>
