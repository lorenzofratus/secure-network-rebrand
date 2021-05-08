.
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
		<image-component
			:title="image_component_section1.title"
			:description="image_component_section1.description"
			:img="image_component_section1.img"
			:button="image_component_section1.button"
			:wrapper="wrapper"
		/>
		<image-component
			:title="image_component_section2.title"
			:description="image_component_section2.description"
			:img="image_component_section2.img"
			:button="image_component_section2.button"
			:wrapper="wrapper"
		/>
		<image-component
			:title="image_component_section3.title"
			:description="image_component_section3.description"
			:img="image_component_section3.img"
			:button="image_component_section3.button"
			:wrapper="wrapper"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import ImageComponent from '~/components/items/ImageComponent.vue'
export default {
	components: { MainSection, AltSection, ImageComponent },
	layout: 'default',
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
			image_component_section1: {
				title: 'Name of the Area',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam.',
				img: '/images/covers/areas/enterprise-security.svg',
				button: {
					class: 'secondary',
					text: 'Read More',
					path: '/',
				},
			},
			image_component_section2: {
				title: 'Name of the Area',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam.',
				img: '/images/covers/areas/legal-advice.svg',
				button: {
					class: 'secondary',
					text: 'Read More',
					path: '/',
				},
			},
			image_component_section3: {
				title: 'Name of the Area',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam.',
				img: '/images/covers/areas/training.svg',
				button: {
					class: 'secondary',
					text: 'Read More',
					path: '/',
				},
			},
		}
	},
}
</script>

<style></style>
