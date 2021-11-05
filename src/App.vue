<template>
  <div class="nav justify-content-center">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/admin/category/add"
      >Add Category</router-link
    >
    <router-link class="nav-link" to="/admin/category">Category</router-link>
  </div>
  <router-view />
</template>
