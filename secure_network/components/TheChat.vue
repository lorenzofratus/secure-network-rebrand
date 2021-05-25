<template>
	<div class="chat">
		<button class="chat-button" @click="isOpen = !isOpen">
			<span class="icon material-icons"> question_answer </span>
		</button>
		<!-- Elements are displayed in reverse to allow keyboard navigation -->
		<div class="chat-container" :class="{ open: isOpen }">
			<!-- Footer block, contains input and send button -->
			<div class="chat-footer">
				<div class="field">
					<input
						id="message"
						v-model="messageToSend"
						type="text"
						@keypress.enter="sendMessage"
					/>
					<!-- Simulates the behavior of the placeholder but in this way is also detected by screen readers -->
					<label for="message" :class="{ show: messageToSend == '' }">
						Type a message...
					</label>
				</div>
				<button class="chat-button-inside" @click="sendMessage">
					<span class="icon material-icons"> send </span>
				</button>
			</div>
			<!-- Window block, contains messages, it is scrollable -->
			<div ref="chat-window" class="chat-window">
				<div
					v-for="(message, index) of $store.state.chat.messages"
					:key="`message-${index}`"
					class="message"
					:class="{ sender: message.sender }"
				>
					<div
						class="message-content"
						:class="{ sender: message.sender }"
					>
						{{ message.content }}
					</div>
				</div>
			</div>
			<!-- Header block, contains the profile image of the bot, the title and the close button -->
			<div class="chat-header">
				<div class="exploit"></div>
				<div class="titling">
					<h4 class="title">Exploit</h4>
					<p class="subtitle">Your Virtual Assistant</p>
				</div>
				<button class="chat-button-inside" @click="isOpen = false">
					<span class="icon material-icons"> close </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messageToSend: '',
			isOpen: false,
			toBeScrolled: true,
		}
	},
	// Before any update in the component checks if the user is scrolled all the way to the bottom of the window
	// This check is done to avoid scrolling the window to a user that is reading old messages (not scrolled to the bottom)
	beforeUpdate() {
		const container = this.$refs['chat-window']
		this.toBeScrolled =
			container.scrollTop + container.clientHeight ===
			container.scrollHeight
	},
	// When an update happens (in particular when a message is added) scrolls the window in order to always display the latest message
	updated() {
		const container = this.$refs['chat-window']
		if (this.toBeScrolled) {
			container.scrollTop = container.scrollHeight
		}
	},
	methods: {
		// Sends message to the chatbot
		sendMessage() {
			if (this.messageToSend === '') return
			const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
			this.$store.commit('chat/addMessage', {
				sender: false,
				content: this.messageToSend,
			})
			const packet = {
				message: {
					type: 'data',
					payload: { data: this.messageToSend },
				},
				configurationId: process.env.configurationId,
			}
			WebSocketEventBus.$emit('send', packet)
			this.messageToSend = ''
		},
	},
}
</script>

<style scoped>
.chat {
	--icon-size: 24px;
	--button-size: 60px;
	--button-padding: 30px;
	--container-padding: 105px;
	--container-padding: calc(var(--button-size) + 1.5 * var(--button-padding));
	--container-heigth: 600px;
	--container-width: 350px;
}

.chat-button {
	position: fixed;
	bottom: var(--button-padding);
	right: var(--button-padding);
	z-index: 3;
	border: none;
	height: var(--button-size);
	width: var(--button-size);
	border-radius: 50%;
	cursor: pointer;
	background: var(--background)
		radial-gradient(circle, transparent 1%, var(--background) 1%)
		center/15000%;
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
	transition: 0.35s box-shadow ease-in-out, 0.8s background;
}
.chat-button:hover,
.chat-button:focus {
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
		0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
.chat-button:active {
	background-color: var(--light-color);
	background-size: 100%;
	transition: 0s background;
}
.chat-button .icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 30px;
	color: var(--primary-color);
}
.chat-button-inside {
	background: transparent;
	border: none;
	padding: 0;
	height: var(--icon-size);
}

.chat-container {
	display: flex;
	flex-direction: column-reverse;
	position: fixed;
	bottom: var(--container-padding);
	right: var(--button-padding);
	height: var(--container-heigth);
	width: var(--container-width);
	background-color: var(--background);
	border-radius: var(--card-radius);
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
	transform-origin: bottom right;
	transform: scale(0);
	opacity: 0;
	transition: 0.35s ease-in-out;
	transition-property: transform, opacity;
	overflow: hidden;
	z-index: 3;
}
.chat-container.open {
	transform: scale(1);
	opacity: 1;
}

@media screen and (max-width: 410px) {
	.chat-container {
		width: auto;
		left: var(--button-padding);
	}
}

@media screen and (max-height: 735px) {
	.chat-container {
		height: auto;
		top: var(--button-padding);
	}
}

.chat-header,
.chat-footer {
	flex-grow: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	z-index: 3;
}

.chat-header {
	padding: 1em 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.chat-header > * {
	flex-grow: 0;
}
.chat-header .titling {
	flex-grow: 1;
}
.chat-header .exploit {
	background: url('/images/exploit.svg') center no-repeat;
	background-size: contain;
	height: 40px;
	width: 40px;
	margin: 0 1em;
}
.chat-header .title {
	margin: 0 0 0.25em;
	font-size: 1em;
	font-weight: 500;
}
.chat-header .subtitle {
	margin: 0;
	font-size: 0.8em;
	line-height: 1em;
}
.chat-header .chat-button-inside {
	margin: 0 1.5em;
}
.chat-header .icon {
	color: var(--dark-color);
	cursor: pointer;
}

.chat-window {
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	height: auto;
	padding: 0.5em 0;
}

.chat-footer {
	box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
.chat-footer .field {
	position: relative;
}
.chat-footer input {
	flex-grow: 1;
	padding: 1em 1.5em;
	border: none;
}
.chat-footer input:focus {
	outline: none;
}
.chat-footer .chat-button-inside {
	margin: 0 1.5em 0 0;
}
.chat-footer .icon {
	font-size: var(--icon-size);
	color: var(--primary-color);
	cursor: pointer;
}
.chat-footer label {
	position: absolute;
	left: 1.5em;
	top: 1em;
	color: #767676;
	display: none;
}
.chat-footer label.show {
	display: block;
}

.message {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	transform: translateX(0);
	animation-duration: 0.5s;
	animation-name: slide-in-right;
}
.message.sender {
	justify-content: flex-start;
	animation-name: slide-in-left;
}
.message-content {
	line-height: 1em;
	padding: 0.7em 1em 0.5em;
	margin: 0.5em 0.75em;
	width: auto;
	background: var(--alt-background);
	color: black;
	border-radius: 1.5em 0 1.5em 1.5em;
	box-shadow: 0 9px 12px 1px rgba(0, 0, 0, 0.14),
		0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2);
}
.message-content.sender {
	border-radius: 0 1.5em 1.5em 1.5em;
	background: var(--primary-color);
	color: var(--background);
}

@keyframes slide-in-left {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}
@keyframes slide-in-right {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
}
</style>
