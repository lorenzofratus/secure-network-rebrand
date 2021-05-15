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
			:centered="alt_section.centered"
		/>
		<boxes-section
			:title="'Last News'"
			:boxes="resources"
			:wrapper="wrapper"
			class="resources"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import BoxesSection from '~/components/sections/BoxesSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		BoxesSection,
	},
	layout: 'default',
	async asyncData({ $axios }) {
		// Choose the number of news you want to get
		const n = 4
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/last-news/${n}`
		)
		const resources = data
		return { resources }
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
				img: '/images/covers/index.svg',
			},
			alt_section: {
				title: 'Work In Progress',
				paragraphs: [
					'We are currently working on this page.',
					'Stay tuned!',
				],
				centered: true,
			},
		}
	},
}
</script>

<style></style>
