<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
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
