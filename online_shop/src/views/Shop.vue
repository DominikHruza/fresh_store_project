<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2 pt-5 m-3">
        <category-sidebar @categorySelected="handleCategorySelect" @selectedAll="handleSelectAll"></category-sidebar>
      </div>
      <div class="col-sm-12 col-md-8">
        <div class="row justify-content-center">
          <p>{{this.$store.loading}}</p>
          <ProductCard
            v-for="product in products"
            :key="product.id_product"
            :item="product"
            colWidth="col-md-1 col-lg-1"
          />
        </div>
        <Loader v-if="this.$store.state.loading" />
      </div>
    </div>
    <Observer @intersect="getProducts" />
  </div>
</template>

<script>
import axios from "axios";
import Observer from "../components/Observer";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default {
  components: {
    CategorySidebar,
    ProductCard,
    Observer,
    Loader,
  },

  data() {
    return {
      categorySelected: null,
      products: [],
      page: 1,
    };
  },

  methods: {
    async getProducts() {
      if (!this.$store.state.loading)
        if (!this.categorySelected) {
          //Only if all products are selected
          await this.getAllProducts();
        } else {
          await this.getProductByCategory(this.categorySelected);
        }
    },
    async getAllProducts() {
      this.$store.dispatch("isLoading", true);
      const response = await axios.get(
        `/api/product/get-products?page=${this.page}`
      );
      this.products = [...this.products, ...response.data];
      this.$store.dispatch("isLoading", false);
      this.page++;
    },

    async getProductByCategory(categoryID) {
      this.$store.dispatch("isLoading", true);
      const response = await axios.get(
        `/api/product/get-products?category=${categoryID}&page=${this.page}`
      );

      this.products = [...this.products, ...response.data];
      this.$store.dispatch("isLoading", false);
      this.page++;
    },

    handleCategorySelect(categoryID) {
      this.page = 1;
      this.products = [];
      this.categorySelected = categoryID;
    },

    handleSelectAll() {
      this.page = 1;
      this.products = [];
      this.categorySelected = null;
    },
  },
};
</script>


<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
}
</style>
