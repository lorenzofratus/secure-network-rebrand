<template>
	<div class="header">
		<div class="content">
			<h2>{{ title }}</h2>
			<p>{{ description }}</p>
			<button-component
				:btn_class="button.class"
				:btn_path="button.path"
				:btn_text="button.text"
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
.header {
	min-height: 50vh;
	max-width: var(--page);
	margin: 4em auto;
	padding: 0 var(--padding);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
	text-align: right;
}
.header > * {
	flex: 0 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}
.header .buttons {
	justify-content: start;
}
.header .cover {
	display: block;
	padding: 5%;
	box-sizing: border-box;
	height: auto;
	width: 100%;
}
.header .content {
	min-width: 45%;
}

.header:nth-child(odd) {
	text-align: left;
	flex-direction: row-reverse;
}

.header:nth-child(even) /deep/ .button {
	margin: 0 0 0 auto;
}

.header:nth-child(odd) /deep/ .button {
	margin: 0 auto 0 0;
}

@media screen and (max-width: 785px) {
	.header {
		text-align: left;
	}
}
</style>
