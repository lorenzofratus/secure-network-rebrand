<!--
 * Copyright (c) 2021
 *
 * A TitleComponent is used to add a simple title and optionally a paragraph to a more complex element.
 *
 * @prop title: title of shown by the component.
 * @prop text: optional text shown by the component.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="title-section content">
		<h2 class="spacer" :class="{ 'big-margin': text == '' }">
			{{ title }}
		</h2>
		<p v-if="text" class="centered">
			{{ text }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: false,
			default: '',
		},
	},
}
</script>

<style></style>
