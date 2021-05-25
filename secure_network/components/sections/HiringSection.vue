<template>
	<!-- Section with static content repeated in multiple pages -->
	<alt-section
		:title="alt_section.title"
		:paragraphs="alt_section.paragraphs"
		:wrapper="wrapper"
		:button="alt_section.button"
		:centered="alt_section.centered"
	/>
</template>

<script>
import AltSection from '~/components/sections/AltSection.vue'

export default {
	components: {
		AltSection,
	},
	props: {
		wrapper: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			alt_section: {
				title: 'We are hiring!',
				paragraphs: ['Come hack with us!'],
				button: {
					class: 'primary',
					text: 'Contact Us',
					path: '/contacts',
				},
				centered: true,
			},
		}
	},
}
</script>

<style scoped></style>
