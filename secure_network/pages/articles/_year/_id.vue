<!--
 * Copyright (c) 2021
 *
 * This is the introductory page of the given article.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
		<main-section
			:img="article.img"
			:title="article.title"
			:subtitle="article.subtitle"
			:wrapper="article.id"
		/>
		<alt-section
			:title="article.name"
			:paragraphs="article.paragraphs"
			:contains-link="true"
			:wrapper="article.id"
		/>
	</main>
</template>

<script>
import AltSection from '~/components/sections/AltSection.vue'
import MainSection from '~/components/sections/MainSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
	},
	/*
	 * This function retrieves information from the api server, which are then
	 * used for server side rendering.
	 */
	async asyncData({ $axios, route, error }) {
		try {
			const { id } = route.params
			// Retrieve the given article from the database
			const { data } = await $axios.get(
				`${process.env.BASE_URL}/api/articles/${id}`
			)
			const article = data
			// Perform some processing operations on the date to better display it
			const date = new Date(article.date)
			const year = date.getFullYear()
			article.title =
				('0' + date.getDate()).slice(-2) +
				' ' +
				date.toLocaleString('EN', { month: 'long' }) +
				' ' +
				year

			// Split the article.text property in order to get several paragraphs.
			article.paragraphs = article.text.split('\n')

			// Compute the path of the image of the given article.
			// Each article of the same type will display the same image in the MainSection.
			article.img = '/images/covers/' + article.type + '.svg'

			return { article }
		} catch (err) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			main_section: {
				img: '/images/covers/',
			},
		}
	},
	head() {
		return {
			title: this.article.title + ' | Secure Network',
		}
	},
}
</script>

<style scoped></style>
