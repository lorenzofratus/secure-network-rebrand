<!--
 * Copyright (c) 2021
 *
 * A PersonCard is used to show syntetized information about a person. 
 * It contains the profile picture, the name and the surname of the subject.
 *
 * @prop object: the person object whose name and surname must be displayed.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<nuxt-link :to="object.path" class="circle">
		<img class="image" alt="" :src="object.img" />
		<div class="titling card interactive">
			<h3>{{ object.name }}</h3>
			<h3>{{ object.surname }}</h3>
		</div>
	</nuxt-link>
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
a {
	text-decoration: none;
}
.circle {
	position: relative;
	margin: 30% 0 2em;
}
.circle:focus {
	outline: none;
}
.circle .titling {
	text-align: center;
	padding-top: 45%;
	padding-bottom: 3em;
}
.circle:focus .titling {
	outline: auto;
	outline-color: -webkit-focus-ring-color;
}
.circle .titling h3 {
	margin: 0;
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
</style>
