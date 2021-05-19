<template>
	<div class="card item" :class="{ highlighted: highlighted }">
		<img v-if="img.includes('/')" :src="img" alt="" class="image" />
		<span v-else class="icon material-icons">{{ img }}</span>
		<div class="text">
			<h4 v-if="highlighted" class="tag">Reference for</h4>
			<h3 class="spacer">{{ title }}</h3>
			<p class="centered-text">
				{{ abstract }}
			</p>
		</div>
		<button-component
			:btn-path="path"
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
		title: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: '',
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
			btnText: 'Explore',
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
.item.highlighted {
	background-color: var(--alt-background);
	border: var(--line-weight) solid var(--primary-color);
}
.item .image {
	height: 8em;
	margin: 0 auto 1em;
}
.item .icon {
	font-size: 60px;
	margin: 0 0 0.25em;
}
.item .tag {
	text-transform: uppercase;
	text-align: center;
	margin: 0.75em 0 0;
	color: var(--primary-color);
	font-weight: var(--btn-font-weight);
}
.item .tag ~ .spacer {
	margin-top: 0.25em;
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
