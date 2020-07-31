<template>
  <div class="colWidth">
    <div class="card m-md-2 m-lg-5">
      <img class="card-img" :src="item.image_url" />
      <div class="card-body">
        <h4 class="card-title">{{ item.name }}</h4>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          ad.
        </p>
        <div class="buy d-flex justify-content-around text-align-center">
          <!-- IF item on offer -->
          <div v-if="item.offer_price" class="prices-section">
            <del>
              <span class="amount">€{{item.price}}</span>
            </del>
            <ins>
              <span class="amount">€{{item.offer_price}}</span>
            </ins>
          </div>
          <!-- Regural price -->
          <div v-else class="prices-section">
            <ins>
              <span class="amount">€{{item.price}}</span>
            </ins>
          </div>
          <button href="#" class="btn btn-danger mt-3" @click="handleAddClick">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colWidth", "item"],

  methods: {
    async handleAddClick() {
      const { cartItems } = this.$store.state.cart;
      //Check if item already in cart
      const itemInCart = cartItems.find(
        (item) => item.id === this.item.id_product
      );

      if (itemInCart) {
        await this.$store.dispatch("updateItemQty", {
          updateID: this.item.id_product,
          type: "increment",
        });
        return;
      }

      const cartItem = {
        id: this.item.id_product,
        name: this.item.name,
        price: this.item.price,
        imageUrl: this.item.image_url,
        quantity: 1,
      };
      this.$store.dispatch("addToCart", cartItem);
    },
  },
};
</script>

<style scoped  lang="scss">
.card {
  width: 300px;
  margin: 30px;
  height: 30rem;
}

img {
  height: 13rem;
}
.prices-section {
  margin-top: auto;
  del {
    color: rgba(red, 0.5);
    text-decoration: none;
    position: relative;
    font-size: 20px;
    &:before {
      content: " ";
      display: block;
      width: 100%;
      border-top: 2px solid rgba(red, 0.8);
      height: 12px;

      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(-40deg);
    }
  }
  ins {
    color: green;
    font-size: 22px;
    text-decoration: none;
    padding: 1em 1em 1em 0.5em;
  }
}
</style>
