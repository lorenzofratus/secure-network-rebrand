<template>
	<div class="container">
		<main-section
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<alt-section
			:title="main_section.subtitle"
			:paragraphs="alt_section.paragraphs"
		/>
	</div>
</template>

<script>
import AltSection from '~/components/sections/AltSection.vue'
import MainSection from '~/components/sections/MainSection.vue'

export default {
	components: {
		MainSection,
		AltSection,
	},
	layout: 'default',
	// eslint-disable-next-line require-await
	async asyncData({ $axios, route }) {},
	data() {
		return {
			wrapper: 'resource',
			main_section: {
				title: '05 August 2020',
				subtitle: 'Marcello Pogliani presents at Black Hat USA',
				img: '/images/covers/research.svg',
			},
			alt_section: {
				paragraphs: [
					'Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.',
					'The conference talk, “OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.',
					'Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.',
					'The PDF slides of the presentation can be downloaded here.',
				],
			},
		}
	},
}
</script>

<style scoped></style>
