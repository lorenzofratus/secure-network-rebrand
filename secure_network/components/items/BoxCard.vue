<template>
	<div class="card service">
		<span class="icon material-icons">{{ icon }}</span>
		<h3 class="title spacer spacer-small">{{ title }}</h3>
		<p class="text">
			{{ text }}
		</p>
		<button-component
			:btn-path="btnPath"
			:btn-class="btnClass"
			:btn-text="btnText"
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
		btnPath: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			btnText: 'Read more',
			btnClass: 'secondary',
		}
	},
}
</script>

<style scoped>
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
