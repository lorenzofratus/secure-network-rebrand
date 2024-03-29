/*
 * Copyright (c) 2021
 *
 * Code shared by all components importing this mixin.
 * Used to manage the chat through WebSocket protocol.
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
			if (message.utterance) {
				// Adding 1 second timeout before adding the first message to the chat and then 0.55 seconds for each subsequent message
				// This makes the chatbot less "aggressive" towards the user
				const utterances = message.utterance.split('\n')
				const speed = 550
				let timeout = 1000
				for (let utterance of utterances) {
					// Utterance replacement if you are already on the given page, to give a feedback to the user
					// since router.push() does not refresh the page if you are already there.
					if (
						self.$router.history.current.fullPath ===
							message.payload.guide &&
						utterance.includes('This is our')
					) {
						utterance = utterance.replace(
							'This is',
							'You are already on'
						)
					}
					if (
						self.$router.history.current.fullPath ===
							message.payload.guide &&
						utterance.includes('Let me take you to')
					) {
						utterance = utterance.replace(
							'Let me take you to',
							'You are already on'
						)
					}

					setTimeout(() => {
						self.$store.commit('chat/addMessage', {
							sender: true,
							content: utterance,
						})
					}, timeout)
					timeout += speed
				}
			}
			setTimeout(() => {
				if (message.payload) {
					if (message.payload.guide) {
						self.$router.push({
							path: message.payload.guide,
							param: { t: Date.now() },
						})
					}
				}
			}, 1000)
		})
	},
}
