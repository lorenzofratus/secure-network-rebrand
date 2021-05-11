<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<image-component
			v-for="(item, index) in components"
			:key="'area-card-' + index + '-' + wrapper"
			:title="item.surname ? item.name + ' ' + item.surname : item.name"
			:tag="item.tag"
			:text="item.text"
			:img="item.img"
			:btn-path="item.path"
			:wrapper="wrapper"
			:is-rounded="isRounded"
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
		wrapper: {
			type: String,
			required: true,
		},
		components: {
			type: Array,
			required: true,
		},
		isRounded: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>

<style></style>
