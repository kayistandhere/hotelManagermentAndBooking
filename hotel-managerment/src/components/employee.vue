<template>
  <section>
    <table class="table table-hover ">
      <thead>
        <tr>
          <th scope="col">Account</th>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">CMND </th>
          <th scope="col">Phone Number</th>
          <th scope="col">Role</th>
          <th scope="col">status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="RowTable" :key="account.id" v-for="account in paginatedData">
          <th>{{ account.userName }}</th>
          <td>{{ account.email }}</td>
          <td>{{ account.name }}</td>
          <td>{{ account.address }}</td>
          <td>{{ account.cmnd }}</td>
          <td>{{ account.phoneNumber }}</td>
          <td>{{ account.roles }}</td>
          <td>
            <div v-if="account.lockoutEnabled" class="borderSuccess">active</div>
            <div v-else class="borderDanger">inActive</div>
          </td>
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
    name: "Employee.list",
    data() {
      return {
        account: [],
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
        this.$request.get("https://localhost:7103/v2/admin/account/get-employee").then((res) => {
          this.account = res.data;
        }).catch((err) => {
          console.error("Loi roi", err);
        });
      },
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.account.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.account.length / this.perPage);
      },
    },
    destroyed() {
      this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
    },
  
  }
</script>
<style 
.></style>