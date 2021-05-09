<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="alt_section.title"
			:paragraphs="alt_section.paragraphs"
			:wrapper="wrapper"
			:button="alt_section.button"
		/>
		<people-section :people="people" :wrapper="wrapper" />
		<alt-section
			:title="alt_section2.title"
			:paragraphs="alt_section2.paragraphs"
			:wrapper="wrapper"
			:button="alt_section2.button"
			:centered="alt_section2.centered"
		/>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import PeopleSection from '~/components/sections/PeopleSection.vue'

export default {
	components: { MainSection, AltSection, PeopleSection },
	layout: 'default',
	// async asyncData({ store }) {
	// 	// fetch data from the api server
	// 	const people = await store.dispatch('getPeople')
	// 	return {
	// 		people,
	// 	}
	// },
	async asyncData({ $axios }) {
		// fetch data from the api server
		const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
		const people = data
		return {
			people,
		}
	},
	data() {
		return {
			wrapper: 'Team',
			main_section: {
				title: 'Our Fantastic Team',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'The Founders',
						path: '/founders',
					},
					{
						class: 'secondary',
						text: 'The Team',
						path: '/',
					},
				],
				img: '/images/covers/team.svg',
			},
			alt_section: {
				title: 'Who we are',
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
			},
			alt_section2: {
				title: 'We are hiring!',
				paragraphs: ['Come hack with us!'],
				button: {
					class: 'primary',
					text: 'Contact Us',
					path: '/contact',
				},
				centered: true,
			},
			people_section: {
				people: [
					{
						img: '/images/team/alberto-volpatto.jpeg',
						name: 'Alberto',
						surname: 'Volpatto',
					},
					{
						img: '/images/team/diego-zaffaroni-stock.jpg',
						name: 'Diego',
						surname: 'Zaffaroni',
					},
					{
						img: '/images/team/federico-zambito-stock.jpg',
						name: 'Federico',
						surname: 'Zambito',
					},
					{
						img: '/images/team/alberto-volpatto.jpeg',
						name: 'Alberto',
						surname: 'Volpatto',
					},
					{
						img: '/images/team/alberto-volpatto.jpeg',
						name: 'Alberto',
						surname: 'Volpatto',
					},
					{
						img: '/images/team/alberto-volpatto.jpeg',
						name: 'Alberto',
						surname: 'Volpatto',
					},
				],
			},
		}
	},
}
</script>

<style></style>