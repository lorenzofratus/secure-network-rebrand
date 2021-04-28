<template>
	<nav class="nav">
		<div class="content">
			<nuxt-link :to="home.path" class="logo">
				{{ home.name }}
			</nuxt-link>
			<div class="menu">
				<div
					v-for="(option, index) in menuOptions"
					:key="'menu-item-' + index"
				>
					<nuxt-link :to="option.path" class="anchor">
						{{ option.name }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			home: {
				name: 'Secure Network',
				path: '/',
			},
			menuOptions: [
				{
					name: 'Services',
					path: '/services',
				},
				{
					name: 'Areas',
					path: '/area',
				},
				{
					name: 'Team',
					path: '/team',
				},
				{
					name: 'Resources',
					path: '/respurces',
				},
				{
					name: 'About',
					path: '/about',
				},
				{
					name: 'Contacts',
					path: '/contacts',
				},
			],
		}
	},
}
</script>
<style scoped></style>
