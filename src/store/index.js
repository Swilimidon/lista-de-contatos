import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lista: undefined
  },
  mutations: {
    getLista (state) {
      state.lista = window.localStorage.getItem(JSON.stringify('lista'))
      console.log(state.lista)
    },
    salvaLista (state, payload) {
      state.lista.push(payload)
      console.log(state.lista)
      this.$store.dispatch('GETLISTA')
    }
  },
  actions: {
    GETLISTA ({ commit }) {
      commit('getLista')
    },
    SALVAR ({ commit }) {
      commit('salvaLista')
    }
  },
  modules: {}
})
