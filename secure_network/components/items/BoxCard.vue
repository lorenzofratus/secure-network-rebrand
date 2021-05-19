<template>
	<div class="card box" :class="cardClass">
		<span class="heading">
			<span class="icon material-icons">{{ icon }}</span>
			<h3 class="title">{{ title }}</h3>
		</span>
		<p class="text">
			{{ abstract }}
		</p>
		<button-component
			:btn-path="btnPath"
			:btn-class="btnClass"
			:btn-text="btnText + ' ' + type"
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
		type: {
			type: String,
			required: false,
			default: '',
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
		cardClass: {
			type: String,
			required: false,
			default: '',
		},
	},
	data() {
		return {
			btnText: 'Read',
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
.box {
	display: flex;
	flex-direction: column;
	text-align: left;
}
.box .heading {
	display: flex;
	align-items: center;
	margin: 0 0 1em;
}
.box .icon {
	font-size: 40px;
	margin: 0 0.35em 0.1em 0;
}
.box .title {
	margin: 0;
	text-transform: capitalize;
}
.box .text {
	margin: 0 0 1.5em;
	flex-grow: 1;
}
</style>
