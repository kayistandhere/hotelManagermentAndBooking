<template>
    <section>
      <table class="table table-hover">
        <thead>
          <tr class="bg-primary">
            <th scope="col">Id</th>
            <th scope="col">Room Name</th>
            <th scope="col">Room Description </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="RowTable" :key="room.id" v-for="room in paginatedData">
            <th>{{ room.id }}</th>
            <th>{{ room.name }}</th>
            <td>{{ room.description }}</td>
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
    name: "roomType",
    data() {
      return {
        attachService: [],
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
        this.$request.get("https://localhost:7103/v2/admin/service-attach/get-all").then((res) => {
          this.attachService = res.data;
        }).catch((err) => {
          console.error("Loi roi", err);
        });
      },
      onDelete(Id) {
        this.$request.get(`https://localhost:7103/v2/admin/room-type/delete/${Id}`).then(res => {
          if (res.data.success) {
            console.log("Do you wait delete ?")
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
        return this.attachService.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.attachService.length / this.perPage);
      },
    },
    destroyed() {
      this.removeAccessTokenFromHeaders();
    },
  
  }
  </script>
  
  <style></style>