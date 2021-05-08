<template>
	<div class="sub-section">
		<div class="content">
			<h2 class="spacer spacer-small">{{ title }}</h2>
			<p>{{ description }}</p>
			<button-component
				:btn-class="button.class"
				:btn-path="button.path"
				:btn-ext="button.text"
			/>
		</div>
		<img :src="img.src" :class="img.class" />
	</div>
</template>

<script>
import ButtonComponent from '~/components/items/ButtonComponent'
export default {
	components: {
		ButtonComponent,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		button: {
			type: Object,
			required: true,
		},
		img: {
			required: true,
			type: Object,
		},
		wrapper: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.sub-section {
	max-width: var(--page);
	margin: 10em auto;
	padding: 0 var(--padding);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
}
.sub-section > * {
	flex: 0 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}
.sub-section .buttons {
	justify-content: start;
}
.sub-section .cover {
	display: block;
	padding: 5%;
	box-sizing: border-box;
	height: auto;
	width: 100%;
}
.sub-section .content {
	min-width: 50%;
}

.sub-section:nth-child(even) {
	text-align: right;
	flex-direction: row;
}
.sub-section:nth-child(odd) {
	text-align: left;
	flex-direction: row-reverse;
}
.sub-section:nth-child(even) /deep/ .button,
.sub-section:nth-child(even) .spacer.spacer-small::after {
	margin: 0 0 0 auto;
}
.sub-section:nth-child(odd) /deep/ .button,
.sub-section:nth-child(odd) .spacer.spacer-small::after {
	margin: 0 auto 0 0;
}

@media screen and (max-width: 785px) {
	.sub-section {
		text-align: left;
	}
}
</style>
