<template>
	<div class="section">
		<div class="content grid">
			<service-card
				v-for="(service, index) in services"
				:key="'service-' + index + '-' + wrapper"
				:button="service.button"
				:icon="service.icon"
				:title="service.title"
				:text="service.text"
			/>
		</div>
	</div>
</template>

<script>
import ServiceCard from '../items/ServiceCard.vue'

export default {
	components: { ServiceCard },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
		services: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped></style>
