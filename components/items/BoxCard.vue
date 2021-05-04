<template>
	<div class="card service">
		<div class="card-header">
			<span class="icon material-icons">{{ icon }}</span>
			<h3 class="title">{{ title }}</h3>
		</div>
		<div class="text">
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

.service {
	display: flex;
	flex-direction: column;
	text-align: center;
}
.service .icon {
	font-size: 40px;
}
.service .title {
	text-align: left;
	/* margin: 0 0 0 1em; */
	margin: 0;
}
.service .text {
	text-align: left;
	margin: 0 0 1em;
	flex-grow: 1;
}

.card-header {
	display: flex;
	/* display: inline-block; */
	/* display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fill, 50px); */
	/* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
	/* align-items: center; */
}
/* .card-header > * {
	float: left;
} */
</style>
