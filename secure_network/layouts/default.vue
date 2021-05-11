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
			const target = document.querySelector(
				event.target.closest('a').hash
			)
			if (!target) return
			event.preventDefault()

			const offset = target.offsetTop
			window.scrollTo({ top: offset, behavior: 'smooth' })
			target.focus()
			if (!target.matches(':focus')) {
				target.setAttribute('tabindex', '-1')
				target.focus()
			}
		},
	},
}
</script>
<style scoped></style>
