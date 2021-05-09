export const state = () => ({
	serviceCategories: [],
	services: [],
	people: [],
})
export const mutations = {
	setServiceCategories(state, data) {
		state.serviceCategories = data
	},
	setServices(state, data) {
		state.services = data
	},
	setPeople(state, data) {
		state.people = data
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
	async getPeople({ commit, state }) {
		if (state.people.length === 0) {
			const { data } = await this.$axios.get(
				`${process.env.BASE_URL}/api/people`
			)
			commit('setPeople', data)
		}
		return state.people
	},
}
