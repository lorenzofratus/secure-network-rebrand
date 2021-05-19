<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<div class="content grid">
			<box-card
				v-for="(box, index) in boxes"
				:key="'box-' + index + '-' + wrapper"
				:btn-path="box.path"
				:icon="box.icon"
				type="resource"
				:title="box.title"
				:text="box.name"
				:card-class="box.type + '-box'"
			/>
		</div>
	</section>
</template>

<script>
import BoxCard from '../items/BoxCard.vue'
import TitleComponent from '~/components/items/TitleComponent.vue'
export default {
	components: { BoxCard, TitleComponent },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		boxes: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
	},
}
</script>

<style scoped></style>
