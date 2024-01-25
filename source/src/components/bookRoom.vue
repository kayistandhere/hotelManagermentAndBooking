<template>
  <main>
    <section class="py-0 pt-sm-5">
      <div class="container position-relative">
        <!-- Title and button START -->
        <div class="row mb-3">
          <div class="col-12">
            <!-- Meta -->
            <div class="d-lg-flex justify-content-lg-between mb-1">
              <!-- Title -->
              <div class="mb-2 mb-lg-0">
                <h1 class="fs-2">{{ roomDetail.name }}</h1>
                <!-- Location -->
                <p class="fw-bold mb-0">
                  <i class="bi bi-geo-alt me-2"></i>Lê Văn Duyệt, Nại Hiên Đông,
                  Sơn Trà, Đà Nẵng 550000, Việt Nam
                  <a
                    href="../googleMap/googleMap.html"
                    class="ms-2 text-decoration-underline"
                    data-bs-toggle="modal"
                    data-bs-target="#mapmodal"
                  >
                    <i class="bi bi-eye-fill me-1"></i>View On Map
                  </a>
                </p>
              </div>
              <!-- Buttons -->
              <ul class="list-inline text-end">
                <!-- Heart icon -->
                <li class="list-inline-item">
                  <a href="#" class="btn btn-sm btn-light px-2"
                    ><i class="bi-solid bi-fw bi-heart"></i
                  ></a>
                </li>
                <!-- Share icon -->
                <li class="list-inline-item dropdown">
                  <!-- Share button -->
                  <a
                    href="#"
                    class="btn btn-sm btn-light px-2"
                    role="button"
                    id="dropdownShare"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi-solid bi-fw bi-share-fill"></i>
                  </a>
                  <!-- dropdown button -->
                  <ul
                    class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                    aria-labelledby="dropdownShare"
                  >
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-twitter me-2"></i>Twitter</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://www.facebook.com/KayiApril"
                        ><i class="bi bi-facebook me-2"></i>Facebook</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-linkedin me-2"></i>LinkedIn</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi-solid bi-copy me-2"></i>Copy link</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Title and button END -->
      </div>
    </section>
    <!-- =======================
Main Title END -->

    <!-- =======================
