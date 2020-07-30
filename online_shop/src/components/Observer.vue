<template>
  <div class="observer"></div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },

  methods: {
    callback([entry]) {
      if (entry.isIntersecting) {
        this.$emit("intersect");
      }
    },
  },

  mounted() {
    this.observer = new IntersectionObserver(this.callback);
    this.observer.observe(this.$el);
  },
};
</script>

<style>
</style>