export const state = () => ({
	serviceCategories: [],
	services: [],
})
export const mutations = {
	setServiceCategories(state, data) {
		state.serviceCategories = data
	},
	setServices(state, data) {
		state.services = data
	},
}

export const actions = {
	async getServiceCategories({ commit, state }) {
		if (state.serviceCategories.length === 0) {
			const { data } = await this.$axios.get(
				`${process.env.BASE_URL}/api/service-categories`
			)
			commit('setServiceCategories', data)
		}
		return state.serviceCategories
	},
	async getServices({ commit, state }) {
		if (state.services.length === 0) {
			const { data } = await this.$axios.get(
				`${process.env.BASE_URL}/api/services`
			)
			commit('setServices', data)
		}
		return state.services
	},
}
