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
					// Adding 1 second timeout before adding the first message to the chat and then 0.5 seconds for each subsequent message
					// This makes the chatbot less "aggressive" towards the user
					const utterances = message.utterance.split('\n')
					const speed = 600
					let timeout = 1000
					for (const utterance of utterances) {
						setTimeout(() => {
							self.$store.commit('chat/addMessage', {
								sender: true,
								content: utterance,
							})
						}, timeout)
						timeout += speed
					}
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
