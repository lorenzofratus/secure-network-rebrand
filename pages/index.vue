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
		<services-section
			:wrapper="wrapper"
			:services="services_section.services"
		/>
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
					src: '/images/cover.svg',
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
			services_section: {
				services: [
					{
						title: 'Application Security',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'smartphone',
						button: {
							class: 'secondary',
							text: 'See More',
							path: '/',
						},
					},
					{
						title: 'Network Security',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'wifi',
						button: {
							class: 'secondary',
							text: 'See More',
							path: '/',
						},
					},
					{
						title: 'Code Review',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'code',
						button: {
							class: 'secondary',
							text: 'See More',
							path: '/',
						},
					},
					{
						title: 'Automotive Security',
						text:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
						icon: 'precision_manufacturing',
						button: {
							class: 'secondary',
							text: 'See More',
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
