<!--
 * Copyright (c) 2021
 *
 * An AltSection is a section which contains a title, an optional set of paragraphs and an 
 * optional button. It is used in almost all pages to give a description of the context.
 *
 * @prop title: title of the section.
 * @prop paragraphs: array of text paragraphs shown within the component. It is used this approach for graphical purposes.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop containsLink: boolen flag used to enable or disable the v-html directive, to reduce the exposure windows of the directive.
 * @prop button: optional button object to be used for the instantiation of a ButtonComponent.
 * @prop centered: boolen flag used to determine whether or not the text must be centered.
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
			<!-- v-html directive is highly insecure but was the cleanest way to display external links used in the article page.
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
