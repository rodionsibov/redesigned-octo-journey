<template>
  <div>
    <h1 class="my-3 text-center">Welcome to Home Page</h1>
  </div>

  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/900?random=0" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/901?random=1" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/901?random=2" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
</style>
