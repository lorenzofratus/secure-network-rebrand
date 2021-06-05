<!--
 * Copyright (c) 2021
 *
 * This is the introductory page all Articles by year the given year.
 * You can filter articles by type.
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
			id="filters"
			title="Filter Articles By"
			:buttons="types"
			:wrapper="wrapper + year"
			@filter="changeFilter"
		/>
		<grid-section
			id="articles"
			:wrapper="wrapper + '-' + year"
			child="article-card"
			:elements="articles"
			type="article"
			class="articles"
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
			// Retrieve all articles of the given year from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/articles-by-year/${year}`
			)
			const articles = data
			if (!articles.length) {
				throw error({ statusCode: 404 })
			}
			return { articles, year }
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			wrapper: 'articles-of-',
			main_section: {
				title: 'All Articles of ',
				img: '/images/covers/articles.svg',
				buttons: [
					{
						text: 'See Articles',
						class: 'primary',
						path: '#articles',
					},
				],
			},
			activeFilter: 0,
			animating: false,
		}
	},
	head() {
		return {
			title: 'Articles of ' + this.year + ' | Secure Network',
		}
	},
	computed: {
		// Computes the types to be displayed in the filter (at least All Types always is displayed).
		// This allow to avoid to filter by a type which is not present at all in the given set.
		// See what happens in year 2021 (no research available) and in year 2018 (no news available).
		types() {
			const types = [{ text: 'All Types', filter: '' }]
			let fetched = this.articles.map((article) => article.type)
			fetched = [...new Set(fetched)].sort()
			fetched.forEach((type) =>
				types.push({
					text: type,
					filter: type,
				})
			)
			return types
		},
		// Gets the class to be set to each card in order to make the filter work, depends on the type of article
		filterClass() {
			return this.types[this.activeFilter].filter
		},
	},
	methods: {
		// Performs article filtering
		changeFilter(index) {
			// Animating set to true until the end of the animation to fade out the old articles and in the new
			this.animating = true
			setTimeout(() => {
				// End of the animation
				this.animating = false
				this.activeFilter = index
			}, 400)
			this.$router.push(this.$route.fullPath + '#filters')
		},
	},
}
</script>

<style scoped>
.articles {
	opacity: 1;
	transition: 0.35s opacity ease-in-out;
}
.articles.animating {
	opacity: 0;
}
.articles.research /deep/ .box:not(.research-box),
.articles.news /deep/ .box:not(.news-box) {
	display: none;
}
</style>
