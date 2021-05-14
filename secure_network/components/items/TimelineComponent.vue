<template>
	<div class="timeline-item">
		<div class="content">
			<h3 class="year h1">{{ year }}</h3>
			<div class="count h3">
				<b>{{ newsCount }}</b> News
			</div>
			<div class="count h3">
				<b>{{ researchCount }}</b> Research
			</div>
			<button-component
				:btn-class="'secondary'"
				:btn-path="path"
				:btn-text="'Explore'"
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
		year: {
			type: Number,
			required: true,
		},
		newsCount: {
			type: Number,
			required: true,
		},
		researchCount: {
			type: Number,
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
	padding-bottom: 6em;
	margin: 0 auto;
}
.timeline-item:last-of-type .content {
	padding-bottom: 0;
}
.timeline-item .year {
	margin: 0;
}
.timeline-item .count {
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
