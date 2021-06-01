<!--
 * Copyright (c) 2021
 *
 * An ImageComponentSection is a section which lists a group of ImageComponents.
 * It can be used either to display Areas or People which have a significant role
 * within the given context.
 *
 * @prop title: title of the component.
 * @prop type: used to append a different label to the displayed button. Introduced to increase SEO.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop components: array of objects, each of which allow the initialization of a different ImageComponent.
 * @prop rounded: used to denote whether or not the image should be rounded.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<!-- In title we check if item has a surname because this component can also be used with people -->
		<image-component
			v-for="(item, index) in components"
			:key="'image-component-' + index + '-' + wrapper"
			:title="item.surname ? item.name + ' ' + item.surname : item.name"
			:tag="item.tag"
			:type="type"
			:text="item.text"
			:img="item.img"
			:btn-path="item.path"
			:wrapper="wrapper"
			:rounded="rounded"
		/>
	</section>
</template>

<script>
import ImageComponent from '~/components/items/ImageComponent.vue'
import TitleComponent from '~/components/items/TitleComponent.vue'
export default {
	components: { ImageComponent, TitleComponent },
	props: {
		title: {
			type: String,
			required: false,
			default: '',
		},
		type: {
			type: String,
			required: false,
			default: '',
		},
		wrapper: {
			type: String,
			required: true,
		},
		components: {
			type: Array,
			required: true,
		},
		rounded: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>

<style></style>
