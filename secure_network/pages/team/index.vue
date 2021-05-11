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
		<image-components-section
			id="founders"
			title="Our Founders"
			:components="founders"
			:wrapper="wrapper"
			:is-rounded="true"
		/>
		<people-section
			id="employees"
			title="Our Employees"
			:people="team"
			:wrapper="wrapper"
		/>
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
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import PeopleSection from '~/components/sections/PeopleSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		PeopleSection,
		ImageComponentsSection,
	},
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
		let payload = await $axios.get(`${process.env.BASE_URL}/api/team`)
		const team = payload.data

		payload = await $axios.get(
			`${process.env.BASE_URL}/api/people-by-role/founder`
		)
		const founders = payload.data

		return {
			team,
			founders,
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
						text: 'Founders',
						path: '#founders',
					},
					{
						class: 'secondary',
						text: 'Employees',
						path: '#employees',
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
				paragraphs: ['What are you waiting? Come hack with us!'],
				button: {
					class: 'primary',
					text: 'Contact Us',
					path: '/contact',
				},
				centered: true,
			},
		}
	},
}
</script>

<style></style>
