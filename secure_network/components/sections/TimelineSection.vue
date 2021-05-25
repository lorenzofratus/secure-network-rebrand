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
				:wrapper="wrapper"
				:year="year.year"
				:types="resourceTypes[year.year]"
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
	computed: {
		// Counts the resources of each type for each year
		resourceTypes() {
			const yearTypes = {}
			for (const year of this.years) {
				yearTypes[year.year] = [
					{
						name: 'news',
						count: year.news,
					},
					{
						name: 'research',
						count: year.research,
					},
				]
			}
			return yearTypes
		},
	},
}
</script>

<style scoped></style>
