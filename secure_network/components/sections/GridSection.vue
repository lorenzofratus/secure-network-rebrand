<!--
 * Copyright (c) 2021
 *
 * A GridSection is a section which allow to visualize cards of different types.
 * It has a wide usage within the website in order to show all previews of a given
 * collection of elements.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<div
			class="content grid"
			:class="{ small: small, 'with-button': button }"
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
import ResourceCard from '~/components/cards/ResourceCard.vue'
import PersonCard from '~/components/cards/PersonCard.vue'
import ServiceCard from '~/components/cards/ServiceCard.vue'
import ThreatCard from '~/components/cards/ThreatCard.vue'
import ButtonComponent from '~/components/items/ButtonComponent.vue'
export default {
	components: {
		TitleComponent,
		ResourceCard,
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
	},
}
</script>

<style scoped>
.grid.with-button {
	margin-bottom: 4em;
}
</style>
