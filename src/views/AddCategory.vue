<template>
  <div class="container col-md-6">
    <div class="row">
      <div class="text-center">
        <h3 class="display-5 mb-4">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <form>
        <div class="form-group mb-4">
          <label for="" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="categoryName" />
        </div>
        <div class="form-group mb-4">
          <label for="" class="form-label">Description</label>
          <textarea class="form-control" v-model="description"></textarea>
        </div>
        <div class="form-group mb-4">
          <label for="" class="form-label">Image</label>
          <input type="text" class="form-control" v-model="imageUrl" />
        </div>
        <div class="d-grid col-md-6 mx-auto">
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    async addCategory() {
      try {
        const newCategory = {
          categoryName: this.categoryName,
          description: this.description,
          imageUrl: this.imageUrl,
        };
        console.log('New Category:', newCategory);
        
        const res = await fetch(
          "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        );
        const data = await res.json();
        // this.description = JSON.stringify(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>