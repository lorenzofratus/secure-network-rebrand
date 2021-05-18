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
		<hiring-section :wrapper="wrapper" />
	</div>
</template>

<script>
import ImageComponentsSection from '~/components/sections/ImageComponentsSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import PeopleSection from '~/components/sections/PeopleSection.vue'
import HiringSection from '~/components/sections/HiringSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
		PeopleSection,
		ImageComponentsSection,
		HiringSection,
	},
	async asyncData({ $axios, error }) {
		try {
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
		} catch (err) {
			error({ statusCode: 500 })
		}
	},
	data() {
		return {
			wrapper: 'Team',
			main_section: {
				title: 'Your Protection, Our Mission',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'Our Founders',
						path: '#founders',
					},
					{
						class: 'secondary',
						text: 'Our Employees',
						path: '#employees',
					},
				],
				img: '/images/covers/team.svg',
			},
			alt_section: {
				title: 'Who we are',
				paragraphs: [
					'Secure Network acts like your most determined attackers and performs realistic and in-depth analysis of your most critical systems.',
					'Formed by a young and cutting-edge Red Team of engineers and always up to date thanks to the close collaboration with Politecnico di Milano.',
					'The stable research and development studies and the active participation to international conferences, lectures and workshops, make Secure Network one of the most effective security companies.',
				],
			},
		}
	},
}
</script>

<style></style>
