<template>
	<div class="sub-section">
		<img :src="person.img" class="cover rounded" />
		<div class="content">
			<h2 class="spacer spacer-small">
				{{ person.name + ' ' + person.surname }}
			</h2>
			<p>{{ abstract(person.text) }}</p>
			<button-component
				:btn-class="btnClass"
				:btn-path="person.path"
				:btn-text="btnText"
			/>
		</div>
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
		person: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			btnClass: 'secondary',
			btnText: 'Read More',
		}
	},
	methods: {
		abstract(text) {
			const count = 15
			let words = text.split(/\s|\n/)
			if (words.length <= count) return words.join(' ')
			words = words.splice(0, count)
			return words.join(' ') + ' ...'
		},
	},
}
</script>

<style scoped>
.sub-section {
	max-width: var(--page);
	margin: 0 auto 3em;
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
	text-align: left;
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

.sub-section /deep/ .button {
	margin: 0 auto 0 0;
}

@media screen and (max-width: 785px) {
	.sub-section {
		text-align: left;
	}
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

.sub-section .rounded {
	border-radius: 50%;
}
</style>
