<template>
	<section class="text-section content">
		<div v-if="paragraphs" class="paragraphs">
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

<style></style>
