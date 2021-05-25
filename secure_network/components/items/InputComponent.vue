<!--
 * Copyright (c) 2021
 *
 * An InputComponent is used to model form sub-sections.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="field">
		<!-- We can have an input or a textarea based on the type prop -->
		<textarea
			v-if="type === 'text-area'"
			:id="name"
			class="input"
			:name="name"
			:placeholder="placeholder"
			required
		></textarea>
		<input
			v-else
			:id="name"
			class="input"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			required
		/>
		<label class="label" :for="name">{{ label }}</label>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.field {
	position: relative;
}
.field .input {
	position: relative;
	width: 100%;
	box-sizing: border-box;
	padding: 0.75em 1em 0.5em;
	background-color: var(--background);
	border: none;
	border-bottom: var(--line-weight) solid var(--disabled-color);
	border-radius: 0.5em 0.5em 0 0;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
	transition: 0.35s ease-in-out;
	transition-property: box-shadow, border-color;
}
.field .input:hover {
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
.field .input:focus {
	outline: none;
	border-color: var(--primary-color);
}
.field .input.error {
	border-color: var(--error-color);
}
.field .input::placeholder {
	opacity: 0;
	transition: 0.35s opacity ease-in-out;
}
.field .input:focus::placeholder {
	opacity: 1;
}
.field textarea {
	display: block;
	resize: none;
	height: 7em;
}

.field .label {
	position: absolute;
	z-index: 1;
	top: 0.75em;
	left: 1em;
	color: var(--disabled-color);
	transform-origin: bottom left;
	transform: translate(0, 0) scale(1);
	transition: 0.35s ease-in-out;
	transition-property: transform, color;
}
.field .input:focus ~ .label {
	color: var(--primary-color);
}
.field .input:focus ~ .label,
.field .input:not(:placeholder-shown) ~ .label {
	transform: translate(-0.5em, -2em) scale(0.75);
}
.field .input.error ~ .label {
	color: var(--error-color);
}
</style>
