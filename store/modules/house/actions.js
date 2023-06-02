export default {
  async getHouseRulesList({ commit }, params) {
    const result = await this.$axios.get('/admin/house_rules', { params })
    if ([200].includes(result.status)) {
      commit('SET_ENTITIES', result.data.data.entities)
      commit('SET_PAGINATION', result.data.data.pagination)
    }
  },
}
