<!--
 * Copyright (c) 2021
 *
 * A TimelineSection is the section which shows a list of TimelineComponents.
 *
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop year: year modeled by the component.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
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
		/*
		 *	This computed property allow to parse information retrieved by the
		 *	backend in such a way the timeline component can display dinamically
		 *	the number of resources of each type.
		 */
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
