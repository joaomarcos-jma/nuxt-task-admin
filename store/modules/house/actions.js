export default {
  async getHouseRulesList({ commit }) {
    const result = await this.$axios.get('/admin/house_rules')
    if ([200].includes(result.status)) {
      commit('SET_ENTITIES', result.data.data)
    }
  },
}
