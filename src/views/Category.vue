<template>
  <div class="container col-md-6">
    <div class="row">
      <div class="text-center">
        <h3 class="display-5 mb-4">Our Categories</h3>
      </div>
    </div>
    <div class="row"></div>
  </div>
  <div class="container d-flex gap-2 flex-wrap justify-content-center">
    {{ categories[0] }}
    <!-- <CategoryBox v-for="category in categories.length" :category="category" :key="category.id" /> -->
  </div>
</template>

<script>
// import CategoryBox from "@/components/CategoryBox.vue";

export default {
  name: "Category",
  components: {
    // CategoryBox,
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