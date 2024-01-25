<template>
    <section>
      <table class="table table-hover ">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">normalized Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="RowTable" :key="role.id" v-for="role in paginatedData">
            <th>{{ role.id.length }}</th>
            <th>{{ role.name }}</th>
            <td>{{ role.normalizedName}}</td>
            <td class="d-flex">
              <button class="btn btn btn-danger text-danger "><i class="bi bi-x-lg"></i></button> &ensp;
  
              <button class="btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter"><i
                  class="bi bi-pencil-square"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Pagination controls -->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" v-for="page in totalPages" :key="page">
            <a class="page-link" @click="changePage(page)" href="#">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </section>
  </template>
  <script>
  import authMixin from '../mixin/auth.js';
    export default {
      mixins: [authMixin],
      name: "Roles",
      data() {
        return {
          roles: [],
          perPage: 11,
          currentPage: 1,
        }
      },
      created() {
        this.addAccessTokenToHeaders();
        this.getAll();
      },
      methods: {
        changePage(page) {
          this.currentPage = page;
        },
        getAll() {
          this.$request.get("https://localhost:7103/v2/admin/role/get-all").then((res) => {
            this.roles = res.data;
          }).catch((err) => {
            console.error("Loi roi", err);
          });
        },
      },
      computed: {
        paginatedData() {
          const start = (this.currentPage - 1) * this.perPage;
          const end = start + this.perPage;
          return this.roles.slice(start, end);
        },
        totalPages() {
          return Math.ceil(this.roles.length / this.perPage);
        },
      },
      destroyed() {
        this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
      },
    
    }
  </script>
  <style 
  .></style>