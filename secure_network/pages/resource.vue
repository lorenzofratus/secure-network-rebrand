<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:subtitle="main_section.subtitle"
			:wrapper="wrapper"
		/>
		<h2 class="spacer"></h2>
		<div class="content">
			<text-section :paragraphs="text_section.paragraphs" />
		</div>
	</div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import TextSection from '~/components/sections/TextSection.vue'
export default {
	components: {
		MainSection,
		TextSection,
	},
	layout: 'default',
	data() {
		return {
			wrapper: 'Index',
			main_section: {
				title: 'Nome della risorsa',
				subtitle: 'Piccola descrizione',
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
				img: 'images/fake-resource.png',
			},
			text_section: {
				paragraphs: [
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rem obcaecati repellat accusamus at quis magnam. Repudiandae vitae sit dignissimos? Sit similique anim blanditiis neque quae consequatur, numquam explicabo commodi tempora voluptatibus impedit suscipit optio non dicta deserunt laborum ipsa debitis odit. Vero, ipsum quasi. Ipsam facere cumque dolore quibusdam.',
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia hic asperiores temporibus soluta esse tempora itaque possimus, quam nostrum, id ratione iusto illum aut. Accusamus, necessitatibus? Rem, odio asperiores.',
				],
			},
		}
	},
}
</script>

<style></style>
