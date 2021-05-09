<template>
	<div class="section">
		<div class="content grid">
			<item-card
				v-for="(item, index) in items"
				:key="'item-' + index + '-' + wrapper"
				:img="item.img"
				:title="item.name"
				:text="item.text"
				:path="item.path"
			/>
		</div>
	</div>
</template>

<script>
import ItemCard from '../items/ItemCard.vue'

export default {
	components: { ItemCard },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped></style>
