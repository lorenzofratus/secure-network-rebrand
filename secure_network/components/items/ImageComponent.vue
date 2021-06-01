<!--
 * Copyright (c) 2021
 *
 * An ImageComponent is made up of an image, a text description and a ButtonComponent; it is used to show syntetized information about a person or an area.
 *
 * @prop title: title of the component.
 * @prop tag: used to highlight specific properties of the given element.
 * @prop type: used to append a different label to the displayed button. Introduced to increase SEO.
 * @prop text: text displayed within the component.
 * @prop btnPath: path passed to the embedded ButtonComponent.
 * @prop img: url of the displayed image.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop rounded: used to denote whether or not the image should be rounded.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<span class="sub-section">
		<div class="content">
			<!-- The tag prop contains a string that is displayed above the title to add some info -->
			<span v-if="tag != ''" class="h4 tag">{{ tag }}</span>
			<h2 class="spacer spacer-small">{{ title }}</h2>
			<p>{{ abstract }}</p>
			<button-component
				:btn-path="btnPath"
				:btn-text="'Discover ' + type"
				btn-class="secondary"
			/>
		</div>
		<img
			:src="img"
			class="cover"
			:alt="title"
			:class="{ rounded: rounded }"
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
		// Used to highlight specific properties of the given element
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
		rounded: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		// Simple method that cuts the paragraph to "count" words and adds ellipsis
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
	display: block;
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
