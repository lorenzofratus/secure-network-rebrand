<template>
	<div>
		<the-header />
		<Nuxt />
		<chat-component />
		<the-footer />
	</div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import ChatComponent from '~/components/items/ChatComponent.vue'
import MMCCMixin from '~/mixins/mmcc-mixin.js'

export default {
	components: {
		TheHeader,
		TheFooter,
		ChatComponent,
	},
	mixins: [MMCCMixin],
}
</script>

<style scoped></style>
