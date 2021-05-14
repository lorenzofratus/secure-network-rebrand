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
		<image-components-section :components="areas" :wrapper="wrapper" />
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
export default {
	components: { MainSection, AltSection, ImageComponentsSection },
	layout: 'default',
	async asyncData({ $axios }) {
		// fetch data from the api server
		const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
		const areas = data
		return {
			areas,
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
						text: 'Discover',
						path: '/',
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
				title: 'Lorem Ipsum',
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
			},
		}
	},
}
</script>

<style></style>
