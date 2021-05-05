<template>
	<div class="card service">
		<img v-if="img.includes('/')" :src="img" class="image" />
		<span v-else class="icon material-icons">{{ img }}</span>
		<div class="text">
			<h3 class="spacer">{{ title }}</h3>
			<p class="centered-text">
				{{ abstract }}
			</p>
		</div>
		<button-component
			:btn_path="path"
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
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		img: {
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
	computed: {
		abstract() {
			let words = this.text.split(/\s|\n/)
			words = words.splice(0, 15)
			return words.join(' ') + ' ...'
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
.service .image {
	height: 8em;
	margin: 0 auto;
}
.service .icon {
	font-size: 60px;
}
.service .text {
	text-align: left;
	flex-grow: 1;
	margin-bottom: 1em;
}

.centered-text {
	text-align: center;
}
</style>
