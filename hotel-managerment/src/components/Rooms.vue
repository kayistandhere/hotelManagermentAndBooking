<template>
  <div>
    <div class="col-lg-12 d-flex">
      <input type="text" v-model="searchQuery" placeholder="Tìm kiếm ..." >
    </div>
    <div class="col-lg-12 d-flex">
      <button type="button" class="borderSuccess btn-sm">
        Create Room &ensp; <i class="bi bi-plus-square"></i>
      </button>
    </div>
    <br />
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Room name</th>
          <th scope="col">Room Number</th>
          <th scope="col">Roomtype name</th>
          <th scope="col">Price</th>
          <th scope="col">Discount</th>
          <th scope="col">People Number</th>
          <th scope="col">Single Bed</th>
          <th scope="col">Double Bed</th>
          <th scope="col">Attached service</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="RowTable" :key="room.id" v-for="room in (paginatedData , fiterSearch)">
          <th>{{ room.name }}</th>
          <td>{{ room.roomNumber }}</td>
          <td>{{ room.roomTypeName }}</td>
          <td>{{ room.currentPrice }}</td>
          <td>{{ room.discountPrice }}</td>
          <td>{{ room.peopleNumber }}</td>
          <td>{{ room.numberOfSimpleBed }}</td>
          <td>{{ room.numberOfDoubleBed }}</td>
          <td class="d-flex justify-content-center">
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Service
              </button>
              <div class="dropdown-menu">
                <ul
                  :key="index"
                  v-for="(service, index) in room.serviceAttachs"
                >
                  <li>{{ service.name }}</li>
                </ul>
              </div>
            </div>
          </td>
          <td>
            <div v-if="room.isActive" class="borderSuccess">active</div>
            <div v-else class="borderDanger">inActive</div>
          </td>
          <td class="d-flex">
            <button
              class="btn btn btn-danger text-danger"
              @click="deleteRoom(room.id)"
            >
              <i class="bi bi-x-lg"></i>
            </button>
            &ensp;
            <button
              class="btn btn btn-primary"
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="updateRoom(room.id)"
            >
              <i class="bi bi-pencil-square"></i>
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
    <!-- Modal -->
    <div
      class="modal fade rounded"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalCenterTitle">EDIT FORM</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">...</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="text-start">
              <div class="row">
                <div class="mb-3 col-sm-9">
                  <label>Room Name</label>
                  <input
                    class="form-control"
                    v-model="formData.name"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-3">
                  <label for="inputPassword4">Room Number</label>
                  <input
                    class="form-control"
                    v-model="formData.roomNumber"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-ms-4">
                  <label for="inputState">Room Type</label>
                  <input
                    class="form-control"
                    v-model="formData.roomTypeId"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">Price</label>
                  <input
                    class="form-control"
                    v-model="formData.currentPrice"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-4">
                  <label>People Number</label>
                  <input
                    class="form-control"
                    v-model="formData.peopleNumber"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-4">
                  <label>Single Bed</label>
                  <input
                    class="form-control"
                    v-model="formData.numberOfSimpleBed"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-12">
                  <label>Double Bed</label>
                  <input
                    class="form-control"
                    v-model="formData.numberOfDoubleBed"
                    data-bs-original-title=""
                    title=""
                  />
                </div>
                <div class="mb-3 col-sm-6">
                  <label>Upload Picture</label>
                  <input
                    class="form-control"
                    type="file"
                    id="myfile1"
                    name="myfile"
                    @change="handleFileUpload"
                  />
                </div>
                <div class="mb-3 col-sm-6">
                  <label>Upload Pictures</label>
                  <input
                    class="form-control"
                    type="file"
                    id="myfile2"
                    name="myfile"
                    @change="handleFileUploads"
                  />
                </div>
                <div class="mb-3 col-sm-12">
                  <label>Description</label>
                  <textarea
                    class="form-control"
                    v-model="formData.description"
                    data-bs-original-title=""
                    title=""
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="saveUpdate()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Model created -->
  </div>
