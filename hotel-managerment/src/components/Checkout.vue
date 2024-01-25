<template>
    <section>
      <div class="container-fluid">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary">Billing Details</h3>
          </div>
          <div class="card-body rounded border" style="background-color: ">
            <div class="row">
              <div class="col-xl-8 col-sm-12 rounded border">
                <form class="text-start" @submit.prevent="Booking">
                  <div>
                    <div class="row">
                      <div class="mb-3 col-sm-6">
                        <label>Your Name</label>
                        <input
                          class="form-control"
                          id="inputEmail4"
                          type="text"
                          data-bs-original-title=""
                          title=""
                          v-model="formData.name"
                        />
                      </div>
                      <div class="mb-3 col-sm-6">
                        <label for="inputPassword4">Phone Number</label>
                        <input
                          class="form-control"
                          id="inputPassword4"
                          type="text"
                          data-bs-original-title=""
                          title=""
                          v-model="formData.phoneNumber"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-sm-12">
                        <label for="inputEmail5">Email Address</label>
                        <input
                          class="form-control"
                          id="inputEmail5"
                          type="email"
                          data-bs-original-title=""
                          title=""
                          v-model="formData.email"
                        />
                      </div>
                      <div class="mb-3 col-sm-12">
                        <label >Address</label>
                        <textarea
                          class="form-control"
                          id="inputPassword7"
                          type="text"
                          data-bs-original-title=""
                          title=""
                          v-model="formData.address"
                        ></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="inputState">People</label>
                     <input type="number" v-model="formData.numberOfPeople" class="form-control">
                    </div>
                  </div>
                  <div class="row">
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="submit">
                        Booking
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- Checkout Detail Start -->
             

              <!-- Checkout Detail Start -->
              <div class="col-xl-4 col-sm-12 order-md-last">
                <!-- Employee booking start -->
                <h4 class="d-flex justify-content-between  mb-3">
                  <span class="text-primary"> Employee Profile</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Name</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.name }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Email </span>
                    <span class="strong">
                      <h6>{{ dataInvoce.email }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">PhoneNumber</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.phoneNumber }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Address</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.address }}</h6>
                    </span>
                  </li>
                
                </ul>
                   <!-- Employee booking end -->

                      <!-- room checkin checkout start -->
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Number of days</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Check In</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.startDate }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Check Out</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.endDate }}</h6>
                    </span>
                  </li>
                </ul>
                  <!-- room checkin checkout end -->

                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Detailed amount to pay</span>
                </h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Number Of Day</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.numberOfDay }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Number Of People</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.numberOfPeople }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">Number Of People Max</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.numberOfPeopleMax }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">room Price</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.roomPrice }}</h6>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <span class="regular">reservation Price</span>
                    <span class="strong">
                      <h6>{{ dataInvoce.reservationPrice }}</h6>
                    </span>
                  </li>
                </ul>
              </div>
              <!-- Checkout Detail End -->
              <!-- Checkout Detail End -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import authMixin from "../mixin/auth.js";
  export default {
    mixins: [authMixin],
    name: "Room.checkout",
    data() {
      return {
        numberOfPeople: 0 , // people of number
        profileData: {}, // name email address phoneNumber
        reservationData: {}, // All
        formDatetime: {}, //startDate , endDate , numberOfDate
        numberOfDay: 0,
        showInvoce: '',
        dataInvoce: {},
        dataInput : {},
        formData : {
          reservationId: this.showInvoce,
          name : '',
          numberOfPeople: 0,
          email : '',
          phoneNumber: '',
          address: '',
        }
        // Hay la minh cho du lieu san nhể---------------------------
      };
    },
    created() {
      this.testMethod();
    },
    methods: {
      getPeopleNumber() {
        const roomId = this.$route.params.id;
        this.$request
          .get(`https://localhost:7103/user/room/get-by-id?id=${roomId}`)
          .then((res) => {
            this.numberOfPeople = res.data.peopleNumber;
            console.log("xin chao 88", res.data.peopleNumber);
          })
          .catch((error) => {
            console.error("Có Lỗi ", error);
          });
      },
  
      getProfile() {
        // Lấy AccessToken từ nơi bạn đã lưu trữ
        const accessToken = localStorage.getItem("accessToken");
        // Gửi yêu cầu GET đến API hoặc endpoint
        console.log("Before get data");
        this.$request
          .get("https://localhost:7103/user/user-profile/get", accessToken)
          .then((res) => {
            this.profileData = res.data;
            this.loadReservationData();
            this.createReservation();
          })
          .catch((error) => {
            console.error("Lỗi trong quá trình lấy dữ liệu người dùng: ", error);
          });
        console.log("After get data");
      },
      soNgay() {
        const startDate = new Date(this.$store.state.formData.checkIn);
        const endDate = new Date(this.$store.state.formData.checkOut);
        let miliday = endDate.getTime() - startDate.getTime();
  
        let soNgay = miliday / (1000 * 60 * 60 * 24);
  
        this.numberOfDay = Math.abs(Math.floor(soNgay));
      },
      formDate() {
        this.formDatetime = this.$store.state.formData; // lay duoc du lieu startDate , endDate , numberOfDate
      },
  
      loadReservationData() {
        // Lấy dữ liệu từ các nguồn khác và gán vào reservationData
        console.log("dddddđ");
        this.reservationData = {
          startDate: this.formDatetime.checkIn,
          endDate: this.formDatetime.checkOut,
          roomId: this.$route.params.id,
          numberOfDay: this.numberOfDay,
          numberOfPeople: this.numberOfPeople,
          name: this.profileData.userName,
          email: this.profileData.email,
          phoneNumber: this.profileData.phoneNumber,
          address: this.profileData.address,
        };
        console.log("xem nhaaaaa = ", this.reservationData);
      },
  
      createReservation() {
        console.log("xem dữ liệu trước : ", this.reservationData);
        this.$request
          .post(
            "https://localhost:7103/v2/admin/reservation/create",this.reservationData)
          .then((res) => {
           this.showInvoce = res.data.reservationId;
           this.getInvoce();
          });
      },
      getInvoce(){
        console.log("xem invoce truoc ", this.showInvoce);
        this.$request.get(`https://localhost:7103/v2/admin/reservation/get-by-id?id=${this.showInvoce}`).then((res) => {
            this.dataInvoce  = res.data;
            const amount = `${this.dataInvoce.reservationPrice}`;
            const orderInfo = 'BookingRoom';
            const dataInput = {  orderInfo,amount };
            this.dataInput = dataInput;
            console.log("xem invoce 2222222",this.dataInvoce);
        })
      },
      testMethod() {
        this.addAccessTokenToHeaders();
        this.getPeopleNumber();
        this.formDate();
        this.soNgay();
        this.getProfile();
        //this.loadReservationData();
        //this.createReservation();
      },
      Booking() {
    this.$request.post(`https://localhost:7103/v2/admin/invoice/create`,this.formData)
      .then((res) => {
        if (res.data.statusCode == 1) {
          this.$route.push({name : 'room.list'});
        } else {
          console.error('Không có đường link thanh toán trong phản hồi.');
        }
      })
      .catch((error) => {
        console.error('Lỗi khi thực hiện yêu cầu POST:', error);
      });
  }
  
    },
    destroyed() {
      this.removeAccessTokenFromHeaders();
    },
  };
  </script>
  
  <style>
  h2 {
    font-size: 40px;
    background: linear-gradient(to left, #660066 0%, #ff3300 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  