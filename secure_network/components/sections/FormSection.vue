<!--
 * Copyright (c) 2021
 *
 * A FormSection is a section which allow the user to contact the responsible of 
 * the enterprise.
 *
 * @prop title: title of the section.
 * @prop wrapper: identify the name of the page that wraps the component, used to generate unique names for :key directive.
 * @author Lorenzo Fratus 
 * @author Simone Orlando 
 * @author Cristian C. Spagnuolo 
 -->
<template>
	<section
		class="
			alt-section
			wave-before wave-after wave-concave-alt wave-convex-alt
		"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<form ref="form" class="form">
				<div
					v-for="(group, i) in formFields"
					:key="'group-' + i + '-' + wrapper"
					class="group"
				>
					<input-component
						v-for="(field, j) in group"
						:key="'field-' + i + '-' + j + '-' + wrapper"
						:label="field.label"
						:placeholder="field.placeholder"
						:name="field.label"
						:type="field.type"
					/>
				</div>
				<button-component
					:btn-text="buttonText"
					btn-class="primary"
					@click="submitForm"
				/>
			</form>
		</div>
	</section>
</template>

<script>
import ButtonComponent from '~/components/items/ButtonComponent.vue'
import InputComponent from '~/components/items/InputComponent.vue'
export default {
	components: { ButtonComponent, InputComponent },
	props: {
		title: {
			type: String,
			required: true,
		},
		wrapper: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			// The fields of a sub-array are displayed on the same line
			formFields: [
				[
					{
						label: 'Full Name',
						placeholder: 'John H. Doe',
						name: 'name',
						type: 'text',
					},
					{
						label: 'Email Address',
						placeholder: 'john.doe@gmail.com',
						name: 'email',
						type: 'email',
					},
				],
				[
					{
						label: 'Subject',
						placeholder: 'Security audit for our infrastructure',
						name: 'subject',
						type: 'text',
					},
				],
				[
					{
						label: 'Message',
						placeholder: 'Write your message here',
						name: 'message',
						type: 'text-area',
					},
				],
			],
			buttonText: 'Send Message',
		}
	},
	methods: {
		// Actually doesn't submit the form, only validates it and then gives a feedback changing the value of the button text
		submitForm(e) {
			e.preventDefault()
			let error = false
			for (const field of this.$refs.form.elements) {
				if (!field.reportValidity()) {
					field.classList.add('error')
					error = true
					break
				} else {
					field.classList.remove('error')
				}
			}
			if (!error) this.buttonText = 'Easter Egg'
		},
	},
}
</script>

<style scoped>
.form {
	padding: 1.5em 0 0;
}
.group {
	display: grid;
	margin: 3em 0;
	gap: 3em;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.group:first-of-type {
	margin-top: 0;
}
</style>
