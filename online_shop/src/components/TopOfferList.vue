<template>
  <div class="container">
     <div calss="row">
      <h1>This Month top offers</h1>
    </div>
    <div class="row justify-content-center">
      <product-card
        v-for="(item, index) in topOfferItems"
        :key="index"
        colWidth="col-md-6 col-lg-3"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard";
export default {
  data() {
    return {
      topOfferItems: [],
    };
  },

  components: {
    ProductCard,
  },

  methods: {
    async getTopOfferItems() {
      const result = await axios.get(
        "/api/product/top-sellers"
      );

      console.log(result)
      this.topOfferItems = result.data;
    },
  },

  created() {
    this.getTopOfferItems();
  },
};
</script>

<style scoped>
  h1 {
    text-transform: uppercase !important;
     text-align: center;
     margin-top: 5rem;
  }

  
</style>