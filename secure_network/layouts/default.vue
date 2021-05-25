<template>
	<div>
		<the-header />
		<Nuxt />
		<the-chat />
		<the-footer />
	</div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheChat from '~/components/TheChat.vue'
import MMCCMixin from '~/mixins/mmcc-mixin.js'

export default {
	components: {
		TheHeader,
		TheFooter,
		TheChat,
	},
	mixins: [MMCCMixin],
}
</script>

<style scoped></style>
