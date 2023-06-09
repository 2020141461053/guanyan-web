import { createStore } from 'vuex'

export default createStore({
  state: {
    Menus:[],
    username: window.localStorage.getItem('username') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
  },
  getters: {
  },
  mutations: {
    initMenu (state, menus) {
      state.Menus = menus
    },
    login (state, data) {
      state.username = data
      window.localStorage.setItem('username', JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
