<template>
	<div class="card service">
		<span class="icon material-icons">{{ icon }}</span>
		<div class="text">
			<h3 class="spacer">{{ title }}</h3>
			<p>
				{{ text }}
			</p>
		</div>
		<button-component :button="button" />
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
		button: {
			type: Object,
			required: true,
		},
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
.card.interactive {
	transition: 0.35s box-shadow ease-in-out;
}
.card.interactive:hover,
.card.interactive:focus {
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.service {
	display: flex;
	flex-direction: column;
	text-align: center;
}
.service .icon {
	font-size: 60px;
}
.service .text {
	text-align: left;
	flex-grow: 1;
	margin-bottom: 1em;
}
</style>
