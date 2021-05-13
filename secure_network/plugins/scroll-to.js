export default (context, inject) => {
	const scrollTo = (target, bias = 0) => {
		const offset = target.offsetTop + bias
		window.scrollTo({ top: offset, behavior: 'smooth' })
		target.focus()
		if (!target.matches(':focus')) {
			target.setAttribute('tabindex', '-1')
			target.focus()
		}
	}
	inject('scrollTo', scrollTo)

	context.$scrollTo = scrollTo
}
