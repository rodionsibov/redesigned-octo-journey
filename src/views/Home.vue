<template>
  <div class="product-cards-container">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductList,
  },
 
};
</script>

<style lang="scss" scoped>
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
