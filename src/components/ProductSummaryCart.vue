<template>
  <div class="card" :style="bgImage">
    <div class="badge">{{ product.colorVariant }}</div>
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
    bgImage() {
      return `background-image: url(https://picsum.photos/400?random=${Math.floor(
        Math.random() * 20
      )})`;
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
  color: whitesmoke;
  box-shadow: 5px 5px 10px rgba($color: black, $alpha: 0.5);
  border-radius: 12px;
  transition: 0.2s transform;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    backdrop-filter: blur(2px);
    background-color: black;
    opacity: 0.7;
  }

  &:hover {
    transform: scale(0.99);
  }

  h3 {
    position: relative;
    font-size: 3.5rem;
    font-weight: 100;
    margin: 0;
    padding-bottom: 5px;
    color: whitesmoke;
    border-bottom: 3px solid indigo;
    overflow-wrap: break-word;
    z-index: 1;
  }

  h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    animation: line 5s 3 ease-in-out alternate;
    border-bottom: 3px solid whitesmoke;
    opacity: 0.3;
  }

  @keyframes line {
    from {
      width: 100%;
    }
  }

  p.price {
    align-self: end;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
    z-index: 1;
  }

  span.currency {
    font-weight: initial;
    opacity: 0.5;
    z-index: 1;
  }

  p.description {
    color: whitesmoke;
    font-size: 1rem;
    z-index: 1;
  }

  button.view-product-button {
    align-self: start;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: indigo;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 0 20px 0;
    transition: 0.2s letter-spacing;
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.1);
    z-index: 1;

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

  .badge {
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
    background-color: indigo;
    color: white;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.2);
    z-index: 1;
  }
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>