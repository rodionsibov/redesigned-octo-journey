<template>
product
  <!-- <ProductCard :product="product" /> -->
</template>

<script>
// import ProductCard from "@/components/ProductCard.vue";

export default {
  computed: {
      product() {
          return this.$store.state.product
      }
  },
  components: {
    // ProductCard,
  },
};
</script>