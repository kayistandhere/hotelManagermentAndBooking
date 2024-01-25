<template>
  <section style="background-color: #eee;">
    <div class="container py-5">
      <!-- row start -->
      <div class="row">
        <!-- card start -->
        <div class="">
          <div class="card mb-4 ">
            <div class="card-body text-center ">
              <img :src="profile.image" alt="Image Alt Text" class="rounded-circle img-fluid" style="width: 150px;">
              <h5 class="my-3">{{ profile.userName }}</h5>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-4">Duy Tan University</p>
            </div>
          </div>
        </div>
        <!-- card end -->
      </div>
      <br>
      <!-- row end -->
      <!-- row2 start -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card mb-12">
            <!-- start form -->
            <form @submit.prevent="updateProfile">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="profile.userName">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Image</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="file" class="form-control" @change="handleImageChange">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control " v-model="profile.email">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control " v-model="profile.phoneNumber">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">ID Card</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="profile.cmnd">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="profile.address">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-lg-5">
                    <button type="submit" class="btn bg-primary">Update</button>
                  </div>
                </div>
              </div>
            </form>
            <!-- end form -->
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import authMixin from '../mixin/auth.js';
export default {
  mixins: [authMixin],
  name: 'Profile',
  data() {
    return {
      profile: {
        phoneNumber: '',
        image: '',
        address: '',
        cmnd: '',
      },
    }
  },
  created() {
    this.addAccessTokenToHeaders();
    this.getAllProfile();
  },
  methods: {
    getAllProfile() {
      this.$request.get("https://localhost:7103/user/user-profile/get").then((res) => {
        this.profile = res.data;
      })
    },
    handleFileChange(event) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      // Đọc tệp ảnh và lưu thông tin vào biến imageInfo
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profile.image = `Image=${reader.result};type=${file.type}`;
      };
    }
  },
    updateProfile() {
      this.$request.post("https://localhost:7103/user/user-profile/update", this.profile).then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("done")
        }else {
          alert("toang")
        }
       
      })
    },
  },
  destroyed() {
    this.removeAccessTokenFromHeaders(); // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
  },
}
</script>

<style></style>