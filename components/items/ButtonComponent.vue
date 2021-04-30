<template>
	<nuxt-link :to="button.path">
		<div :class="'button ' + button.class">
			{{ button.text }}
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		button: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
.button {
	font-size: var(--btn-font-size);
	font-weight: var(--btn-font-weight);
	color: var(--background);
	text-align: center;
	width: fit-content;
	margin: 0 auto;
	padding: 1em 1.5em;
	border-radius: 0.5em;
	cursor: pointer;
	transition-duration: 0.35s;
	transition-timing-function: ease-in-out;
	transition-property: box-shadow, color, background-color;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.button.primary {
	background-color: var(--primary-color);
}
.button.secondary {
	background-color: var(--dark-color);
}
.button.outlined {
	position: relative;
	color: var(--primary-color);
}
.button.outlined::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: var(--line-weight) solid var(--primary-color);
	border-radius: 0.5em;
}
.button:hover,
.button:focus {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
