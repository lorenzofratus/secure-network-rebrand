<template>
	<section
		class="alt-section wave-before wave-after wave-concave-alt wave-convex-alt"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<div class="buttons">
				<button-component
					v-for="(btn, index) in buttons"
					:key="'filter-button-' + index + '-' + wrapper"
					:btn-path="btn.path"
					:btn-text="btn.text"
					:btn-class="btn.class"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonComponent from '../items/ButtonComponent.vue'
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
}
</script>

<style scoped></style>