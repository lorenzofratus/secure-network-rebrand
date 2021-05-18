<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:wrapper="wrapper"
		/>
		<form-section
			id="email"
			title="We Can Guarantee Your Security Together"
			:wrapper="wrapper"
		/>

		<section id="info" class="address-section wave-after wave-convex-bg">
			<title-component
				:title="title_component.title"
				:text="title_component.text"
			/>

			<div class="grid content">
				<a class="card interactive contact" href="tel:+390283994606">
					<span class="icon material-icons">phone</span>
					<p class="info">+39 02 83994606</p>
				</a>
				<a
					class="card interactive contact"
					href="mailto:info@securenetwork.it"
				>
					<span class="icon material-icons">email</span>
					<p class="info">info@securenetwork.it</p>
				</a>
				<a
					href="#map"
					data-offset="-100"
					data-index="1"
					class="card interactive"
					@click="showMap"
				>
					<h3 class="spacer">Italy</h3>
					<p class="info centered">
						Via Valtorta, 48<br />20127, Milano
					</p>
				</a>
				<a
					href="#map"
					data-offset="-100"
					class="card interactive"
					data-index="2"
					@click="showMap"
				>
					<h3 class="spacer">Italy</h3>
					<p class="info centered">
						Piazza A. Diaz, 6<br />20123, Milano
					</p>
				</a>
			</div>
		</section>
		<div id="map" class="map-section">
			<span class="map map-1" :class="{ active: activeMap == 1 }"></span>
			<span class="map map-2" :class="{ active: activeMap == 2 }"></span>
		</div>
	</div>
</template>

<script>
import FormSection from '~/components/sections/FormSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
import TitleComponent from '~/components/items/TitleComponent.vue'
export default {
	components: {
		MainSection,
		FormSection,
		TitleComponent,
	},
	data() {
		return {
			wrapper: 'contacts',
			main_section: {
				title: "Let's Connect",
				buttons: [
					{
						class: 'primary',
						text: 'Email Us',
						path: '#email',
					},
					{
						class: 'secondary',
						text: 'Reach Us',
						path: '#info',
					},
				],
				img: '/images/covers/contacts.svg',
			},
			title_component: {
				title: 'Come And See Us',
				text:
					'Our operational headquarter is in Milan, near the "Turro" metro station.',
			},
			activeMap: 1,
		}
	},
	methods: {
		showMap(event) {
			const index = +event.target.closest('a').getAttribute('data-index')
			this.$scrollTo(event)
			this.activeMap = index
		},
	},
}
</script>

<style scoped>
p.centered {
	text-align: center;
}

.contact {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 1em 2em;
}
.contact .icon {
	font-size: 2em;
	margin-bottom: 0.1em;
}

.info {
	margin: 0.75em 0;
}
.info a {
	color: initial;
	text-decoration: none;
	transition: 0.35s color ease-in-out;
}
.info a:hover {
	color: var(--primary-color);
}

.address-section .content {
	margin-top: var(--padding);
}

.map-section {
	position: relative;
	height: 70vh;
	min-height: 500px;
	margin: var(--wave-height-neg) 0;
}
.map-section:focus {
	outline: none;
}
.map {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -2;
	background: no-repeat center center;
	background-size: cover;
	transition: 0.75s left ease-in-out;
}
.map-1 {
	background-image: url('/images/maps/map-1.jpg');
	left: -100%;
}
.map-2 {
	background-image: url('/images/maps/map-2.jpg');
	left: 100%;
}
.map.active {
	left: 0;
}
</style>
