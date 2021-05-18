<template>
	<div class="container">
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
		<boxes-section
			id="resources"
			:boxes="resources"
			:wrapper="wrapper + year"
			class="resources"
			:class="[filterClass, { animating: animating }]"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import FilterSection from '~/components/sections/FilterSection.vue'
import BoxesSection from '~/components/sections/BoxesSection.vue'

export default {
	components: {
		MainSection,
		FilterSection,
		BoxesSection,
	},
	layout: 'default',
	async asyncData({ $axios, route, error }) {
		try {
			const { year } = route.params
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
		filterClass() {
			return this.types[this.activeFilter].filter
		},
	},
	methods: {
		changeFilter(index) {
			this.animating = true
			setTimeout(() => {
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
