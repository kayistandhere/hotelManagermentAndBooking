<template>
  <div class="product-list">
    <h1>PAGE PRODUCTS</h1>
    <router-link to="/product/create">Add product</router-link>

    <table class="table table-bordered text-start">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(product, index) in products">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>
            <router-link :to="{name: 'product.edit' , params:{id: product.id}}">
            <button type="button" class="btn btn-primary">Edit</button> &nbsp;
          </router-link>
            <button
              type="button"
              class="btn btn-danger"
              @click="onDelete(product.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Product-list",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$request.get("https://localhost:7103/user/room/get-all").then((res) => {  //http://localhost:8000/api/products
        this.products = res.data;
      });
    },
    onDelete(productId) {
      this.$swal
        .fire({
          title: "Do you want to save the changes?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
          denyButtonText: `Don't save`,
        })
        .then((result) => {
          if(result.isConfirmed){
            this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(res =>{
              if(res.data.success) {
                this.$swal.fire('deleted' , '' , 'success');
                this.getAll();
              }else {
                this.$swal.fire('Ops!' , '' , 'error');
              }
            })
          }
        });
    },
  },
};
</script>
