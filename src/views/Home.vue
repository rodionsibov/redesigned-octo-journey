<template>
  <h1>Home</h1>
  <div class="product-cards-container">
    <product-summary-card
      v-for="product in items"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductSummaryCard from "@/components/ProductSummaryCart.vue";

export default {
  name: "Home",
  components: { ProductSummaryCard },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    this.items = await this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
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
