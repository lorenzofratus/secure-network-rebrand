<!--
 * Copyright (c) 2021
 *
 * A FilterSection is a section which allow the user to filter articles by type. 
 * It contains one button component to see all the articles and one button component 
 * for each type of article present.
 *
 * @prop title: title of the section.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop buttons: array of button objects to be used for the instantiation of at most 3 ButtonComponents.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<section
		class="
			alt-section
			wave-before wave-after wave-concave-alt wave-convex-alt
		"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<div class="buttons">
				<!-- Buttons used to filter things dynamically, it emits a filter event with the index of the button clicked -->
				<!-- The active filter has a button with the primary style, otherwise it is outlined -->
				<button-component
					v-for="(btn, index) in buttons"
					:key="'filter-button-' + index + '-' + wrapper"
					:btn-path="btn.path"
					:btn-text="btn.text"
					:btn-class="
						'outlined' + (index == activeFilter ? ' primary' : '')
					"
					:data-index="index"
					@click="checkFilter"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonComponent from '~/components/items/ButtonComponent.vue'
export default {
	components: { ButtonComponent },
	props: {
		title: {
			type: String,
			required: true,
		},
		wrapper: {
			type: String,
			required: true,
		},
		buttons: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			activeFilter: 0,
		}
	},
	methods: {
		// Gets the index of the button that has been clicked and emits a filter event only if it was not already the active one
		checkFilter(e) {
			const index = e.target.closest('button').getAttribute('data-index')
			if (this.activeFilter !== index) {
				this.activeFilter = index
				this.$emit('filter', index)
			}
		},
	},
}
</script>

<style scoped></style>
