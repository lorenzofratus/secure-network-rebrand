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
		/>
		<image-components-section
			id="areas"
			:components="areas"
			:wrapper="wrapper"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
export default {
	components: { MainSection, AltSection, ImageComponentsSection },
	async asyncData({ $axios, error }) {
		try {
			// fetch data from the api server
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/areas`
			)
			const areas = data
			return {
				areas,
			}
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'Areas',
			main_section: {
				title: 'Our Fields of Expertise',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'See Areas',
						path: '#areas',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts',
					},
				],
				img: '/images/covers/areas.svg',
			},
			alt_section: {
				title: 'Overview',
				paragraphs: [
					'Secure Network’s years of experience in information security are at your service to provide our knowledge and specialised courses.',
					'The policies form the basis of any security plan and define the requirements to be followed and rules that must be adhered to in different business areas. These documents provide, together with the implementation of appropriate technological tools, which all entities involved realize security measures in the form prescribed respecting the mandatory regulations and contributing to the security company.',
				],
			},
		}
	},
}
</script>

<style></style>
