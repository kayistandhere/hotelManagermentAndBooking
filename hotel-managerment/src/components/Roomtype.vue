<template>
  <section>
  
    <div class="col-lg-12 d-flex">
      <button type="button" class="bg-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
        Create Room &ensp; <i class="bi bi-plus-square"></i>
      </button>
    </div>
    &ensp;
    <table class="table table-hover">
      <thead>
        <tr class="bg-primary">
          <th scope="col">Room Id</th>
          <th scope="col">Room Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="RowTable" :key="room.id" v-for="room in paginatedData">
          <th>{{ room.id }}</th>
          <td>{{ room.typeName }}</td>
          <td class="d-flex">
            <button class="btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter1" @click="saveId(room.id)">
              <i class="bi bi-pencil-square"></i>
            </button>
            &ensp;
            <button class="btn btn btn-danger text-danger" @click="onDelete(room.id)">
              <i class="bi bi-x-lg"></i>
            </button>
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
    <!-- Model create roomType -->
    <div class="modal fade rounded" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              CREATE FORM
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">...</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="text-start" @submit.prevent="addRoomType">
              <div class="row">
                <div class="mb-3 col-sm-9">
                  <label>Type Name</label>
                  <input class="form-control" id="inputEmail4" type="text" data-bs-original-title="" title=""
                    v-model="formData.typeName" />
                </div>
              </div>
              <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary" >Save changes</button>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <!-- Modal create end -->
    <!-- Model update start -->
    <div class="modal fade rounded" id="exampleModalCenter1" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              UPDATE FORM
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">...</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="text-start" @submit.prevent="UpdateRoomType">
              <div class="row">
                <div class="mb-3 col-sm-9">
                  <label>Type Name</label>
                  <input class="form-control" id="inputEmail4" type="text" data-bs-original-title="" title=""
                    v-model="formData.typeName" />
                </div>
              </div>
              <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary" >Save changes</button>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <!-- Model update end -->
  </section>
</template>

<script>
import authMixin from "../mixin/auth.js";
export default {
  mixins: [authMixin],
  name: "roomType",
  data() {
    return {
      roomType: [],
      formData : {
        typeName : '',
      },
      idUpdate : '',
      perPage: 11,
      currentPage: 1,
    };
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
      this.$request
        .get("https://localhost:7103/v2/admin/room-type/get-all")
        .then((res) => {
          this.roomType = res.data;
        })
        .catch((err) => {
          console.error("Loi roi", err);
        });
    },
    onDelete(Id) {
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$request
            .get(`https://localhost:7103/v2/admin/room-type/delete/?id=${Id}`)
            .then((res) => {
              if (res.data.statusCode == 1) {
                this.getAll();
                this.$swal.fire("Deleted!", '', "success");
              }
            });

        }
      });
    },
    addRoomType() {
      this.$request.post("https://localhost:7103/v2/admin/room-type/create", this.formData).then((res) => {
        if (res.data.statusCode == 1) {
          this.getAll();
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
          })
        } else {
          this.$swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
          });
        }
      })
    },
    saveId(roomId){
        this.idUpdate = roomId;
    },
    UpdateRoomType() {
      this.$request.post(`https://localhost:7103/v2/admin/room-type/update?id=${this.idUpdate}`, this.formData).then((res) => {
        if (res.data.statusCode == 1) {
          this.getAll();
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Updated successfully',
            showConfirmButton: false,
            timer: 1000
          })
        } else {
          this.$swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Updated Wrong ! ',
            showConfirmButton: false,
            timer: 1000
          });
        }
      })
    },
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.roomType.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.roomType.length / this.perPage);
    },
  },
  destroyed() {
    this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
  },
};
</script>

<style></style>


