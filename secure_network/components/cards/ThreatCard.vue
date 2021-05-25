<template>
	<div class="card block" tabindex="0">
		<div class="preview">
			<div class="wrapper">
				<div class="background"></div>
				<span class="icon material-icons">{{ object.icon }}</span>
			</div>
			<h3 class="h4 title">{{ object.title }}</h3>
		</div>
		<!-- .text is shown at focus and hover, cannot give the dimensions to the card as it needs to be "position: absolute" -->
		<!-- .placeholder is never visible and is only used to give the right dimensions to the card -->
		<p class="text">{{ object.text }}</p>
		<p class="placeholder">{{ object.text }}</p>
	</div>
</template>

<script>
export default {
	props: {
		object: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
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
