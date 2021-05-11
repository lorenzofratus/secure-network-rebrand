<template>
	<nuxt-link :to="path" class="card circle interactive">
		<img class="image" :src="img" />
		<h3>{{ name }}</h3>
		<h3>{{ surname }}</h3>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
	},
}
</script>

<style>
.circle {
	position: relative;
	text-align: center;
	padding-top: 45%;
	padding-bottom: 3em;
	margin: 30% 0 2em;
}

.circle .image {
	position: absolute;
	width: 70%;
	height: auto;
	border-radius: 50%;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.19);
}

.circle h3 {
	margin: 0;
}
</style>
