export default {
  changeLoading({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
  verifyAuth({ commit }) {
    const hashValid = /^[a-f0-9]{64}$/gi
    const isAuth = hashValid.test(this.$config.apiSecret)
    commit('SET_AUTH', isAuth)
  },
}
