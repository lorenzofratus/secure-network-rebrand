<template>
	<div>
		<image-component
			v-for="(item, index) in areas"
			:key="'area-card-' + index + '-' + wrapper"
			:title="item.name"
			:text="item.text"
			:img="item.img"
			:btn-path="item.path"
			:wrapper="wrapper"
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
		areas: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style></style>
