<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<div class="content grid" :class="{ small: small }">
			<component
				:is="child"
				v-for="(elem, index) in elements"
				:key="'element-' + index + '-' + wrapper"
				:object="elem"
				:type="type"
			/>
		</div>
	</section>
</template>

<script>
import TitleComponent from '~/components/items/TitleComponent.vue'
import ResourceCard from '~/components/cards/ResourceCard.vue'
import PersonCard from '~/components/cards/PersonCard.vue'
import ServiceCard from '~/components/cards/ServiceCard.vue'
export default {
	components: { TitleComponent, ResourceCard, PersonCard, ServiceCard },
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
	},
}
</script>

<style></style>
