import { products } from '@/data'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const INITIAL_BUDGET = 100_000_000_000

export default new Vuex.Store({
  state: {
    products: products,
    budget: INITIAL_BUDGET,
  },
  getters: {
    receiptProducts(state) {
      return state.products.filter((product) => product.qty > 0)
    },
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    setBudget: (state, budget) => (state.budget = budget),
  },
  actions: {
    updateBudget(context, products) {
      context.commit('setProducts', products)
      const expenditure = products.reduce(
        (total, product) => total + product.price * product.qty,
        0,
      )
      context.commit('setBudget', INITIAL_BUDGET - expenditure)
    },
  },
  modules: {},
})
