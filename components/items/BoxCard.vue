<template>
	<div class="card service">
		<span class="icon material-icons">{{ icon }}</span>
		<h3 class="title spacer spacer-small">{{ title }}</h3>
		<p class="text">
			{{ text }}
		</p>
		<button-component
			:btn_path="btn_path"
			:btn_class="btn_class"
			:btn_text="btn_text"
		/>
	</div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
	components: { ButtonComponent },
	props: {
		icon: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		btn_path: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			btn_text: 'Read more',
			btn_class: 'secondary',
		}
	},
}
</script>

<style scoped>
.card {
	padding: 2em;
	border-radius: 1em;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.card .icon {
	color: var(--primary-color);
}

.service {
	display: flex;
	flex-direction: column;
	text-align: left;
}
.service .icon {
	font-size: 40px;
}
.service .text {
	margin: 0 0 1em;
	flex-grow: 1;
}
</style>
