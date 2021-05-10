<template>
	<div>
		<image-component
			v-for="(item, index) in components"
			:key="'area-card-' + index + '-' + wrapper"
			:title="item.surname ? item.name + ' ' + item.surname : item.name"
			:text="item.text"
			:img="item.img"
			:btn-path="item.path"
			:wrapper="wrapper"
			:is-rounded="isRounded"
		/>
	</div>
</template>

<script>
import ImageComponent from '~/components/items/ImageComponent.vue'
export default {
	components: { ImageComponent },
	props: {
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
