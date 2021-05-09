<template>
	<section class="text-section">
		<div v-if="paragraphs" class="paragraphs content">
			<p
				v-for="(p, index) in paragraphs"
				:key="'paragraph-' + index + '-' + wrapper"
				:class="{ centered: centered }"
			>
				{{ p }}
			</p>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		paragraphs: {
			type: Array,
			required: false,
			default() {
				return []
			},
		},
		centered: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>

<style>
p.centered {
	text-align: center;
}
</style>
