export default ({ store, redirect }) => {
  if (!store.state.config.isLoggedIn) {
    return redirect('/')
  }
}
