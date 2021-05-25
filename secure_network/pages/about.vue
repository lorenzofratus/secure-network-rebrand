<!--
 * Copyright (c) 2021
 *
 * This is the about page.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<main class="container">
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
		<grid-section
			:wrapper="wrapper"
			:small="true"
			child="threat-card"
			:title="$store.state.threats.title"
			:elements="$store.state.threats.blocks"
			:button="$store.state.threats.button"
		/>
	</main>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import AltSection from '~/components/sections/AltSection.vue'
import GridSection from '~/components/sections/GridSection.vue'
export default {
	components: {
		MainSection,
		AltSection,
		GridSection,
	},
	data() {
		return {
			wrapper: 'About',
			main_section: {
				title: 'About us',
				subtitle: '',
				buttons: [
					{
						class: 'primary',
						text: 'Contact Us',
						path: '/contacts#email',
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
				button: {
					class: 'secondary',
					text: 'Discover Our Team',
					path: '/team',
				},
			},
		}
	},
	head() {
		return {
			title: 'About | Secure Network',
		}
	},
}
</script>

<style></style>
