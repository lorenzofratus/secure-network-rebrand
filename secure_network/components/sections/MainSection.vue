<template>
	<div class="header">
		<div class="content">
			<h1 class="title">{{ title }}</h1>
			<h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
			<div class="buttons">
				<button-component
					v-for="(button, index) in buttons"
					:key="'main-section-button-' + index + '-' + wrapper"
					:btn-path="button.path"
					:btn-class="button.class"
					:btn-text="button.text"
				/>
			</div>
		</div>
		<img :src="img" class="cover" :class="{ rounded: isRounded }" />
	</div>
</template>

<script>
import ButtonComponent from '~/components/items/ButtonComponent'
export default {
	components: {
		ButtonComponent,
	},
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
			type: String,
		},
		wrapper: {
			type: String,
			required: true,
		},
		isRounded: {
			type: Boolean,
			required: false,
			default() {
				return false
			},
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
/* .header .title,
.header .subtitle {
	
} */

.header .title {
	text-transform: capitalize;
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

.header .content {
	min-width: 50%;
}

.header .rounded {
	border-radius: 50%;
}
</style>
