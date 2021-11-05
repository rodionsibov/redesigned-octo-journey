<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3 class="display-5 mb-4">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <form>
        <div class="form-group mb-4">
          <label for="" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="catagoryName" />
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catagoryName: "",
      description: "",
      imageUrl: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>