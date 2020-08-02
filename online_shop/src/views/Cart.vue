<template>
  <div class="container">
    <CheckoutModal />
    <div class="row">
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th class="text-center">Price</th>
              <th class="text-center">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <cart-item v-for="cartItem in cartItems" :key="cartItem.id" :item="cartItem"></cart-item>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <h3>Total</h3>
              </td>
              <td class="text-right">
                <h3>€{{ this.$store.state.cart.cartTotal }}</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-shopping-cart"></span>
                  Continue Shopping
                </button>
              </td>
              <td>
                <button
                  @click="handleCheckout"
                  type="button"
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Checkout
                  <span class="glyphicon glyphicon-play"></span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { postPaymentIntent } from "../stripe-config/client";
import CartItem from "../components/CartItem";
import CheckoutModal from "../components/CheckoutModal";

export default {
  components: {
    CartItem,
    CheckoutModal,
  },

  data() {
    return {
      cartItems: [],
      postPaymentIntent,
    };
  },

  methods: {
    getAllCartItems() {
      this.cartItems = this.$store.state.cart.cartItems;
    },
    routeToCheckout() {
      this.$router.push({ name: "Checkout" });
    },

    handleCheckout() {
      this.postPaymentIntent(this.cartItems);
    },
  },

  async created() {
    this.getAllCartItems();
  },
};
</script>
<style scoped></style>
