<!--
 * Copyright (c) 2021
 *
 * A ServiceCard is used to show syntetized information about a given service.
 *
 * @prop object: the service object whose preview must be displayed.
 * @prop type: used to append a different label to the displayed button. Introduced to increase SEO.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="card item" :class="{ highlighted: object.isReference }">
		<!-- Checks if "img" is an image (path including '/') or an icon (simple text) -->
		<img
			v-if="object.img.includes('/')"
			:src="object.img"
			alt=""
			class="image"
		/>
		<span v-else class="icon material-icons">{{ object.img }}</span>
		<div class="text">
			<span v-if="object.isReference" class="h4 tag">Reference for</span>
			<span v-if="object.tag" class="h4 tag">{{ object.tag }}</span>
			<h3 class="spacer">{{ object.name }}</h3>
			<p class="centered-text">
				{{ abstract }}
			</p>
		</div>
		<button-component
			:btn-path="object.path"
			:btn-text="'Explore ' + type"
			btn-class="secondary"
		/>
	</div>
</template>

<script>
import ButtonComponent from '~/components/items/ButtonComponent.vue'
export default {
	components: { ButtonComponent },
	props: {
		object: {
			type: Object,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: '',
		},
	},
	computed: {
		// Simple method that cuts the paragraph to "count" words and adds ellipsis
		abstract() {
			const count = 15
			let words = this.object.text.split(/\s|\n/)
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
	display: block;
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
