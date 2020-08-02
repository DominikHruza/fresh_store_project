<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({}),

  methods: {
    ...mapActions(["fetchCategories"]),
  },

  async created() {
    await this.fetchCategories();
  },
};
</script>
