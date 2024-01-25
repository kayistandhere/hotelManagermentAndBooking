<template>
       <div class="login-wrapper-flex container-fluid d-flex justify-content-center align-middle" style="height:70vh;">
        <div class="col align-self-center">
            <h1 class="text-success ">BẠN ĐÃ THANH TOÁN THÀNH CÔNG </h1>
            <router-link :to="'/homeView'"><button >Back</button></router-link>
    </div>
       
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            duLieuMomo : {},
        }
    
    },
    created(){
        this.getMomo()
    },
    methods: {
        getMomo(){
          this.duLieuMomo =  this.$route.query.message;
        }
    }
}
</script>

<style>

</style>