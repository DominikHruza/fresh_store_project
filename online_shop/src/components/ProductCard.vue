<template>
  <div class="colWidth">
    <div class="card m-md-2 m-lg-5">
      <img class="card-img" :src="item.image_url" alt="Vans" />
      <div class="card-body">
        <h4 class="card-title">{{ item.name }}</h4>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          ad.
        </p>
        <div class="options d-flex flex-fill"></div>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">€ {{ item.price }}</h5>
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
      console.log(itemInCart);
      if (itemInCart) {
        console.log("uso");
        await this.$store.dispatch("incrementItem", this.item.id_product);
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

<style scoped>
.card {
  width: 300px;
  margin: 30px;
  height: 30rem;
}

img {
  height: 13rem;
}
</style>
