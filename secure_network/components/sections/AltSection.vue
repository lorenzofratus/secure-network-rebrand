<template>
	<section
		class="alt-section wave-before wave-after wave-concave-alt wave-convex-alt"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<div v-if="paragraphs && !containsLink" class="paragraphs">
				<p
					v-for="(p, index) in paragraphs"
					:key="'paragraph-' + index + '-' + wrapper"
					:class="{ centered: centered }"
				>
					{{ p }}
				</p>
			</div>
			<div v-if="paragraphs && containsLink" class="paragraphs">
				<p
					v-for="(p, index) in paragraphs"
					:key="'paragraph-' + index + '-' + wrapper"
					:class="{ centered: centered }"
					v-html="p"
				></p>
			</div>
			<div v-if="button.text">
				<button-component
					:btn-class="button.class"
					:btn-text="button.text"
					:btn-path="button.path"
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
		paragraphs: {
			type: Array,
			required: false,
			default() {
				return []
			},
		},
		wrapper: {
			type: String,
			required: true,
		},
		containsLink: {
			type: Boolean,
			required: false,
			default: false,
		},
		button: {
			type: Object,
			required: false,
			default() {
				return { text: '' }
			},
		},
		centered: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>

<style scoped></style>
