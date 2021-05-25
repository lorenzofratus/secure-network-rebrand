<!--
 * Copyright (c) 2021
 *
 * This is the introductory page all Resources by year the given year.
 * You can filter resources by type.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
		<main-section
			:img="main_section.img"
			:title="main_section.title + year"
			:subtitle="main_section.subtitle"
			:buttons="main_section.buttons"
			:wrapper="wrapper + year"
		/>
		<filter-section
			title="Filter Resources By"
			:buttons="types"
			:wrapper="wrapper + year"
			@filter="changeFilter"
		/>
		<grid-section
			id="resources"
			:wrapper="wrapper + '-' + year"
			child="resource-card"
			:elements="resources"
			type="resource"
			class="resources"
			:class="[filterClass, { animating: animating }]"
		/>
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import FilterSection from '~/components/sections/FilterSection.vue'
import GridSection from '~/components/sections/GridSection.vue'

export default {
	components: {
		MainSection,
		FilterSection,
		GridSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { year } = route.params
			// Retrieve all resources of the given year from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/resources-by-year/${year}`
			)
			const resources = data
			return { resources, year }
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			wrapper: 'resources-of-',
			main_section: {
				title: 'All Resources of ',
				img: '/images/covers/resources.svg',
				buttons: [
					{
						text: 'See Resources',
						class: 'primary',
						path: '#resources',
					},
				],
			},
			activeFilter: 0,
			animating: false,
		}
	},
	head() {
		return {
			title: 'Resources of ' + this.year + ' | Secure Network',
		}
	},
	computed: {
		// Computes the types to be displayed in the filter (at least All Types always is displayed).
		// This allow to avoid to filter by a type which is not present at all in the given set.
		// See what happens in year 2021 (no research available) and in year 2018 (no news available).
		types() {
			const types = [{ text: 'All Types', filter: '' }]
			let fetched = this.resources.map((resource) => resource.type)
			fetched = [...new Set(fetched)].sort()
			fetched.forEach((type) =>
				types.push({
					text: type,
					filter: type,
				})
			)
			return types
		},
		// Gets the class to be set to each card in order to make the filter work, depends on the type of resource
		filterClass() {
			return this.types[this.activeFilter].filter
		},
	},
	methods: {
		// Performs resource filtering
		changeFilter(index) {
			// Animating set to true until the end of the animation to fade out the old resources and in the new
			this.animating = true
			setTimeout(() => {
				// End of the animation
				this.animating = false
				this.activeFilter = index
			}, 500)
		},
	},
}
</script>

<style scoped>
.resources {
	opacity: 1;
	transition: 0.35s opacity ease-in-out;
}
.resources.animating {
	opacity: 0;
}
.resources.research /deep/ .box:not(.research-box),
.resources.news /deep/ .box:not(.news-box) {
	display: none;
}
</style>
