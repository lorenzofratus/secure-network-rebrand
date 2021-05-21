<template>
	<div class="chat">
		<div class="chat-container" :class="{ open: isOpen }">
			<div class="chat-header">
				<div>
					<h4 class="title">Exploit</h4>
					<p class="subtitle">Your Virtual Assistant</p>
				</div>
				<span class="icon material-icons" @click="isOpen = false">
					close
				</span>
			</div>
			<div id="chat-window" class="chat-window">
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
			<div class="chat-footer">
				<input
					v-model="messageToSend"
					type="text"
					placeholder="Type a message..."
					@keypress.enter="sendMessage"
				/>
				<span class="icon material-icons" @click="sendMessage">
					send
				</span>
			</div>
		</div>
		<button class="chat-button" @click="isOpen = !isOpen">
			<span class="icon material-icons"> question_answer </span>
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messageToSend: '',
			isOpen: false,
		}
	},
	methods: {
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
	z-index: 2;
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

.chat-container {
	display: flex;
	flex-direction: column;
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
}
.chat-container.open {
	transform: scale(1);
	opacity: 1;
}

.chat-header,
.chat-footer {
	flex-grow: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	z-index: 2;
}

.chat-header {
	padding: 1em 1.5em;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
.chat-header .icon {
	color: var(--dark-color);
	cursor: pointer;
	padding-left: 0.5em;
}

.chat-window {
	flex-grow: 1;
	overflow-y: auto;
	height: auto;
	padding: 0.5em 0;
}

.chat-footer {
	padding: 0 1.5em 0 0;
	box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
.chat-footer input {
	flex-grow: 1;
	padding: 1em 1.5em;
	border: none;
}
.chat-footer input:focus {
	outline: none;
}
.chat-footer .icon {
	color: var(--primary-color);
	cursor: pointer;
}

.message {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}
.message.sender {
	justify-content: flex-start;
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
	color: white;
}
</style>
