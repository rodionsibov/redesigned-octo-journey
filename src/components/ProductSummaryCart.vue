<template>
  <div class="card">
    <h3>
      {{ product.name }}
    </h3>
    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">Description: ${{ description }}</p>
    <p class="text-muted">{{ product.typeVariant }}</p>
    <button class="view-product-button">View</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.content.substring(0, 100) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  margin: 5%;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 20px lightgray;

  h5.price {
    color: gray;
  }

  p.description {
    font-size: 0.85rem;
  }

  p.text-muted {
    color: gray;
  }

  button.view-roduct-button {
    padding: 10px;
    
  }
}
</style>
