import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    product: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        );
        const data = await res.json();
        commit('setProducts', data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProduct({ commit }, productId) {
      try {
        const res = await fetch(
          `https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products/${productId}`
        );
        const data = await res.json();
        commit('setProduct', data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
