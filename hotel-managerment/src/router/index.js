import { createRouter, createWebHistory } from 'vue-router'
import LayoutLogin from '../LayoutLogin.vue'
import Rooms from '../components/Rooms.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../view/Login.vue'
import Reservations from '../components/Reservations.vue'
import Booking from '../components/Booking.vue'
import roomType from '../components/Roomtype.vue'
import attachService from '../components/attachService.vue'
import roomService from '../components/roomService.vue'
import Customer from '../components/Customer.vue'
import Employee from '../components/employee.vue'
import Roles from '../components/Roles.vue'
import Profile from '../components/Profile.vue'
import checkout from '../components/Checkout.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Room',
    name: 'room.list',
    component: Rooms
  },
  {
    path: '/Reservation',
    name: 'Reservation.list',
    component: Reservations
  },
  {
    path : '/Booking',
    name : 'booking.list',
    component : Booking
  },
  {
    path : '/roomType',
    name : 'roomType.list',
    component : roomType
  },
  {
    path : '/attachService',
    name : 'attchService.list',
    component : attachService
  },
  {
    path : '/Customer',
    name : 'customer.list',
    component : Customer
  },
  {
    path : '/roomService',
    name : 'roomService.list',
    component : roomService
  },
  {
    path : '/employee',
    name : 'employee.list',
    component : Employee
  },
  {
    path : '/roles',
    name : 'roles.list',
    component : Roles
  },
  {
    path : '/profile',
    name : 'profile.show',
    component : Profile
  },
  {
    path : '/checkout/:id',
    name : 'checkout.show',
    component : checkout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
