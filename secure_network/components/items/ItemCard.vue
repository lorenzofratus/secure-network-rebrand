<template>
	<div class="card item">
		<img v-if="img.includes('/')" :src="img" class="image" />
		<span v-else class="icon material-icons">{{ img }}</span>
		<div class="text">
			<h3 class="spacer">{{ title }}</h3>
			<p class="centered-text">
				{{ abstract }}
			</p>
		</div>
		<button-component
			:btn-path="path"
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
		highlighted: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {
			btnText: 'Read more',
			btnClass: 'secondary',
		}
	},
	computed: {
		abstract() {
			const count = 15
			let words = this.text.split(/\s|\n/)
			if (words.length <= count) return words.join(' ')
			words = words.splice(0, count)
			return words.join(' ') + ' ...'
		},
	},
}
</script>

<style scoped>
.item {
	display: flex;
	flex-direction: column;
	text-align: center;
}
.item .image {
	height: 8em;
	margin: 0 auto 1em;
}
.item .icon {
	font-size: 60px;
	margin: 0 0 0.25em;
}
.item .text {
	text-align: left;
	flex-grow: 1;
	margin-bottom: 1em;
}

.centered-text {
	text-align: center;
}
</style>
