<template>
	<section>
		<title-component v-if="title != ''" :title="title" />
		<div class="content grid small">
			<div
				v-for="(block, index) in blocks"
				:key="'block-' + index + '-' + wrapper"
				class="card block"
				tabindex="0"
			>
				<div class="preview">
					<div class="wrapper">
						<div class="background"></div>
						<span class="icon material-icons">{{
							block.icon
						}}</span>
					</div>
					<h3 class="h4 title">{{ block.title }}</h3>
				</div>
				<p class="text">{{ block.text }}</p>
				<p class="placeholder">{{ block.text }}</p>
			</div>
		</div>
		<button-component
			:btn-class="button.class"
			:btn-text="button.text"
			:btn-path="button.path"
		/>
	</section>
</template>

<script>
import TitleComponent from '~/components/items/TitleComponent.vue'
import ButtonComponent from '~/components/items/ButtonComponent.vue'

export default {
	components: { TitleComponent, ButtonComponent },
	props: {
		wrapper: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			title: 'It is not a matter of if, but when and how',
			blocks: [
				{
					icon: 'live_tv',
					title: 'Many high profile incidents',
					text:
						'Notable incidents do not happen yearly, or monthly. They happen daily. Even estabilished firms with huge capitals cannot whitstand attackers, when proper security and processes have not been estabilished or have been postponed.',
				},
				{
					icon: 'wifi_tethering',
					title: 'A connected world has consequences',
					text:
						'Prosperous markets can be highly competitive. Knowledge of hacking has become trivial to obtain even for small businesses. As such it is not just a matter of “what could happen”, but “when” and “how to be prepared”.',
				},
				{
					icon: 'volunteer_activism',
					title: 'Trust and human data',
					text:
						'When you are processing and managing user data, personal or credit information, every breach would be disastrous and have permanent, long-lasting consequences on both the wellness of your users, and your reputation.',
				},
			],
			button: {
				class: 'secondary',
				text: 'See Services',
				path: '/services',
			},
		}
	},
}
</script>

<style scoped>
.grid {
	margin-bottom: 4em;
}
.block {
	--padding: 2em 1em;
	position: relative;
	text-align: center;
	padding: var(--padding);
	cursor: pointer;

	overflow: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}
.block .preview {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.block .wrapper {
	position: relative;
}
.block .background {
	width: 100px;
	height: 100px;
	margin: 0 auto;
	border-radius: 100%;
	background-color: var(--light-color);
	transition: 0.5s transform ease-in-out;
}
.block:hover .background,
.block:focus .background {
	transform: scale(5) translateZ(0);
}
.block .icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 50px;
	color: var(--dark-color);
	opacity: 1;
	transition: 0.25s opacity ease-in-out;
	transition-delay: 0.45s;
}
.block:hover .icon,
.block:focus .icon {
	opacity: 0;
	transition-delay: 0s;
}
.block .title {
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.block .text {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: var(--padding);
	opacity: 0;
	transition: 0.5s opacity ease-in-out;
}
.block:hover .text,
.block:focus .text {
	opacity: 1;
	transition-delay: 0.25s;
}
.block .placeholder {
	margin: 0;
	opacity: 0;
	visibility: hidden;
}
</style>
