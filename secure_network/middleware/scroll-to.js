/*
 * Copyright (c) 2021
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */
const scrollTo = (hash) => {
	// Configure transition parameters
	const minBias = 64
	const duration = 800
	const easing = (t) => --t * t * t + 1

	// Get the element we want to scroll to
	const target = document.querySelector(hash)
	if (!target) return

	// Move the focus to the target element if focusable
	target.focus()
	// If not focusable, set tabindex to make it focusable and then focus it
	if (!target.matches(':focus')) {
		target.setAttribute('tabindex', '0')
		target.focus()
	}

	// Get the target style (compatible with different browsers)
	const style = target.currentStyle || window.getComputedStyle(target)
	// Compute the position to wich scroll (px)
	const bias = Math.max(parseInt(style.marginTop, 10), minBias)
	const offset = target.offsetTop - bias
	// Compute how much still needs to be scrolled (px)
	const startY = window.scrollY
	const difference = offset - startY
	// Register start time to monitor the duration and control the speed
	const startTime = performance.now()

	const step = () => {
		// Compute the amount of duration that has been consumed so far
		const progress = (performance.now() - startTime) / duration
		// Compute how much of the total difference the window will move on the next frame
		const amount = easing(progress)
		// Scroll
		window.scrollTo({ top: startY + amount * difference })
		// Manually schedule the next frame (allows smooth scrolling also on Safari)
		if (progress < 0.99) {
			window.requestAnimationFrame(step)
		}
	}

	step()
}

// Intercept every change of route to allow smooth scroll
export default function ({ route, redirect, from }) {
	console.log(route)
	const hash = route.hash
	if (!hash) return

	// Redirect to the same path, to remove the hash from the URL
	redirect({ path: route.path })
	if (from.name === route.name) {
		// Same page structural link, scroll immediately
		scrollTo(hash)
	} else {
		// Setting a timeout to account for the change of route
		setTimeout(() => {
			scrollTo(hash)
		}, 500)
	}
}
