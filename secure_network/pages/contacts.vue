<template>
	<div class="container">
		<main-section
			:buttons="main_section.buttons"
			:img="main_section.img"
			:title="main_section.title"
			:wrapper="wrapper"
		/>
		<form-section
			title="We Can Guarantee Your Security Together"
			:wrapper="wrapper"
		/>
		<section class="section address-section wave-after wave-convex-bg">
			<div class="content">
				<h2 class="spacer">Come And See Us</h2>
				<p class="centered">
					Our operational headquarter is in <strong>Milan</strong>,
					near the "Turro" metro station.
				</p>
			</div>
			<div class="grid content">
				<div class="card interactive" @click="showMap(1)">
					<h3 class="spacer">Italy</h3>
					<p class="info centered">
						Via Valtorta, 48<br />20127, Milano
					</p>
					<p class="info centered">
						<a href="tel:+390283994606"
							><b>Tel:</b> +39 02 83994606</a
						>
					</p>
					<p class="info centered">
						<a href="mailto:info@securenetwork.it"
							><b>Email:</b> info@securenetwork.it</a
						>
					</p>
				</div>
				<div class="card interactive" @click="showMap(2)">
					<h3 class="spacer">Italy</h3>
					<p class="info centered">
						Piazza A. Diaz, 6<br />20123, Milano
					</p>
				</div>
			</div>
		</section>
		<section class="map-section">
			<span class="map map-1" :class="{ active: activeMap == 1 }"></span>
			<span class="map map-2" :class="{ active: activeMap == 2 }"></span>
		</section>
	</div>
</template>

<script>
import FormSection from '~/components/sections/FormSection.vue'
import MainSection from '~/components/sections/MainSection.vue'
export default {
	components: {
		MainSection,
		FormSection,
	},
	data() {
		return {
			wrapper: 'contacts',
			main_section: {
				title: "Let's Connect",
				buttons: [
					{
						class: 'primary',
						text: 'Section',
						path: '/',
					},
					{
						class: 'secondary',
						text: 'Contact us',
						path: '/contacts',
					},
				],
				img: '/images/covers/contacts.svg',

			},
			activeMap: 1,
		}
	},
	methods: {
		showMap(index) {
			this.activeMap = index
		},
	},
}
</script>

<style scoped>
p.centered {
	text-align: center;
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

.address-section .grid {
	margin-top: var(--padding);
}

.map-section {
	position: relative;
	height: 70vh;
	min-height: 500px;
	margin: var(--wave-height-neg) 0;
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
