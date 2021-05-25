<!--
 * Copyright (c) 2021
 *
 * A ResourceCard is used to show syntetized information about a given resource.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="card box" :class="object.type + '-box'">
		<span class="heading">
			<span class="icon material-icons">{{ object.icon }}</span>
			<h3 class="title">{{ object.title }}</h3>
		</span>
		<p class="text">
			{{ abstract }}
		</p>
		<button-component
			:btn-path="object.path"
			:btn-text="'Read ' + type"
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
			let words = this.object.name.split(/\s|\n/)
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
