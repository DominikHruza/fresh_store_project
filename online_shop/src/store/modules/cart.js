const state = {
  cartItems: [],
  cartTotal: [],
};

const mutations = {
  SET_ITEM_TO_CART(state, payload) {
    let { cartItems } = state;
    state.cartItems = [...cartItems, payload];
  },

  INCREMENT_CART_ITEM(state, payload) {
    //Find item in cart
    const itemUpdate = state.cartItems.find((item) => item.id == payload);
    //Update found item qty
    const updatedArray = state.cartItems.map((item) => {
      if (item.id === itemUpdate.id) {
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });

    //save updated array
    state.cartItems = [...updatedArray];
  },

  REMOVE_FROM_CART() {},
};

const actions = {
  addToCart({ commit }, data) {
    commit("SET_ITEM_TO_CART", data);
  },

  removeCartItem() {},

  incrementItem({ commit }, itemID) {
    commit("INCREMENT_CART_ITEM", itemID);
  },

  decrementItem() {},
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
