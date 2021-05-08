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
		<section class="section">
			<div class="grid small content">
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
				<circle-card :img="ciao" name="Alberto" surname="Volpatto" />
			</div>
		</section>
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
import CircleCard from '~/components/items/CircleCard.vue'

export default {
	components: { MainSection, AltSection, CircleCard },
	layout: 'default',
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
			ciao: '/images/team/alberto-volpatto.jpeg',
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
		}
	},
}
</script>

<style></style>
