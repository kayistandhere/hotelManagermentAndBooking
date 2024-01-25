<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            SIGN UP <br />
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
            ipsum nisi dolorem modi. Quos?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            class="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            class="position-absolute shadow-5-strong"
          ></div>

          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
              <form @submit.prevent="login">
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3"
                    >Enter Email</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    v-model="account.email"
                    @blur="validate()"
                    v-bind:class="{ 'is-invalid': error.email }"
                  />
                  <div class="invalid-feedback">{{ error.email }}</div>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <p>
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="account.password"
                      @blur="validate()"
                      v-bind:class="{ 'is-invalid': error.password }"
                    />
                    <i class="bi bi-eye" id="eyeInPass" @click="showPass()"></i>
                  </p>
                  <div class="invalid-feedback">{{ error.password }}</div>
                </div>
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      error: {
        email: "",
        password: "",
      },
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validate() {
      let invalid = true;
      this.error = {
        email: "",
        password: "",
      };

      if (!this.account.email) {
        this.error.email = "Product email is required";
        invalid = false;
      } else if (!this.isEmail(this.account.email)) {
        this.error.email = "Product email to wrong";
        invalid = false;
      }
      if (!this.account.password) {
        this.error.password = "Product password is required";
        invalid = false;
      }
      // } else if (!this.isNumber(this.login.password)) {
      //   this.error.password = "Product password must be number";
      //   invalid = false;
      // }
      return invalid;
    },
    isEmail(value) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    login() {
      console.log("so1")
      // Gửi yêu cầu đăng nhập đến API
      this.$request.post('https://localhost:7103/user/login', this.account, {
    headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      }).then((response) => {
        console.log("so2")
          // Ở đây, bạn có thể xử lý accessToken và refreshToken
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
          console.log("lol",accessToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          this.$router.push({name:'home' });
          console.log("so2") 
        })
        .catch((error) => {
          console.log("so3")
          console.error('Lỗi đăng nhập:', error);
        });
    },
    showPass() {
      const passwordField = document.querySelector("#password");
      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },
  },
  headers: {
    "Content-Type": "application/json",
  },
};
</script>

<style>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(
      650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ),
    radial-gradient(
      1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    );
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
</style>
