<template>
	<div class="wrapper">
		<div class="header">
			<div class="content">
				<h4
					v-if="showBreadcrumb && breadcrumbs.length"
					class="breadcrumbs"
				>
					<span
						v-for="(link, index) in breadcrumbs"
						:key="wrapper + '-' + index"
					>
						<span v-if="index != 0"> &gt; </span>
						<nuxt-link
							:to="link.path"
							class="link"
							:class="{ last: index == breadcrumbs.length - 1 }"
							>{{ link.text }}</nuxt-link
						>
					</span>
				</h4>
				<h1 class="title">{{ title }}</h1>
				<h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
				<div v-if="buttons.length" class="buttons">
					<button-component
						v-for="(button, index) in buttons"
						:key="'main-section-button-' + index + '-' + wrapper"
						:btn-path="button.path"
						:btn-class="button.class"
						:btn-text="button.text"
					/>
					<div v-if="buttons.length == 1" />
				</div>
			</div>
			<img :src="img" class="cover" :class="{ rounded: isRounded }" />
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
		subtitle: {
			type: String,
			required: false,
			default: '',
		},
		buttons: {
			type: Array,
			required: false,
			default() {
				return []
			},
		},
		img: {
			required: true,
			type: String,
		},
		wrapper: {
			type: String,
			required: true,
		},
		isRounded: {
			type: Boolean,
			required: false,
			default: false,
		},
		showBreadcrumb: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	computed: {
		breadcrumbs() {
			const steps = this.$route.fullPath.split('/')
			steps.shift()
			steps.pop()

			const breadcrumbs = []
			steps.forEach((step, index) => {
				breadcrumbs.push({
					text: step.replace(/-/g, ' '),
					path: '/' + steps.slice(0, index + 1).join('/'),
				})
			})

			return breadcrumbs
		},
	},
}
</script>

<style scoped>
.breadcrumbs .link {
	text-transform: capitalize;
	margin: 0;
	color: var(--dark-color);
	text-decoration: none;
}
.breadcrumbs .link.last {
	color: var(--primary-color);
}

.header {
	min-height: 50vh;
	max-width: var(--page);
	margin: 4em auto;
	padding: 0 var(--padding);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
}
.header > * {
	flex: 1 1 auto;
	max-width: var(--half-page);
	margin: 0 auto;
}

.header .title {
	text-transform: capitalize;
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
	min-width: 50%;
}

.header .rounded {
	border-radius: 50%;
}
</style>
