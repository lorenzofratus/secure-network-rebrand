export const state = () => ({
	services: [],
})
export const mutations = {
	setServices(state, data) {
		state.services = data
	},
}

export const actions = {
	async getServiceCategories({ commit, state }) {
		if (state.services.length === 0) {
			const { data } = await this.$axios.get(
				`${process.env.BASE_URL}/api/service-categories`
			)
			commit('setServices', data)
		}
		return state.services
	},
}
