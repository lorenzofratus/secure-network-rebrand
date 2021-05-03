<template>
	<div class="header">
		<div class="content">
			<h3>{{ title }}</h3>
			<div class="buttons">
				<button-component :button="button" />
			</div>
		</div>
		<img :src="img.src" :class="img.class" />
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
		buttons: {
			type: Array,
			required: true,
		},
		img: {
			required: true,
			type: Object,
		},
		wrapper: {
			type: String,
			required: true,
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
.header .content {
	min-width: 45%;
}

.alt-section h3::after {
	content: '';
	position: absolute;
	bottom: -1em;
	left: 50%;
	transform: translateX(-50%);
	width: var(--divider-width);
	height: var(--line-weight);
	border-radius: var(--line-radius);
	background-color: var(--primary-color);
}
</style>
