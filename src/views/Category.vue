<template>
  <div class="container col-md-6">
    <div class="row">
      <div class="text-center">
        <h3 class="display-5 mb-4">Our Categories</h3>
        <router-link :to="{name: 'Add Category'}">
            <button class="btn btn-secondary btn-sm mb-3 float-end">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="container d-flex gap-3 flex-wrap justify-content-center">
        <div v-for="category in categories" :key="category.id">
          <CategoryBox :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/CategoryBox.vue";

export default {
  name: "Category",
  components: {
    CategoryBox,
  },
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
      categories: [],
    };
  },
  methods: {
    async getCategories() {
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
    async addCategory() {
      try {
        const newCategory = {
          categoryName: this.categoryName,
          description: this.description,
          imageUrl: this.imageUrl,
        };
        console.log(newCategory);

        const res = await fetch(
          "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        );
        const data = await res.json();
        this.description = JSON.stringify(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.categories = await this.getCategories();
    console.log(this.categories);
  },
};
</script>

<style lang="scss" scoped>
</style>