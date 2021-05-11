<template>
	<div class="content">
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
			default() {
				return ''
			},
		},
	},
}
</script>

<style></style>
