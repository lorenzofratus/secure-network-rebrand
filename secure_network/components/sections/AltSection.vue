<template>
	<section
		class="
			alt-section
			wave-before wave-after wave-concave-alt wave-convex-alt
		"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<!-- v-html directive is highly insecure but was the cleanest way to display external links used in the resource page.
				 As v-html is needed only in that specific case, we preferred to use the containsLink prop to mitigate the vulnerability.
				 In this way we use it only when it is strictly necessary. -->
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
			<button-component
				v-if="button"
				:btn-class="button.class"
				:btn-text="button.text"
				:btn-path="button.path"
			/>
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
				return null
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
