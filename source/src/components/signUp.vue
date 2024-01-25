<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-90">
      <div class="row d-flex justify-content-center align-items-center h-90">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4" @submit.prevent="registerForm">
                    <div class="d-flex flex-row align-items-center mb-2">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          placeholder="Your Name"
                          v-model="registerData.userName"
                        />
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-2">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          v-model="registerData.email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="d-flex col-lg-12">
                      <div
                        class="d-flex flex-row align-items-center mb-2 col-lg-6"
                      >
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            v-model="registerData.name"
                            class="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      &ensp;
                      <div
                        class="d-flex flex-row align-items-center mb-2 col-lg-6"
                      >
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            v-model="registerData.phoneNumber"
                            class="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div class="d-flex col-lg-12">
                      <div
                        class="d-flex flex-row align-items-center mb-2 col-lg-6"
                      >
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            v-model="registerData.password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      &ensp;
                      <div
                        class="d-flex flex-row align-items-center mb-2 col-lg-6"
                      >
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            v-model="registerData.confirmPassword"
                            class="form-control"
                            placeholder="Comfirm password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        v-model="isCheckboxChecked"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg"
                        v-if="isCheckboxChecked"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      registerData: {
        userName: "",
        email: "",
        name: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      isCheckboxChecked: true,
    };
  },
  created() {},

  methods: {
    registerForm() {
      // Gửi yêu cầu đăng nhập đến API
      console.log(this.registerData);
      this.$request
        .post("https://localhost:7103/user/register", this.registerData)
        .then((res) => {
          if (res.data.statusCode == 1) {
            
            this.$router.push({ name: "login.form" });
          }else {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: "Sign Up Failse ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        
        })
        .catch((error) => {
          console.log("so3");
          console.error("Lỗi đăng nhập:", error);
        });
    },
  },
};
</script>

<style></style>
