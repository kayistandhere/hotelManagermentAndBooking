<template>
  <div>
    <!-- Search START -->
    <div class="row">
      <div class="col-xl-12 position-relative mt-n3 mt-xl-n9">
        <!-- Title -->
        <h6 class="d-none d-xl-block mb-3 text-center">Check Availability</h6>

        <!-- Booking from START -->

        <form
          class="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4"
          @submit.prevent="searchRoom"
        >
          <div class="row g-5 align-items-center">
            <!-- Check in -->
            <div class="col-lg-3">
              <div class="d-flex">
                <!-- Icon -->
                <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                <div class="flex-grow-1">
                  <label class="form-label">Check in</label>
                  <!-- Date input -->
                  <input
                    ref="date"
                    type="date"
                    class="form-control"
                    v-model="formData.checkIn"
                  />
                </div>
              </div>
            </div>
            <!-- Check out -->
            <div class="col-lg-3">
              <div class="d-flex">
                <!-- Icon -->
                <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                <div class="flex-grow-1">
                  <label class="form-label">Check out</label>
                  <!-- Date input -->
                  <input
                    ref="datetime"
                    type="date"
                    class="form-control"
                    v-model="formData.checkOut"
                  />
                </div>
              </div>
            </div>
            <!-- Guest -->

            <!-- Location -->
            <div class="col-lg-3">
              <div
                class="form-control-border form-control-transparent form-fs-md d-flex"
              >
                <!-- Icon -->
                <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                <!-- Select input -->
                <div class="flex-grow-1">
                  <label class="form-label">People Number</label>
                  <select
                    v-model="formData.peopleNumber"
                    class="form-select js-choice form-control"
                  >
                    <option value="">Chọn một tùy chọn</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>more</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- PeopleNumber start -->
            <div class="col-lg-3">
              <div
                class="form-control-border form-control-transparent form-fs-md d-flex"
              >
                <!-- Icon -->
                <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                <!-- Select input -->
                <div class="flex-grow-1">
                  <label class="form-label">Room Type</label>
                  <select
                    v-model="formData.typeRoomId"
                    class="form-select js-choice form-control"
                  >
                    <option value="">Chọn một tùy chọn</option>
                    <option
                      v-for="roomType in roomTypes"
                      :value="roomType.id"
                      :key="roomType.id"
                    >
                      {{ roomType.typeName }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- PeopleNumber end -->
          </div>
          <!-- Button search -->
          <div class="btn-position-md-middle">
            <button
              class="icon-lg btn btn-round btn-primary mb-0"
              type="submit"
            >
              <i class="bi bi-search bi-fw"></i>
              Search
            </button>
          </div>
        </form>

        <!-- Booking from END -->
      </div>
    </div>
    <!-- Search END -->
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
        <tr class="RowTable" :key="room.id" v-for="room in paginatedData">
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
            <router-link :to="'/checkout/' + room.id">
            <button
              class="btn btn btn-primary"
              type="button"
            >
              Booking &nbsp; <i class="bi bi-pencil-square"></i>
            </button>
          </router-link>
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
    
  </div>
</template>

<script>
import authMixin from "../mixin/auth.js";
import { mapActions } from "vuex";
export default {
  mixins: [authMixin],
  name: "Reservation.list",
  data() {
    return {
      rooms: [],
      formData: {
        checkIn: new Date().toISOString().substring(0, 10),
        checkOut: "",
        price: 0,
        typeRoomId: "",
        star: 0,
        peopleNumber: "",
      },
      roomTypes: [],
      searchData : {},
      perPage: 11,
      currentPage: 1,
    };
  },
  created() {
    this.addAccessTokenToHeaders();
    this.getBookingData();
    this.showRoomType();
  },
  mounted() {
    const currentDate = new Date(this.formData.checkIn);
    currentDate.setDate(currentDate.getDate() + 1);
    this.formData.checkOut = currentDate.toISOString().substring(0, 10);
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    getBookingData() {
      this.$request
        .get("https://localhost:7103/v2/admin/room/get-all")
        .then((res) => {
          this.rooms = res.data;
          console.log("infos = ", this.rooms);
        });
    },
    showRoomType() {
      this.$request
        .get("https://localhost:7103/user/search-room")
        .then((res) => {
          this.roomTypes = res.data.roomTypes;
        })
        .catch((error) => {
          console.error("Lỗi Tải Dữ liệu roomType", error);
        });
    },
    ...mapActions(["saveFormData"]),
    searchRoom() {
      const formData = this.formData; // Dữ liệu bạn muốn lưu'
      this.$store.dispatch("saveFormData", formData); // Gọi action để lưu dữ liệu 
      this.$request.post("https://localhost:7103/user/room/get-all-by" , this.searchData).then((res) => {
            this.rooms = res.data;
            console.log();
        })
    },
  },
  computed: {
    currentDateFormatted() {
      const date = new Date(this.currentDateISO);
      return date.toLocaleDateString('en-CA'); // Chuyển đổi thành định dạng "YYYY/MM/DD"
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.rooms.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.rooms.length / this.perPage);
    },
    formData(){
        return this.searchData = this.$store.state.formData; 
    }
  },
  destroyed() {
    this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
  },
};
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
