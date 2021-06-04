<!--
 * Copyright (c) 2021
 *
 * A MainSection is the first section you see in almost each page. It contains a title, 
 * optionally both a subtitles and a group of buttons, and an image. It also shows bread crumbs
 * where needed, supporting the implementation of the index pattern.
 *
 * @prop title: title of the component.
 * @prop subtitle: subtitle of the component.
 * @prop type: used to append a different label to the displayed button. Introduced to increase SEO.
 * @prop buttons: array of button objects to be used for the instantiation of at most 2 ButtonComponents.
 * @prop img: url of the displayed image.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop rounded: used to denote whether or not the image should be rounded.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="wrapper">
		<div v-if="breadcrumbs.length" class="sub-nav">
			<h4 class="breadcrumbs">
				<span
					v-for="(link, index) in breadcrumbs"
					:key="'breadcrumb-' + index"
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
		</div>
		<div class="header">
			<div class="content">
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
	},
	computed: {
		breadcrumbs() {
			// We get breadcrumbs directly from the page URL
			const steps = this.$route.fullPath.split('/')
			// Remove the host part
			steps.shift()
			// Remove current page
			// steps.pop()

			const breadcrumbs = []
			steps.forEach((step, index) => {
				const breadcrumb = {
					// Replace hyphens with spaces
					text: step.replace(/-/g, ' '),
					// Incrementally builds the path of the single breadcrumb link
					path: '/' + steps.slice(0, index + 1).join('/'),
				}
				if (breadcrumb.text !== '') {
					breadcrumbs.push(breadcrumb)
				}
			})

			return breadcrumbs
		},
	},
}
</script>

<style scoped>
.sub-nav {
	position: fixed;
	top: var(--nav-height);
	left: 0;
	width: 100vw;
	z-index: 2;
	background-color: var(--background);
	transform-style: preserve-3d;
}
.sub-nav .breadcrumbs {
	width: 100%;
	max-width: var(--app);
	height: var(--sub-nav-height);
	margin: 0 auto;
	padding: 0.5em 3em;
	box-sizing: border-box;
}

.breadcrumbs {
	margin: 0;
}

.breadcrumbs .link {
	text-transform: capitalize;
	margin: 0;
	color: var(--dark-color);
	text-decoration: none;
	line-height: 1.5em;
}
.breadcrumbs .link.last {
	color: var(--primary-color);
}

.header {
	min-height: 35vh;
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
	margin: 0 auto;
}

.header .content {
	min-width: 50%;
	max-width: var(--half-page-large);
}

.header .title {
	text-transform: capitalize;
	margin: 15px 0;
}
.header .subtitle {
	margin: 15px 0 25px;
}

.header .buttons {
	justify-content: start;
	max-width: var(--half-page);
}

.header .cover {
	display: block;
	padding: 5%;
	box-sizing: border-box;
	height: auto;
	width: 100%;
	max-width: var(--half-page-small);
}
.header .cover.rounded {
	border-radius: 50%;
}

@media screen and (max-width: 855px) {
	.header .content {
		text-align: center;
	}
	.header .buttons {
		margin: 0 auto;
	}
}
</style>
