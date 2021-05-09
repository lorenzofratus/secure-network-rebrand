<template>
	<div class="sub-section">
		<div class="content">
			<h2 class="spacer spacer-small">{{ title }}</h2>
			<p>{{ abstract }}</p>
			<button-component
				:btn-class="btnClass"
				:btn-path="btnPath"
				:btn-text="btnText"
			/>
		</div>
		<img :src="img" class="cover" />
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
		text: {
			type: String,
			required: true,
		},
		btnPath: {
			type: String,
			required: false,
			default: '',
		},
		img: {
			required: true,
			type: String,
		},
		wrapper: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			btnClass: 'secondary',
			btnText: 'Read More',
		}
	},
	computed: {
		abstract() {
			const count = 25
			let words = this.text.split(/\s|\n/)
			if (words.length <= count) return words.join(' ')
			words = words.splice(0, count)
			return words.join(' ') + ' ...'
		},
	},
}
</script>

<style scoped>
.sub-section {
	max-width: var(--page);
	margin: 10em auto;
	padding: 0 var(--padding);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
}
.sub-section > * {
	flex: 0 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}
.sub-section .buttons {
	justify-content: start;
}
.sub-section .cover {
	display: block;
	padding: 5%;
	box-sizing: border-box;
	height: auto;
	width: 100%;
}
.sub-section .content {
	min-width: 50%;
}

.sub-section:nth-child(even) {
	text-align: right;
	flex-direction: row;
}
.sub-section:nth-child(odd) {
	text-align: left;
	flex-direction: row-reverse;
}
.sub-section:nth-child(even) /deep/ .button,
.sub-section:nth-child(even) .spacer.spacer-small::after {
	margin: 0 0 0 auto;
}
.sub-section:nth-child(odd) /deep/ .button,
.sub-section:nth-child(odd) .spacer.spacer-small::after {
	margin: 0 auto 0 0;
}

@media screen and (max-width: 785px) {
	.sub-section {
		text-align: left;
	}
}
</style>
