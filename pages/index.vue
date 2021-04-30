<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<text-section
			:title="text_section.title"
			:paragraphs="text_section.paragraphs"
			:wrapper="wrapper"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import TextSection from '~/components/sections/TextSection.vue'
export default {
	components: {
		MainSection,
		TextSection,
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
						text: "Let's begin",
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
			text_section: {
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
