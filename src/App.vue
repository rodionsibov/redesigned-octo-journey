<template>
  <div class="nav">
    <router-link :class="{ active: $route.name === 'Home' }" to="/"
      >Home</router-link
    >
    <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
      >Cart</router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  margin: 30px 0;
  padding: 0;
}

body {
  background-color: whitesmoke;
}

.nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  height: 30px;
  background-color: rgba($color: black, $alpha: 0.6);
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.4);
  line-height: 30px;
  z-index: 100;
  backdrop-filter: blur(2px);

  a {
    font-weight: bold;
    color: whitesmoke;
    margin: 0 10px;
    transition: 0.2s color, 0.2s transform;
    text-decoration: none;

    &:hover {
      transform: translateY(-1px);
      }

    &:active {
      opacity: 0.8;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
