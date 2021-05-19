<template>
	<span class="sub-section">
		<div class="content">
			<h3 v-if="tag != ''" class="h4 tag">{{ tag }}</h3>
			<h2 class="spacer spacer-small">{{ title }}</h2>
			<p>{{ abstract }}</p>
			<button-component
				:btn-class="btnClass"
				:btn-path="btnPath"
				:btn-text="btnText + ' ' + type"
			/>
		</div>
		<img
			:src="img"
			class="cover"
			:alt="title"
			:class="{ rounded: isRounded }"
		/>
	</span>
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
		tag: {
			type: String,
			required: false,
			default: '',
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
		isRounded: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {
			btnClass: 'secondary',
			btnText: 'Discover',
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
	display: block;
	max-width: var(--page);
	margin: 0 auto 2.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
}
.sub-section:last-child {
	margin-bottom: 0;
}
.sub-section > * {
	flex: 0 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}
.sub-section .content {
	margin: 1em 0;
}

.sub-section .tag {
	text-transform: uppercase;
	margin: 0;
	color: var(--primary-color);
	font-size: var(--btn-font-size);
	font-weight: var(--btn-font-weight);
}
.sub-section .tag ~ .spacer {
	margin-top: 0.25em;
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

.sub-section:nth-of-type(even) {
	text-align: right;
	flex-direction: row;
}
.sub-section:nth-of-type(odd) {
	text-align: left;
	flex-direction: row-reverse;
}
.sub-section:nth-of-type(even) /deep/ .button,
.sub-section:nth-of-type(even) .spacer.spacer-small::after {
	margin: 0 0 0 auto;
}
.sub-section:nth-of-type(odd) /deep/ .button,
.sub-section:nth-of-type(odd) .spacer.spacer-small::after {
	margin: 0 auto 0 0;
}

@media screen and (max-width: 785px) {
	.sub-section:nth-of-type(even) {
		text-align: left;
	}
	.sub-section:nth-of-type(even) /deep/ .button,
	.sub-section:nth-of-type(even) .spacer.spacer-small::after {
		margin: 0 auto 0 0;
	}
}

.sub-section .rounded {
	border-radius: 50%;
}
</style>