Image gallery START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <!-- Image -->
          <div class="col-md-12">
            <div
              class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
              :style="
                'background-image:url(' +
                roomDetail.roomPicture +
                '); background-position: center left; background-size: cover;'
              "
            >
              <!-- Card hover element -->
              <div class="hover-element position-absolute w-100 h-100">
                <i
                  class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                ></i>
              </div>
            </div>
          </div>

          <!-- <div class="col-md-6">
			
				<div class="row g-2" :key="index" v-for="(PictureRoom , index) in roomDetail.roomPictures"> 
				
					<div class="col-12">
						<img data-glightbox data-gallery="gallery" :src=" roomDetail.Picture ">
							<div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" style="background-image:url(assets/images/gallery/13.jpg); background-position: center left; background-size: cover;">
							
								<div class="hover-element position-absolute w-100 h-100">
									<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
								</div>
							</div>
						</a>	
					</div>

					<div class="col-md-6">
						<a data-glightbox data-gallery="gallery" href="assets/images/gallery/12.jpg">
							<div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" style="background-image:url(assets/images/gallery/12.jpg); background-position: center left; background-size: cover;">
						
								<div class="hover-element position-absolute w-100 h-100">
									<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
								</div>
							</div>
						</a>	
					</div>

				
					<div class="col-md-6">
						<div class="card card-grid-sm overflow-hidden" style="background-image:url(assets/images/gallery/11.jpg); background-position: center left; background-size: cover;">
			
							<div class="bg-overlay bg-dark opacity-7"></div>

							
							<a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/11.jpg" class="stretched-link z-index-9"></a>
							<a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/15.jpg"></a>
							<a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/16.jpg"></a>

							
							<div class="card-img-overlay d-flex h-100 w-100">
								<h6 class="card-title m-auto fw-light text-decoration-underline"><a href="#" class="text-white">View all</a></h6>
							</div>
						</div>
					</div>
				</div>
			
			</div> -->
        </div>
      </div>
    </section>
    <section class="pt-0">
      <div class="container" data-sticky-container>
        <div class="row g-4 g-xl-5">
          <!-- Content START -->
          <div class="col-xl-7 order-1">
            <div class="vstack gap-5">
              <!-- About hotel START -->
              <div class="card bg-transparent">
                <!-- Card header -->
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Hotel</h3>
                </div>
                <!-- Card body START -->
                <div class="card-body pt-4 p-0">
                  <h5 class="fw-light mb-4">Main Highlights</h5>

                  <!-- Highlights Icons -->
                  <div
                    class="hstack gap-3 mb-3"
                    :key="index"
                    v-for="(serviceAttach, index) in serviceAttachs"
                  >
                    <div
                      class="icon-lg bg-light h5 rounded-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Free wifi"
                    >
                      <i class="bi bi-wifi"></i>
                    </div>
                    <!-- <div
                      class="icon-lg bg-light h5 rounded-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Swimming Pool"
                    >
                      <i class="bi bi-tsunami"></i>
                    </div>
                    <div
                      class="icon-lg bg-light h5 rounded-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Eat Lunch"
                    >
                      <i class="bi bi-egg-fried"></i>
                    </div>
                    <div
                      class="icon-lg bg-light h5 rounded-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Free Drink"
                    >
                      <i class="bi bi-cup-straw"></i>
                    </div> -->
                  </div>

                  <p class="mb-3">
                    Demesne far-hearted suppose venture excited see had has.
                    Dependent on so extremely delivered by. Yet no jokes worse
                    her why.
                    <b
                      >Bed one supposing breakfast day fulfilled off depending
                      questions.</b
                    >
                  </p>
                  <p class="mb-0">
                    Delivered dejection necessary objection do Mr prevailed. Mr
                    feeling does chiefly cordial in do. Water timed folly right
                    aware if oh truth. Large above be to means. Dashwood does
                    provide stronger is.
                  </p>

                  <div class="collapse" id="collapseContent">
                    <p class="my-3">
                      We focus a great deal on the understanding of behavioral
                      psychology and influence triggers which are crucial for
                      becoming a well rounded Digital Marketer. We understand
                      that theory is important to build a solid foundation, we
                      understand that theory alone isn't going to get the job
                      done so that's why this rickets is packed with practical
                      hands-on examples that you can follow step by step.
                    </p>
                    <p class="mb-0">
                      Behavioral psychology and influence triggers which are
                      crucial for becoming a well rounded Digital Marketer. We
                      understand that theory is important to build a solid
                      foundation, we understand that theory alone isn't going to
                      get the job done so that's why this tickets is packed with
                      practical hands-on examples that you can follow step by
                      step.
                    </p>
                  </div>
                  <a
                    class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseContent"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseContent"
                  >
                    See <span class="see-more ms-1">more</span
                    ><span class="see-less ms-1">less</span
                    ><i class="bi-solid bi-angle-down ms-2"></i>
                  </a>
                </div>
                <!-- Card body END -->
              </div>
              <!-- About hotel START -->
            </div>
          </div>
          <!-- Content END -->

          <!-- Right side content START -->
          <aside class="col-xl-5 order-xl-2">
            <div data-sticky data-margin-top="100" data-sticky-for="1199">
              <!-- Book now START -->
              <div class="card card-body border">
                <!-- Title -->
                <div
                  class="d-sm-flex justify-content-sm-between align-items-center mb-3"
                >
                  <div>
                    <span>Price Start at</span>
                    <h4 class="card-title mb-0">
                      {{ roomDetail.currentPrice }}
                    </h4>
                  </div>
                  <div>
                    <h6 class="fw-normal mb-0">
                      {{ roomDetail.roomTypeName }}
                    </h6>
                    <small>+ $285 taxes & fees</small>
                  </div>
                </div>

                <!-- Rating -->
                <ul class="list-inline mb-2">
                  <li class="list-inline-item me-1 h6 fw-light mb-0">
                    <i class="bi bi-arrow-right me-2"></i>4.5
                  </li>
                  <li class="list-inline-item me-0 small">
                    <i class="bi-solid bi-star text-warning"></i>
                  </li>
                  <li class="list-inline-item me-0 small">
                    <i class="bi-solid bi-star text-warning"></i>
                  </li>
                  <li class="list-inline-item me-0 small">
                    <i class="bi-solid bi-star text-warning"></i>
                  </li>
                  <li class="list-inline-item me-0 small">
                    <i class="bi-solid bi-star text-warning"></i>
                  </li>
                  <li class="list-inline-item me-0 small">
                    <i class="bi-solid bi-star-half-alt text-warning"></i>
                  </li>
                </ul>
                <p class="h6 fw-light mb-4">
                  <i class="bi bi-arrow-right me-2"></i>Room Number "{{
                    roomDetail.roomNumber
                  }}"
                </p>
                <!-- Button -->
                <div class="d-grid">
                  <router-link
                    href="#"
                    class="btn btn-lg btn-primary-soft mb-0 bg-primary text-white"
                    :to="'/Room/Checkout/' + roomDetail.id"
                    >Booking Room</router-link
                  >
                  >
                </div>
              </div>
              <!-- Book now END -->

              <!-- Best deal START -->
              <div class="mt-4 d-none d-xl-block">
                <h4>Today's Best Deal</h4>

                <div class="card shadow rounded-3 overflow-hidden">
                  <div class="row g-0 align-items-center">
                    <!-- Image -->
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <!-- <img
                        src="assets/images/offer/04.jpg"
                        class="card-img rounded-0"
                        alt=""
                      /> -->
                    </div>

                    <!-- Title and content -->
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <div class="card-body p-3">
                        <h6 class="card-title">
                          <a href="offer-detail.html" class="stretched-link"
                            >Travel Plan</a
                          >
                        </h6>
                        <p class="mb-0">
                          Get up to $10,000 for lifetime limits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Best deal END -->
            </div>
          </aside>
          <!-- Right side content END -->
        </div>
        <!-- Row END -->
      </div>
    </section>
    <!-- =======================
About hotel END -->
  </main>
</template>

<script>
export default {
  name: "RoomDetail",
  data() {
    return {
      roomDetail: {},
      serviceAttachs: [],
    };
  },
  created() {
    this.getById();
  },
  methods: {
    getById() {
      const roomId = this.$route.params.id;
      console.log("roomID: " + roomId);
      this.$request
        .get(`https://localhost:7103/user/room/get-by-id?id=${roomId}`)
        .then((res) => {
          this.roomDetail = res.data;
          console.log("so1", this.roomDetail);
        })
        .catch((error) => {
          console.error("Có Lỗi ", error);
        });
    },
  },

  // mounted() {
  //   const roomId = this.$route.params.id;
  //   console.log(roomId);
  //   this.$request
  //     .get(`https://localhost:7103/user/room/get-by-id?id=${roomId}`)
  //     .then((res) => {
  //       console.log("aa")
  //       for(let i in res.data.serviceAttachs.name){
  //         console.log(i);
  //             // this.serviceAttachs=[i];
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Có Lỗi ", error);
  //     });
  // },
};
</script>

<style>
</style>