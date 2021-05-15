<template>
	<div>
		<the-header />
		<Nuxt />
		<the-footer />
	</div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
	components: {
		TheHeader,
		TheFooter,
	},
	mounted() {
		document
			.querySelectorAll('a[href*="#"]:not(a[href="#"]):not(a[href="#0"])')
			.forEach((anchor) =>
				anchor.addEventListener('click', this.scrollTo)
			)
	},
	methods: {
		scrollTo(event) {
			const anchor = event.target.closest('a')
			const target = document.querySelector(anchor.hash)
			if (!target) return
			event.preventDefault()

			this.$scrollTo(target, +anchor.getAttribute('data-offset') || 0)
		},
	},
}
</script>
<style scoped></style>
