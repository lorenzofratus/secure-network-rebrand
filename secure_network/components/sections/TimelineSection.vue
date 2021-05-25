<template>
	<section
		class="
			alt-section
			wave-before wave-after wave-concave-alt wave-convex-alt
		"
	>
		<div class="content">
			<h2 class="spacer">Select Any Year</h2>
			<timeline-component
				v-for="(year, index) in years"
				:key="'timeline-section-item-' + index + '-' + wrapper"
				:year="year.year"
				:types="resourceTypes(year)"
				:path="year.path"
			/>
		</div>
	</section>
</template>

<script>
import TimelineComponent from '~/components/items/TimelineComponent'
export default {
	components: {
		TimelineComponent,
	},
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		years: {
			type: Array,
			required: true,
		},
	},
	methods: {
		resourceTypes(year) {
			return [
				{
					name: 'news',
					count: year.news,
				},
				{
					name: 'research',
					count: year.research,
				},
			]
		},
	},
}
</script>

<style scoped></style>
