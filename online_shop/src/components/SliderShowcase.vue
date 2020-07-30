<template>
  <section id="showcase">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item carousel-image-1 active">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block text-right mb-5">
              <h1 class="display-3 heading-1">Always Fresh</h1>
              <router-link to="/shop" class="btn btn-primary btn-lg"
                >Shop Now</router-link
              >
            </div>
          </div>
        </div>

        <div class="carousel-item carousel-image-2">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block mb-5">
              <h1 class="display-3 heading-1">We Deliver to Your Door</h1>
              <router-link to="/shop" class="btn btn-primary btn-lg"
                >Shop Now</router-link
              >
            </div>
          </div>
        </div>

        <div class="carousel-item carousel-image-3">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block text-right mb-5">
              <h1 class="display-3 heading-3">Top Quality Goods</h1>
              <router-link to="/shop" class="btn btn-primary btn-lg"
                >Shop Now</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>

      <a href="#myCarousel" data-slide="next" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.carousel-item {
  height: 450px;
}

.carousel-image-1 {
  background-image: url("../assets/images/image-1.jpg");
  background-size: cover;
}
.carousel-image-2 {
  background-image: url("../assets/images/image-2.jpg");
  background-size: cover;
}
.carousel-image-3 {
  background-image: url("../assets/images/image-3.jpg");
  background-size: cover;
}
</style>
