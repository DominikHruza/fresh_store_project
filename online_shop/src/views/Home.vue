<template>
  <div class="home">
    <section>
      <SliderShowcase />
      <TopOfferList />
    </section>
  </div>
</template>

<script>
import SliderShowcase from "../components/SliderShowcase";
import TopOfferList from "../components/TopOfferList";

export default {
  name: "Home",

  data() {
    return {};
  },
  methods: {},
  components: {
    TopOfferList,
    SliderShowcase,
  },
};
</script>
