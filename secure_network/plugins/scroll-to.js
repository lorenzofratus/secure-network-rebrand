export default (context, inject) => {
	const scrollTo = (event) => {
		const anchor = event.target.closest('a')
		const target = document.querySelector(anchor.hash)
		const bias = +anchor.getAttribute('data-offset') || 0
		if (!target) return

		event.preventDefault()

		target.focus()
		if (!target.matches(':focus')) {
			// const child = target.querySelector(
			// 	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			// )
			// if (child) {
			// 	child.focus()
			// } else {
			// 	target.setAttribute('tabindex', '0')
			// 	target.focus()
			// }
			target.setAttribute('tabindex', '0')
			target.focus()
		}
		const offset = target.offsetTop + bias
		window.scrollTo({ top: offset, behavior: 'smooth' })
	}
	inject('scrollTo', scrollTo)

	context.$scrollTo = scrollTo
}
