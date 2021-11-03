<template>
  <div class="card">
    <div class="color-variant">{{ product.colorVariant }}</div>
    <h3>
      {{ product.name }}
    </h3>
    <p class="price">
      <span class="currency">$</span>{{ product.price.toFixed(2) }}
    </p>
    <p class="description">{{ description }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View Product
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="arrow"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5%;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  background-color: navy;
  color: white;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.8);

  h3 {
    font-size: 3.5rem;
    font-weight: 100;
    margin: 0;
    padding-bottom: 5px;
    color: whitesmoke;
    border-bottom: 1px solid lightseagreen;
    overflow-wrap: break-word;
  }

  p.price {
    align-self: end;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
  }

  span.currency {
    font-weight: initial;
    color: lightblue;
  }

  p.description {
    color: whitesmoke;
    font-size: 1rem;
  }

  button.view-product-button {
    align-self: start;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: blue;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 0 20px 0;
    transition: 0.2s letter-spacing;
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.1);

    &:hover {
      letter-spacing: 2px;
    }

    &:active {
      opacity: 0.7;
    }
  }

  .arrow {
    width: 20px;
    margin-left: 5px;
  }

  .color-variant {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    height: 10px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    background-color: blue;
    color: white;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.2);
  }
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>
