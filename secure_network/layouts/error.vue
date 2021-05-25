<!--
 * Copyright (c) 2021
 *
 * Error layout, used when somthing went wrong.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando  
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main-section
		:wrapper="wrapper"
		:title="error.statusCode == 404 ? not_found.title : generic_error.title"
		:subtitle="main_section.subtitle"
		:buttons="main_section.buttons"
		:img="error.statusCode == 404 ? not_found.img : generic_error.img"
		:show-breadcrumb="false"
	/>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
export default {
	components: { MainSection },
	props: {
		error: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			wrapper: 'Error',
			main_section: {
				subtitle: "Don't panic! We have more awesome content for you",
				buttons: [
					{
						class: 'primary',
						text: 'Back To Home',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts',
					},
				],
			},
			not_found: {
				title: 'Page not found',
				img: '/images/covers/not-found.svg',
			},
			generic_error: {
				title: 'Oops, Something went wrong',
				img: '/images/covers/error.svg',
			},
		}
	},
}
</script>

<style scoped></style>
