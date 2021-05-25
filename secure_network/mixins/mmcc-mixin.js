/*
 * Copyright (c) 2021
 *
 * Code shared by all components importing this mixin.
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */
export default {
	data() {
		const list = []
		const configurationId = process.env.configurationId
		return { list, configurationId }
	},
	methods: {
		skip(WebSocketEventBus) {
			const packet = {
				message: {
					type: 'data',
					payload: { data: 'null payload' },
				},
				configurationId: process.env.configurationId,
			}
			WebSocketEventBus.$emit('send', packet)
		},
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
			console.log(message)
			if (message.utterance) {
				// The bot prints twice the start message when restarts from the beginning
				// To avoid the visualization of such a duplicated message, when it is detected
				// it is sent a dummy payload to the backend to skip this message and receive directly
				// the second one
				if (
					message.utterance.includes('Exploit') &&
					!message.utterance.includes('tour') &&
					self.$store.state.chat.messages.length
				) {
					self.skip(WebSocketEventBus)
				} else {
					setTimeout(() => {
						self.$store.commit('chat/addMessage', {
							sender: true,
							content: message.utterance,
						})
					}, 1000)
				}
			}
			setTimeout(() => {
				if (message.payload) {
					if (message.payload.guide) {
						self.$router.push(message.payload.guide)
					}
				}
			}, 1000)
		})
	},
}
