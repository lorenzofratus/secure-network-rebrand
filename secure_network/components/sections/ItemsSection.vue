<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
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
	</section>
</template>

<script>
import ItemCard from '~/components/items/ItemCard.vue'
import TitleComponent from '~/components/items/TitleComponent.vue'

export default {
	components: { ItemCard, TitleComponent },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped></style>
