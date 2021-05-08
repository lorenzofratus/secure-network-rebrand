export const state = () => ({
	serviceCategories: [],
	services: [],
})
export const mutations = {
	setServiceCategories(state, data) {
		state.serviceCategories = data
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
}
