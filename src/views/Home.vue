<template>
  <ProductDescriptionDrawer
    :product="product"
    :active="active.product_drawer"
  />
  <div class="product-cards-container">
    <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
      @view-product="viewProduct($event)"
    />
  </div>
</template>

<script>
import ProductSummaryCard from "@/components/ProductSummaryCart.vue";
import ProductDescriptionDrawer from "@/components/ProductDescriptionDrawer.vue";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      items: [],
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  async created() {
    this.items = await this.getProducts();
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      console.log(this.product);
    },
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
