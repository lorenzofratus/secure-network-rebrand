export default {
	data() {
		const list = []
		const configurationId = process.env.configurationId
		return { list, configurationId }
	},
	watch: {
		'$store.state.messages'() {
			this.list = this.$store.state.messages
		},
	},
	mounted() {
		const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
		// Connection config
		const data = {
			configurationId: process.env.configurationId,
			interaction: localStorage.getItem('mmcc-interaction') || null,
		}
		// Emitting the connect event to initialize the communication
		WebSocketEventBus.$emit('connect', data)

		// Adding the default event listener for messages
		WebSocketEventBus.onMessage((message) => {
			const self = this
			// Adding 1 second timeout before adding the message to the chat
			// This makes the chatbot less "aggressive" towards the user
			setTimeout(() => {
				if (message.utterance) {
					self.$store.commit('chat/addMessage', {
						sender: true,
						content: message.utterance,
					})
				}
				if (message.payload) {
					if (message.payload.guide) {
						self.$router.push(message.payload.guide)
					}
				}
			}, 1000)
		})
	},
}
