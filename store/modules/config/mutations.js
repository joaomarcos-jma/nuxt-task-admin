const mutations = {
  SET_LOADING(state, value) {
    state.isLoading = value
  },
  SET_ALERT(state, value) {
    state.alert = value
  },
  SET_AUTH(state, value) {
    state.isLoggedIn = value
  },
}
export default mutations
