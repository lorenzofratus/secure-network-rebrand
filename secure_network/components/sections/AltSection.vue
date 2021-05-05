<template>
	<section class="alt-section wave-before wave-after">
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<div v-if="paragraphs" class="paragraphs">
				<p
					v-for="(p, index) in paragraphs"
					:key="'paragraph-' + index + '-' + wrapper"
				>
					{{ p }}
				</p>
			</div>
			<div v-if="button.text">
				<button-component
					:btn_class="button.class"
					:btn_text="btn.text"
					:btn_path="button.path"
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
		button: {
			type: Object,
			required: false,
			default() {
				return { text: '' }
			},
		},
	},
}
</script>

<style scoped>
.alt-section {
	position: relative;
	background-color: var(--alt-background);
	margin: var(--wave-height) 0;
	padding: var(--padding);
}

.alt-section::before {
	background-image: url('/waves/concave-alt.svg');
}
.alt-section::after {
	background-image: url('/waves/convex-alt.svg');
}

.alt-section .content {
	max-width: var(--content);
	margin: 0 auto;
}
</style>
