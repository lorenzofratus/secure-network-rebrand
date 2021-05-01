<template>
	<section class="alt-section wave-before wave-after">
		<div class="content">
			<h2>{{ title }}</h2>
			<div class="buttons">
				<button-component
					v-for="(btn, index) in buttons"
					:key="'filter-button-' + index + '-' + wrapper"
					:button="btn"
					@click="btn.filter"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonComponent from '../items/ButtonComponent.vue'
export default {
	components: { ButtonComponent },
	props: {
		title: {
			type: String,
			required: true,
		},
		wrapper: {
			type: String,
			required: true,
		},
		buttons: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped>
.alt-section {
	position: relative;
	background-color: var(--alt-background);
	margin: var(--wave-height) 0;
	padding: var(--padding);
}

.alt-section::before {
	background-image: url('/waves/concave-alt.svg');
}
.alt-section::after {
	background-image: url('/waves/convex-alt.svg');
}

.alt-section .content {
	max-width: var(--content);
	margin: 0 auto;
}
.alt-section h2 {
	position: relative;
	text-align: center;
	margin-bottom: 2em;
	margin-bottom: calc(2em + var(--line-weight));
}
.alt-section h2::after {
	content: '';
	position: absolute;
	bottom: -1em;
	left: 50%;
	transform: translateX(-50%);
	width: var(--divider-width);
	height: var(--line-weight);
	border-radius: var(--line-radius);
	background-color: var(--primary-color);
}
</style>
