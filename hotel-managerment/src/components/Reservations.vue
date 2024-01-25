<template>
  <div>
    <div class="col-lg-12 d-flex">
      <button type="button" class="borderSuccess btn-sm">
        Create Room &ensp; <i class="bi bi-plus-square"></i>
      </button>
    </div>
    <br />
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Booking ID</th>
          <th scope="col">Room Number</th>
          <th scope="col">Room Price</th>
          <th scope="col">Number Days</th>
          <th scope="col">Reservation Price</th>
          <th scope="col">UserName</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Day</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="RowTable" :key="room.id" v-for="room in paginatedData">
          <th>{{ room.id }}</th>
          <td>{{ room.roomNumber }}</td>
          <td>{{ room.roomPrice }}</td>
          <td>{{ room.numberOfDay }}</td>
          <td>{{ room.reservationPrice }}</td>
          <td>{{ room.name }}</td>
          <td>{{ room.startDate }}</td>
          <td>{{ room.endDate }}</td>
          <td>{{ room.createdAt }}</td>
          <td>
            <div v-if="room.updateAt" class="borderUpdateAt">Empty</div>
            <div v-else class="borderUpdateAt">Empty</div>
          </td>
          <td>
            <div v-if="room.status" class="borderSuccess">Paid</div>
            <div v-else class="borderDanger">inPaid</div>
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
    <div class="modal fade rounded" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalCenterTitle">EDIT FORM</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">...</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="text-start">
              <div class="row">
                <div class="mb-3 col-sm-9">
                  <label>Room Name</label>
                  <input class="form-control" id="inputEmail4" type="email" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-3">
                  <label for="inputPassword4">Room Number</label>
                  <input class="form-control" id="inputPassword4" type="password" data-bs-original-title="" title="" />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-sm-4">
                  <label for="inputEmail5">Room Type</label>
                  <input class="form-control" id="inputEmail5" type="email" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">Price</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">Discount</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">People Number</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">Single Bed</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-4">
                  <label for="inputPassword7">Double Bed</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
                <div class="mb-3 col-sm-12">
                  <label for="inputPassword7">Attach Service</label>
                  <input class="form-control" id="inputPassword7" type="password" data-bs-original-title="" title="" />
                </div>
              </div>
              <div class="mb-3">
                <label for="inputState">Attach Service</label>
                <select class="form-control" id="inputState">
                  <option selected=""></option>
                  <option>lol</option>
                  <option>xin</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from '../mixin/auth.js';
export default {
  mixins: [authMixin],
  name: "Reservation.list",
  data() {
    return {
      rooms: [],
      perPage: 11,
      currentPage: 1,
    }
  },
  created() {
    this.addAccessTokenToHeaders();
    this.getTrue();
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    getTrue() {
      this.$request.get("https://localhost:7103/v2/admin/reservation/get-all").then((res) => {
        this.rooms = res.data;
        console.log("infos = ", this.rooms);
      })
    }
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.rooms.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.rooms.length / this.perPage);
    },
  },
  destroyed() {
    this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
  },
}
</script>
<style>
.borderUpdateAt {
  margin-top: 7px;
  border-radius: 5px;
  text-align: center;
  color: white;
  background-color: rgb(224, 109, 43);

}
</style>
