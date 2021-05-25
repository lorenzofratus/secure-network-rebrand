<!--
 * Copyright (c) 2021
 *
 * A MainSection is the first section you see in almost each page. It contains a title, 
 * optionally both a subtitles and a group of buttons, and an image. It also shows bread crumbs
 * where needed, supporting the implementation of the index pattern.
 *
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
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
						<!-- Divider skipped at the first iteration of the loop -->
						<span v-if="index != 0"> &gt; </span>
						<!-- Last one is highlighted with a different color -->
						<nuxt-link
							:to="link.path"
							class="link"
							:class="{ last: index == breadcrumbs.length - 1 }"
						>
							{{ link.text }}
						</nuxt-link>
					</span>
				</h4>
				<h1 class="title">{{ title }}</h1>
				<h2 v-if="subtitle" class="h3 subtitle">{{ subtitle }}</h2>
				<div v-if="buttons.length" class="buttons">
					<button-component
						v-for="(button, index) in buttons"
						:key="'main-section-button-' + index + '-' + wrapper"
						:btn-path="button.path"
						:btn-class="button.class"
						:btn-text="button.text"
					/>
					<!-- Empty div to keep the size of the button consistent when there is only one -->
					<div v-if="buttons.length == 1" />
				</div>
			</div>
			<img
				:src="img"
				class="cover"
				:alt="title"
				:class="{ rounded: rounded }"
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
		rounded: {
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
			// We get breadcrumbs directly from the page URL
			const steps = this.$route.fullPath.split('/')
			// Remove the host part
			steps.shift()
			// Remove current page
			steps.pop()

			const breadcrumbs = []
			steps.forEach((step, index) => {
				breadcrumbs.push({
					// Replace hyphens with spaces
					text: step.replace(/-/g, ' '),
					// Incrementally builds the path of the single breadcrumb link
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
