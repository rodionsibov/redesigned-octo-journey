<template>
  <div class="nav">
    <router-link :class="{ active: $route.name === 'Home' }" to="/"
      >Home</router-link
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
  margin: 40px 0;
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
  align-items: center;
  padding: 10px 0;
  width: 100%;
  height: 40px;
  background-color: rgba($color: white, $alpha: 0.9);
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
  z-index: 100;
  backdrop-filter: blur(2px);

  a {
    font-weight: bold;
    color: black;
    margin: 0 10px;
    transition: 0.2s opacity;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.7;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
