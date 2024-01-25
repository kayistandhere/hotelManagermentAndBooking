<template>
    <section>
      <table class="table table-hover">
        <thead>
          <tr class="bg-primary">
            <th scope="col">Customer</th>
            <th scope="col">Phone Number	</th>
            <th scope="col">Email	</th>
            <th scope="col">Address</th>
            <th scope="col">Create Date	</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="RowTable" :key="room.id" v-for="room in paginatedData">
            <th>{{ room.userName }}</th>
            <td>{{ room.phoneNumber }}</td>
            <th>{{ room.email }}</th>
            <td>{{ room.address }}</td>
            <td>{{ room.createdAt }}</td>
            <td>
              <div v-if="room.lockoutEnabled" class="borderSuccess">active</div>
              <div v-else class="borderDanger">inActive</div>
            </td>
            <td class="d-flex">
              <button class="btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter"><i
                  class="bi bi-pencil-square"></i></button> &ensp;
              <button class="btn btn btn-danger text-danger " @click="onDelete(room.id)"><i class="bi bi-x-lg"></i></button>
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
      <!-- Pagination end -->
    </section>
  </template>
  
  <script>
  import authMixin from '../mixin/auth.js';
  export default {
    mixins: [authMixin],
    name: "Customer.list",
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
        this.$request.get("https://localhost:7103/v2/admin/account/get-all").then((res) => {
          this.account = res.data;
        }).catch((err) => {
          console.error("Loi roi", err);
        });
      },
      onDelete(Id) {
        this.$request.delete(`https://localhost:7103/v2/admin/room-type/delete/${Id}`).then(res => {
          if (res.data.success) {
            this.$swal.fire('deleted', '', 'success');
            this.getAll();
          } else {
            this.$swal.fire('Ops!', '', 'error');
          }
        })
      }
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
  
  <style></style>