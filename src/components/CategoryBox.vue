<template>
  <div class="card" style="width: 18rem">
    <img :src="category.imageUrl" alt="" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ category.name }}</h5>
      <p class="card-text">{{ category.content.substring(0, 90) }}...</p>
      <router-link to="#" class="btn btn-primary">go somethere</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
};
</script>

<style>
</style>