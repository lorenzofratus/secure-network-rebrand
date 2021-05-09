<template>
	<section class="section">
		<div class="grid small content">
			<circle-card
				v-for="(item, index) in people"
				:key="'circle-card-' + index + '-' + wrapper"
				:img="item.img"
				:name="item.name"
				:surname="item.surname"
			/>
		</div>
	</section>
</template>

<script>
import CircleCard from '~/components/items/CircleCard.vue'
export default {
	components: { CircleCard },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		people: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style></style>
