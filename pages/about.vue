<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:wrapper="wrapper"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
export default {
	components: { MainSection },
	data() {
		return {
			wrapper: 'About',
			main_section: {
				title: 'About us',
				buttons: [
					{
						class: 'primary',
						text: 'The founders',
						path: '/founders',
					},
					{
						class: 'secondary',
						text: 'TBD',
						path: '/',
					},
				],
				img: {
					src: '/images/covers/about.svg',
					class: 'cover',
				},
			},
		}
	},
}
</script>

<style></style>
