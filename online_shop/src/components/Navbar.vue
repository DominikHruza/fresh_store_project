<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" href="#">Fresh Stop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/shop" class="nav-link" href="#">
              Shop
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" href="#">
              <i class="fas fa-shopping-cart mr-1"></i> Cart
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #479458 !important;
  color: white;
  text-transform: uppercase;
}
.navbar .nav-link {
  font-size: 14px;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.navbar .nav-item.active {
  font-size: 14px;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
