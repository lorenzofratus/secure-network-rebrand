/*
 * Copyright (c) 2021
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */
export default (context, inject) => {
	const scrollTo = (event) => {
		// Gets the element that started the event and the element we want to scroll to
		const anchor = event.target.closest('a')
		const target = document.querySelector(anchor.hash)
		const bias = +anchor.getAttribute('data-offset') || 0
		if (!target) return

		// Prevent navigation to avoid the hash in the URL
		event.preventDefault()

		// Move the focus to the target element if focusable
		target.focus()
		// If not focusable, set tabindex to make it focusable and then focus it
		if (!target.matches(':focus')) {
			target.setAttribute('tabindex', '0')
			target.focus()
		}

		// Scroll to the target element also considering the bias in pixels
		const offset = target.offsetTop + bias
		window.scrollTo({ top: offset, behavior: 'smooth' })
	}
	inject('scrollTo', scrollTo)

	context.$scrollTo = scrollTo
}