</template>

<script>
export default {
  name: "Rooms",
  data() {
    return {
      searchQuery: "",
      rooms: [],
      perPage: 11,
      currentPage: 1,
      // formData: {
      //   roomNumber : '',
      //   roomName : '',
      //   isActive : '',
      //   numberOfSimpleBed : '',
      //   numberOfDoubleBed : '',
      //   roomTypeId : '',
      //   peopleNumber : '',
      //   currentPrice : '',
      //   roomPicture : '',
      //   roomPictures : '',
      //   description : '',
      // },
      formData: {},
      idRoom : "",
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    getAll() {
      this.$request
        .get("https://localhost:7103/v2/admin/room/get-all")
        .then((res) => {
          this.rooms = res.data;
        })
        .catch((err) => {
          console.error("Loi roi", err);
        });
    },
    updateRoom(roomId) {
      this.$request
        .get(`https://localhost:7103/v2/admin/room/get-by-id/?id=${roomId}`)
        .then((res) => {
          console.log("test = ", res.data);
          this.formData = res.data;
          this.idRoom = res.data.id
        });
    },
    saveUpdate(){
      console.log("update 1",this.formData);
      this.$request
        .post(`https://localhost:7103/v2/admin/room/update?id=${this.idRoom}`, this.formData)
        .then((res) => {
          console.log("update 2",res.data);
          if(res.data.statusCode == '1'){
            alert("update thanh cong ")
          }else {
            alert("this wrong !!!")
          }
        });
    },
    deleteRoom(roomId) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$request
              .get(`https://localhost:7103/v2/admin/room/delete/?id=${roomId}`)
              .then((res) => {
                console.log("xin = " ,res.data.statusCode);
                if (res.data.statusCode === 1) {
                  this.$Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                  this.getAll();
                } else {
                  this.$swal.fire("Ops!", "", "error");
                }
              });
          }
        });
    },
    handleFileUpload() {
      const fileUpload = document.querySelector("#myfile1");
      console.log("file picture 1 :" , fileUpload.value);
      //const file = fileUpload.target.files[0];
      const file = fileUpload.value;
      console.log("File1: " + file)
      //const sub = file.substring(13); 
      this.formData.roomPicture = file;
      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = () => {
      //     // Lấy dữ liệu ảnh dưới dạng base64 và gán vào biến imageData
      //     this.formData.roomPicture = reader.result;
      //   };

      //   reader.readAsDataURL(file);
      // }
    },
    handleFileUploads() {
      const fileUpload = document.querySelector("#myfile2");
      console.log("file picture 2 :" , fileUpload.value);
      // const file = fileUpload.target.files[0];
      const file = fileUpload.value;
      console.log("File2: " + file)
      //const sub = file.substring(13); 
      this.formData.roomPictures = [file]
      // if (file) {
      //   const reader = new FileReader();

      //   reader.onload = () => {
      //     // Lấy dữ liệu ảnh dưới dạng base64 và gán vào biến imageData
      //     this.formData.roomPictures = reader.result;
      //   };
      //   reader.readAsDataURL(file);
      // }
    },
  },
  computed: {
    fiterSearch(){
      const query = this.searchQuery.toLowerCase();
      return this.rooms.filter(item => item.name.toLowerCase().includes(query));
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.rooms.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.rooms.length / this.perPage);
    },
  },
};
</script>

<style>
.addBtn {
  border-radius: 10px;
  border: none;
  outline: none;
}
.borderSuccess {
  margin-top: 7px;
  border-radius: 5px;
  color: white;
  text-align: center;
  border: none;
  background-color: rgb(139, 198, 150);
}
.borderDanger {
  margin-top: 7px;
  border-radius: 5px;
  text-align: center;
  color: white;
  background-color: rgb(224, 109, 43);
}
</style>
