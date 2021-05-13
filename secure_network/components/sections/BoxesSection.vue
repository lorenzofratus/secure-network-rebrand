<template>
	<section>
		<div class="content grid">
			<box-card
				v-for="(box, index) in boxes"
				:key="'box-' + index + '-' + wrapper"
				:btn-path="box.btnPath"
				:icon="box.icon"
				:title="box.title"
				:text="box.text"
				:card-class="box.class"
			/>
		</div>
	</section>
</template>

<script>
import BoxCard from '../items/BoxCard.vue'

export default {
	components: { BoxCard },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		boxes: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped></style>
