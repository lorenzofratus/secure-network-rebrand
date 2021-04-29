<template>
	<div class="header">
		<div class="content">
			<h1>{{ title }}</h1>
			<h3>{{ subtitle }}</h3>
			<div class="buttons">
				<nuxt-link
					v-for="(button, index) in buttons"
					:key="'main-section-button-' + index + '-wrapper'"
					:class="'button ' + button.class"
					:to="button.path"
				>
					{{ button.text }}
				</nuxt-link>
			</div>
		</div>
		<component :is="img.src" :class="img.class" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: false,
			default: '',
		},
		buttons: {
			type: Array,
			required: true,
		},
		img: {
			required: true,
			type: Object,
		},
	},
}
</script>

<style scoped>
.header {
	min-height: 50vh;
	max-width: var(--page);
	margin: 4em auto;
	padding: 0 var(--padding);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
}
.header > * {
	flex: 0 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}
.header .buttons {
	justify-content: start;
}
.header .cover {
	display: block;
	padding: 5%;
	box-sizing: border-box;
	height: auto;
	width: 100%;
}
</style>
