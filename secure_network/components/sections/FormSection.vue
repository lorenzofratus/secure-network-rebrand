<template>
	<section
		class="alt-section wave-before wave-after wave-concave-alt wave-convex-alt"
	>
		<div class="content">
			<h2 class="spacer">{{ title }}</h2>
			<form ref="form" class="form">
				<div class="fields">
					<input-component
						:label="formFields.name.label"
						:placeholder="formFields.name.placeholder"
						:name="formFields.name.label"
						:type="formFields.name.type"
					/>
					<input-component
						:label="formFields.email.label"
						:placeholder="formFields.email.placeholder"
						:name="formFields.email.label"
						:type="formFields.email.type"
					/>
				</div>
				<div class="fields">
					<input-component
						:label="formFields.subject.label"
						:placeholder="formFields.subject.placeholder"
						:name="formFields.subject.label"
						:type="formFields.subject.type"
					/>
				</div>
				<div class="fields">
					<input-component
						:label="formFields.message.label"
						:placeholder="formFields.message.placeholder"
						:name="formFields.message.label"
						:type="formFields.message.type"
					/>
				</div>
				<button-component
					:btn-path="formButton.path"
					:btn-text="formButton.text"
					:btn-class="formButton.class"
					@click="submitForm"
				/>
			</form>
		</div>
	</section>
</template>

<script>
import ButtonComponent from '../items/ButtonComponent.vue'
import InputComponent from '../items/InputComponent.vue'
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
			formFields: {
				name: {
					label: 'Full Name',
					placeholder: 'John H. Doe',
					name: 'name',
					type: 'text',
				},
				email: {
					label: 'Email Address',
					placeholder: 'john.doe@gmail.com',
					name: 'email',
					type: 'email',
				},
				subject: {
					label: 'Subject',
					placeholder: 'Security audit for our infrastructure',
					name: 'subject',
					type: 'text',
				},
				message: {
					label: 'Message',
					placeholder: 'Write your message here',
					name: 'message',
					type: 'text-area',
				},
			},
			formButton: {
				class: 'primary',
				text: 'Send Message',
			},
		}
	},
	methods: {
		submitForm() {
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
			if (!error) this.formButton.text = 'Easter Egg'
		},
	},
}
</script>

<style scoped>
.form {
	padding: 1.5em 0 0;
}
.fields {
	display: grid;
	margin: 3em 0;
	gap: 3em;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.fields:first-of-type {
	margin-top: 0;
}
</style>
