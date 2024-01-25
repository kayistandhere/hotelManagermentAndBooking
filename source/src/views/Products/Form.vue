<template>
  <div class="product-create">
    <h1>ADD PRODUCT</h1>
    <router-link to="/product">back</router-link>
    <!-- khi sử dụng submit.prevent thì sẽ không còn effect load lại trang nữa -->
    <form @submit.prevent="save()">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name Product</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="product.name"
          @blur="validate()"
          v-bind:class="{ 'is-invalid': error.name }"
        />
        <div class="invalid-feedback">{{ error.name }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Product price</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="product.price"
          @blur="validate()"
          v-bind:class="{ 'is-invalid': error.price }"
        />
        <div class="invalid-feedback">{{ error.price }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >product description</label
        >
        <textarea
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="product.description"
          @blur="validate()"
          v-bind:class="{ 'is-invalid': error.description }"
        ></textarea>
        <div class="invalid-feedback">{{ error.description }}</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-warning">Cancel</button>
    </form>
  </div>
</template>




<script>
export default {
  name: "Product-form",
  data() {
    return {
      error: {
        name: "",
        price: "",
        description: "",
      },
      product: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  created(){
    let productID = this.$route.params.id;
    console.log(productID);
    if(productID) {
      this.getProduct(productID)
    }
  },
  methods: {
    validate() {
      let invalid = true;
      this.error = {
        name: "",
        price: "",
        description: "",
      };
      if (!this.product.name) {
        this.error.name = "Product name is required";
        invalid = false;
      }
      if (!this.product.price) {
        this.error.price = "Product price is required";
        invalid = false;
      } else if (!this.isNumber(this.product.price)) {
        this.error.price = "Product price must be number";
        invalid = false;
      }
      if (!this.product.description) {
        this.error.description = "Product description is required";
        invalid = false;
      }
      return invalid;
    },
    isNumber(value) {
      return /^\d+$/.test(value);
    },
    save() {
      if (this.validate()) {

        if(this.product.id){
          this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res =>{
            if(res.data.success){
              this.$router.push({name:'products.list'})
              return
            } 
            alert("Co loi ne");
          })
          return 
        }
        this.$request
          .post("http://localhost:8000/api/products", this.product)
          .then((res) => {
            if (res.data.success) {
              this.$router.push({ name: "products.list" });
              return;
            }
            alert("Co mot loi nao do");
          });
      }
    },
    getProduct(productId){
      this.$request.get(`http://localhost:8000/api/products/${productId}`).then(res => {
        this.product = res.data
      })
    }
  },
};
</script>