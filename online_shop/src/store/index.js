import Vue from "vue";
import Vuex from "vuex";
import shop from "./modules/shop";
import cart from "./modules/cart";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    categories: [],
  },

  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = [...payload];
    },

    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    async fetchCategories({ commit }) {
      const response = await axios.get("/admin/categories");
      commit("SET_CATEGORIES", response.data);
    },

    isLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
  },

  getters: {
    getCategories(state) {
      return state.categories;
    },
  },

  modules: {
    shop,
    cart,
  },
});
