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
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
export default {
	components: { MainSection, AltSection },
	layout: 'default',
	data() {
		return {
			wrapper: 'About',
			main_section: {
				title: 'About us',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'Our Team',
						path: '/team',
					},
					{
						class: 'secondary',
						text: 'Contact Us',
						path: '/contacts',
					},
				],
				img: '/images/covers/about.svg',
			},
			alt_section: {
				title: 'Your Protection, Our Mission',
				paragraphs: [
					`Founded in 2004, Secure Network offers specialized services to guarantee the security of your systems.
				   In 2018 Secure Network entered into a joint venture with BV Tech S.p.a, further expanding the company’s international opportunities.`,
					`Secure Network acts like your most determined attackers and performs realistic and in-depth analysis of your most critical systems.
					Formed by a young and cutting-edge Red Team of engineers and always up to date thanks to the close collaboration with Politecnico di Milano.`,
					`The stable research and development studies and the active participation to international conferences, lectures and workshops, make Secure Network one of the most effective security companies.`,
				],
			},
		}
	},
}
</script>

<style></style>
