<!--
 * Copyright (c) 2021
 *
 * A GridSection is a section which allow to visualize cards of different types.
 * It has a wide usage within the website in order to show all previews of a given
 * collection of elements.
 *
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop small: used to modify the minimum width of the columns of the grid.
 * @prop wide: used to modify the maximum width of the grid.
 * @prop title: title of the section.
 * @prop child: string used to set the :is property of the <component> element. This allow to use the same section for each type of inner component.
 * @prop elements: array of element object whose preview will be displayed.
 * @prop type: used to append a different label to the displayed button. Introduced to increase SEO.
 * @prop button: optional button object to be used for the instantiation of a ButtonComponent. 
 * @prop alt: used to define if the section must have the default or the alternative style.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<section
		:class="{
			'alt-section': alt,
			'wave-before': alt,
			'wave-after': alt,
			'wave-convex-alt': alt,
			'wave-concave-alt': alt,
		}"
	>
		<title-component v-if="title != ''" :title="title" />
		<div
			class="content grid"
			:class="{ small: small, wide: wide, 'with-button': button }"
		>
			<!-- This component can be any card, depending on the child prop -->
			<component
				:is="child"
				v-for="(element, index) in elements"
				:key="'element-' + index + '-' + wrapper"
				:object="element"
				:type="type"
			/>
		</div>
		<button-component
			v-if="button"
			:btn-class="button.class"
			:btn-text="button.text"
			:btn-path="button.path"
		/>
	</section>
</template>

<script>
import TitleComponent from '~/components/items/TitleComponent.vue'
import ArticleCard from '~/components/cards/ArticleCard.vue'
import PersonCard from '~/components/cards/PersonCard.vue'
import ServiceCard from '~/components/cards/ServiceCard.vue'
import ThreatCard from '~/components/cards/ThreatCard.vue'
import ButtonComponent from '~/components/items/ButtonComponent.vue'
export default {
	components: {
		TitleComponent,
		ArticleCard,
		PersonCard,
		ServiceCard,
		ThreatCard,
		ButtonComponent,
	},
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		small: {
			type: Boolean,
			required: false,
			default: false,
		},
		wide: {
			type: Boolean,
			required: false,
			default: false,
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
		child: {
			type: String,
			required: true,
		},
		elements: {
			type: Array,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: '',
		},
		button: {
			type: Object,
			required: false,
			default() {
				return null
			},
		},
		alt: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>

<style scoped>
.grid.with-button {
	margin-bottom: 4em;
}
</style>
