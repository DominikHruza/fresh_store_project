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
          <a href="#" class="btn btn-danger mt-3">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colWidth", "item"],
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
