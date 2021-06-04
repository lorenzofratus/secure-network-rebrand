<!--
 * Copyright (c) 2021
 *
 * A TimelineComponent is used to highlight how many articles, grouped by type, 
 * are available for a given year.
 *
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @prop year: year modeled by the component.
 * @prop types: array of objects, each of which contains a type and the number of elements of that type, considering the given year.
 * @prop path: path passed to the embedded ButtonComponent.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<div class="timeline-item">
		<div class="content">
			<h3 class="year h1">{{ year }}</h3>
			<div
				v-for="(type, index) in types"
				:key="'article-type-' + index + '-' + wrapper"
				class="count h3"
			>
				<b>{{ type.count }}</b> {{ type.name }}
			</div>
			<button-component
				:btn-path="path"
				btn-text="Explore"
				btn-class="secondary"
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
		wrapper: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		types: {
			type: Array,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.timeline-item {
	--timeline-padding: 2.5em;
	--bullet-size: 12px;
}
.timeline-item .content {
	position: relative;
	width: fit-content;
	max-width: var(--half-content);
	box-sizing: border-box;
	text-align: left;
	padding-left: var(--timeline-padding);
	padding-bottom: 3em;
	margin: 0 auto;
}
.timeline-item:last-of-type .content {
	padding-bottom: 0;
}
.timeline-item .year {
	margin: 0;
}
.timeline-item .count {
	text-transform: capitalize;
	padding: 0;
	margin: 0.5em 0;
	display: flex;
}
.timeline-item .count b {
	font-weight: var(--h1-font-weight);

	padding: 0 0.5em 0 0;
}
.timeline-item /deep/ .button {
	margin: 0 auto 0 0;
}

.timeline-item .content::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(-50%);
	width: var(--line-weight);
	height: 100%;
	background-color: var(--dark-color);
}
.timeline-item:last-of-type .content::before {
	height: 2em;
}

.timeline-item .content::after {
	content: '';
	position: absolute;
	top: 1em;
	left: 0;
	transform: translate(-50%, -50%);
	width: var(--bullet-size);
	height: var(--bullet-size);
	background-color: var(--primary-color);
	border-radius: 50%;
}

@media screen and (min-width: 786px) {
	.timeline-item .content {
		width: auto;
	}
	.timeline-item:nth-of-type(odd) .content {
		margin: 0 0 0 auto;
	}
	.timeline-item:nth-of-type(even) .content {
		text-align: right;
		padding-right: var(--timeline-padding);
		margin: 0 auto 0 0;
	}
	.timeline-item:nth-of-type(even) .count {
		flex-direction: row-reverse;
	}
	.timeline-item:nth-of-type(even) .count b {
		padding: 0 0 0 0.5em;
	}
	.timeline-item:nth-of-type(even) /deep/ .button {
		margin: 0 0 0 auto;
	}
	.timeline-item:nth-of-type(even) .content::before {
		left: auto;
		right: 0;
		transform: translateX(50%);
	}
	.timeline-item:nth-of-type(even) .content::after {
		left: auto;
		right: 0;
		transform: translate(50%, -50%);
	}
}
</style>
