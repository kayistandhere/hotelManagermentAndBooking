<template>
     <div class="product-list">
    <h1>PAGE PRODUCTS</h1>

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
        <tr :key="index" v-for="(info, index) in infos">
          <th scope="row">{{ info.id }}</th>
          <td>{{ info.name }}</td>
          <td>{{ info.email }}</td>
          <td>{{ info.phoneNumber }}</td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import authMixin from '../mixin/auth.js';
export default {
    mixins: [authMixin],
    name: "information",
    data() {
        return {
            infos : {},
        }
    },
    created() {
        this.addAccessTokenToHeaders();
        this.getTrue();
    },
    methods:{
        getTrue(){
            this.$request.get("https://localhost:7103/user/reservation/get-successful").then((res) => {
                this.infos = res.data;
                console.log("infos = ",this.infos);
            })
        }
    },
    destroyed() {
    this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
  },
    
}
</script>

<style>

</style>