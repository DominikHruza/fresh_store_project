<template>
  <div class="container">
    <form enctype="multipart/form-data">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Product name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Price"
            v-model="price"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
          <select
            id="inputState"
            class="form-control"
            v-model="selectedCategory"
          >
            <option
              v-for="category in categories"
              :key="category.id_category"
              :value="category.id_category"
              >{{ category.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Image</span>
        </div>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            @change="handleFileInput"
          />
          <label class="custom-file-label" for="inputGroupFile01"
            >Choose file</label
          >
        </div>
      </div>
      <button @click="handleSubmit" type="button" class="btn btn-primary mt-3">
        Add product
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      price: "",

      image: null,
      categories: [],
      selectedCategory: 1,
    };
  },

  methods: {
    handleFileInput(event) {
      this.image = event.target.files[0];
    },

    handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("category", parseInt(this.selectedCategory));
      formData.append("price", parseFloat(this.price));
      formData.append("image", this.image);

      axios.post("/admin/add-product", formData);
    },

    async getProductCategories() {
      const response = await axios.get("/admin/categories");
      this.categories = response.data;
    },
  },

  created() {
    this.getProductCategories();
  },
};
</script>

<style></style>
