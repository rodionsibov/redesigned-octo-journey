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
  overflow-x: hidden;
}

body {
  background-color: whitesmoke;
}

h1 {
  color: lightgray;
}

.nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: rgba($color: blue, $alpha: 0.9);
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
  line-height: 30px;
  z-index: 1;

  a {
    font-weight: bold;
    color: whitesmoke;
    margin: 0 5px;
    transition: 0.2s color;

    &:active {
      color: navy;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
