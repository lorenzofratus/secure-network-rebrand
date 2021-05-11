<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<div class="grid small content">
			<circle-card
				v-for="(item, index) in people"
				:key="'circle-card-' + index + '-' + wrapper"
				:img="item.img"
				:name="item.name"
				:surname="item.surname"
				:path="item.path"
			/>
		</div>
	</section>
</template>

<script>
import CircleCard from '~/components/items/CircleCard.vue'
import TitleComponent from '~/components/items/TitleComponent.vue'
export default {
	components: { CircleCard, TitleComponent },
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
		people: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style></style>
