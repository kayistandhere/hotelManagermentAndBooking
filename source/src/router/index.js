import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import signUp from "../components/signUp.vue";
import Home from  "../views/HomeView.vue";
import bookRoom from "../components/bookRoom.vue";
import roomList from "../components/roomList.vue";
import CheckoutRoom from "../components/Checkout.vue";
import infos from "../components/informationUser.vue";
import register from '../components/register.vue';
import MomoPage from '../components/momoPage.vue'
const routes = [
  {
    // Main mặc định 
    path: "/",
    name: "login.form",
    component: Login,
  },
  // SHOW == api "GET" đọc dữ liệu
  // DELETE == api "Delete" xóa
  {
    path: "/Homeview",
    name: "home",
    component : Home,
  },
  {
    path: "/Room/roomList/:message?",
    name: "roomList",
    component: roomList,
    meta : {
      auth : true
    }
  },
  {
    path: '/Room/bookRoom/:id',
    name: "Room.book",
    component: bookRoom,
  },
  {
    path: "/Room/Checkout/:id",
    name: "Room.checkout",
    component:CheckoutRoom,
  },
  {
    path: "/Login/SignUp",
    name: "Login.signUp",
    component: signUp,
  },
  {
    path: "/infos",
    name: "info",
    component: infos,
  },
  {
    path: "/successPayment",
    name: "momo",
    component: MomoPage,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
