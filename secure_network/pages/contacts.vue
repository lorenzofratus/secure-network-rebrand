<template>
	<main class="container">
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
				<a
					v-for="(contact, index) in info.contacts"
					:key="'contact-' + index + '-' + wrapper"
					class="card interactive contact"
					:href="
						(contact.type == 'phone'
							? 'tel:'
							: contact.type == 'email'
							? 'mailto:'
							: '') + contact.data
					"
				>
					<span class="icon material-icons">{{ contact.type }}</span>
					<p class="info">{{ contact.data }}</p>
				</a>
				<a
					v-for="(headquarter, index) in info.headquarters"
					:key="'headquarter-' + index + '-' + wrapper"
					href="#map"
					data-offset="-100"
					:data-index="index"
					class="card map-card interactive"
					:class="{ active: activeMap == index }"
					@click="showMap"
				>
					<h3 class="spacer">{{ headquarter.state }}</h3>
					<p class="info centered">
						{{ headquarter.street }}, {{ headquarter.number
						}}<br />{{ headquarter.zip }}, {{ headquarter.city }}
					</p>
				</a>
			</div>
		</section>
		<div id="map" class="map-section">
			<span
				v-for="(headquarter, index) in info.headquarters"
				:key="'map-' + index + '-' + wrapper"
				class="map"
				:style="'background: url(' + headquarter.map + ')'"
				:class="{
					active: activeMap == index,
					old: oldMap == index,
					even: mapChanges % 2 == 0,
					odd: mapChanges % 2 != 0,
				}"
			></span>
		</div>
	</main>
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
			info: {
				contacts: [
					{
						type: 'phone',
						data: '+39 02 83994606',
					},
					{
						type: 'email',
						data: 'info@securenetwork.it',
					},
				],
				headquarters: [
					{
						state: 'Italy',
						city: 'Milan',
						zip: '20127',
						street: 'Via Valtorta',
						number: '48',
						map: '/images/maps/map-1.jpg',
					},
					{
						state: 'Italy',
						city: 'Milan',
						zip: '20123',
						street: 'Piazza A. Diaz',
						number: '6',
						map: '/images/maps/map-2.jpg',
					},
				],
			},
			clickableMaps: true,
			oldMap: -1,
			activeMap: 0,
			mapChanges: 0,
		}
	},
	head() {
		return {
			title: 'Contacts | Secure Network',
		}
	},
	methods: {
		showMap(event) {
			if (!this.clickableMaps) return
			const index = +event.target.closest('a').getAttribute('data-index')
			this.$scrollTo(event)

			if (this.activeMap === index) return
			this.mapChanges++
			this.clickableMaps = false
			this.oldMap = this.activeMap
			this.activeMap = index

			setTimeout(() => {
				this.oldMap = -1
				this.clickableMaps = true
			}, 750)
		},
	},
}
</script>

<style scoped>
p.centered {
	text-align: center;
}

.map-card {
	position: relative;
}
.map-card::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: var(--line-weight) solid var(--primary-color);
	border-radius: var(--card-radius);
	opacity: 0;
	transition: 0.35s opacity ease-in-out;
}
.map-card.active::after {
	opacity: 1;
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
	left: 100%;
}
.map.even {
	left: 100%;
}
.map.odd {
	left: -100%;
}
.map.active {
	left: 0;
	transition: 0.75s left ease-in-out;
}
.map.old {
	transition: 0.75s left ease-in-out;
}
</style>
