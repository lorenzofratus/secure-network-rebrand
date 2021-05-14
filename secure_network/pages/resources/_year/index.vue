<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title + year"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper + year"
		/>
		<filter-section
			:title="filter_section.title"
			:buttons="filter_section.buttons"
			:wrapper="wrapper + year"
			@filter="changeFilter"
		/>
		<boxes-section
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
	// eslint-disable-next-line require-await
	async asyncData({ $axios, route }) {
		const { year } = route.params
		const { data } = await $axios.get(
			`${process.env.BASE_URL}/api/resources/${year}`
		)
		const resources = data
		return { resources, year }
	},
	data() {
		return {
			wrapper: 'resources-of-',
			main_section: {
				title: 'All Updates of The Year ',
				buttons: [
					{
						class: 'primary',
						text: 'Tbd',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Tbd',
						path: '/',
					},
				],
				img: '/images/covers/resources.svg',
			},
			filter_section: {
				title: 'Filter Resources By',
				activeFilter: 0,
				buttons: [
					{
						text: 'All Types',
						filter: '',
					},
					{
						text: 'Research',
						filter: 'research',
					},
					{
						text: 'News',
						filter: 'news',
					},
				],
			},
			animating: false,
			items_section: [
				{
					icon: 'science',
					title: '05 August',
					text: 'Marcello Pogliani presents at Black Hat USA',
					path: '/resources/2020/05-August',
					class: 'research-box',
				},
				{
					icon: 'feed',
					title: '08 July',
					text: 'Alvise discusses Industry 4.0 During the Recovery',
					path: '/',
					class: 'news-box',
				},
				{
					icon: 'science',
					title: '24 June',
					text:
						'European Commission appoints Stefano Zanero to the SCCG',
					path: '/',
					class: 'research-box',
				},
				{
					icon: 'feed',
					title: '30 December',
					text: 'Alvise Biffi at the Silver Economy Forum',
					path: '/',
					class: 'news-box',
				},
			],
		}
	},
	computed: {
		filterClass() {
			const { buttons, activeFilter } = this.filter_section
			return buttons[activeFilter].filter
		},
	},
	methods: {
		changeFilter(index) {
			this.animating = true
			setTimeout(() => {
				this.animating = false
				this.filter_section.activeFilter = index
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
