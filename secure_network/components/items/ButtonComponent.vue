<!--
 * Copyright (c) 2021
 *
 * A ButtonComponent is a button which can be used both for navigation and as a click event generator.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<!-- We can have two types of ButtonComponent that only share the innerText so we decided to split them -->
	<!-- The first type is the simple button, it has no effect on routing and emits a click event -->
	<button
		v-if="btnPath == ''"
		class="button"
		:class="btnClass"
		@click="emitClick"
	>
		{{ btnText }}
	</button>
	<!-- The second type is a NuxtLink, it goes to another page or to the same page scrolling (if starting with '#') -->
	<nuxt-link v-else :to="btnPath" class="button" :class="btnClass">
		{{ btnText }}
	</nuxt-link>
</template>

<script>
export default {
	props: {
		btnPath: {
			type: String,
			required: false,
			default: '',
		},
		btnClass: {
			type: String,
			required: true,
		},
		btnText: {
			type: String,
			required: true,
		},
	},
	methods: {
		// Method used to emit the click event
		emitClick(e) {
			this.$emit('click', e)
		},
	},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
.buttons .button {
	width: auto;
	margin: 0;
}
button.button {
	border: none;
}
.button {
	display: block;
	font-size: var(--btn-font-size);
	font-weight: var(--btn-font-weight);
	color: var(--background);
	text-align: center;
	width: fit-content;
	margin: 0 auto;
	padding: 0.75em 1.5em;
	border-radius: 0.5em;
	cursor: pointer;
	transition-duration: 0.35s;
	transition-timing-function: ease-in-out;
	transition-property: box-shadow, color, background-color;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	text-transform: capitalize;
}
.button.secondary {
	background-color: var(--dark-color);
}
.button.outlined {
	font-size: 1.2em;
	position: relative;
	color: var(--primary-color);
	background-color: var(--alt-background);
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
.button.primary {
	color: var(--background);
	background-color: var(--primary-color);
}
.button:hover,
.button:focus {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
