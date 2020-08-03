const state = {
  cartItems: [],
  cartTotal: 0,
};

const mutations = {
  SET_ITEM_TO_CART(state, payload) {
    let { cartItems } = state;
    state.cartItems = [...cartItems, payload];
  },

  UPDATE_CART_ITEM(state, payload) {
    const { type, updateID } = payload;
    //Find item in cart
    const itemUpdate = state.cartItems.find((item) => item.id == updateID);
    //Update found item qty
    const updatedArray = state.cartItems.map((item) => {
      if (item.id === itemUpdate.id) {
        if (type === "increment") {
          item.quantity++;
        } else if (type === "decrement") {
          item.quantity--;
        }
        return item;
      } else {
        return item;
      }
    });

    //save updated array
    state.cartItems = [...updatedArray];
  },

  REMOVE_FROM_CART(state, payload) {
    state.cartItems = [...payload];
  },

  CALCULATE_CART_TOTAL(state, payload) {
    state.cartTotal = payload;
  },
};

const actions = {
  addToCart({ commit, dispatch }, data) {
    commit("SET_ITEM_TO_CART", data);
    dispatch("calculateCartTotal");
  },

  deleteCartItem({ commit, dispatch }, itemID) {
    const updatedArr = state.cartItems.filter((item) => item.id !== itemID);
    commit("REMOVE_FROM_CART", updatedArr);
    dispatch("calculateCartTotal");
  },

  updateItemQty({ commit, dispatch }, updateData) {
    commit("UPDATE_CART_ITEM", updateData);
    dispatch("calculateCartTotal");
  },

  calculateCartTotal({ commit }) {
    let total = 0;
    state.cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
    });

    commit("CALCULATE_CART_TOTAL", total);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
