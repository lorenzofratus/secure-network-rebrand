export default (context, inject) => {
	const scrollTo = (target, bias = 0) => {
		target.focus()
		if (!target.matches(':focus')) {
			const child = target.querySelector(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
			child.focus()
			// target.setAttribute('tabindex', '0')
			// target.focus()
		}
		const offset = target.offsetTop + bias
		window.scrollTo({ top: offset, behavior: 'smooth' })
	}
	inject('scrollTo', scrollTo)

	context.$scrollTo = scrollTo
}
