<template>
	<div class="container">
		<main-section
			:buttons="buttons"
			:img="img"
			:title="title"
			:subtitle="subtitle"
		></main-section>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import Cover from '~/components/images/Cover.vue'
export default {
	components: {
		MainSection,
	},
	layout: 'default',
	data() {
		return {
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
				src: Cover,
				class: 'cover',
			},
		}
	},
}
</script>

<style></style>
