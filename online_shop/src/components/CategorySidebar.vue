<template>
  <div class="sidebar">
    <div class="mini-submenu">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div class="list-group">
      <span href="#" class="list-group-item sidebar-header">Categories</span>
      <li class="list-group-item category-li">
        <span type="button" @click="handleClickShowAll">
          <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
          Show All
        </span>
      </li>
      <li
        v-for="category in getCategories"
        :key="category.id_category"
        class="list-group-item category-li"
        :value="category.id_category"
      >
        <span type="button" @click="handleCateogryClick">
          <i :class="category.icon_tag"></i>
          {{ category.name }}
        </span>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    handleCateogryClick(event) {
      const categoryID = event.target.parentElement.value;
      this.$emit("categorySelected", categoryID);
    },

    handleClickShowAll() {
      this.$emit("selectedAll");
    },
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
};
</script>
<style scoped>
.sidebar {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
.sidebar-header {
  background-color: #479458;
  color: white;
  font-size: 18px;
}

.category-li {
  border: none;
  border-bottom: #479458 1px solid;
  color: black;
  font-size: 18px;
  font-weight: 500;
}

.cateogry-li.active {
  color: #479458;
  background-color: white;
}
</style>
