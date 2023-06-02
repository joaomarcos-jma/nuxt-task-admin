import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import config from './modules/config/index.js'
import house from './modules/house/index.js'

Vue.use(Vuex)

export default () =>
  new Store({
    modules: {
      config,
      house,
    },
  })
