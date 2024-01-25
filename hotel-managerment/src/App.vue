
<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar" class="">
      <div class="sidebar-header">
        <h3>Novotel Hotel</h3>
        <strong>NH</strong>
      </div>

      <ul class="list-unstyled components">

        <li class="active">
          <router-link :to="'/Dashboard'">
            <i class="bi bi-bar-chart-line"></i>
            Dashboard
          </router-link>
        </li>

        <li>
          <router-link :to="'/Room'">
            <i class="bi bi-house"></i>
            Room
          </router-link>
        </li>
        <li>
          <router-link :to="'/Booking'">
            <i class="bi bi-house-add"></i>
            Booking
          </router-link>
        </li>
        <li>
          <router-link :to="'/Reservation'">
            <i class="bi bi-house-check"></i>
            Reservations
          </router-link>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
            <i class="glyphicon glyphicon-duplicate"></i>
            Managerments
          </a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li><router-link :to="'/RoomType'"> <i class="bi bi-house-gear"></i>Room Type </router-link></li>
            <li><router-link :to="'/attachService'"><i class="bi bi-person-fill-exclamation"></i> Attach Service</router-link></li>
            <li><router-link :to="'/roomService'"><i class="bi bi-houses"></i>Service Room</router-link></li>
            <li><router-link :to="'/Customer'"><i class="bi bi-people-fill"></i>Customer</router-link></li>
            <li><router-link :to="'/employee'"><i class="bi bi-person"></i>Employee</router-link></li>
            <li><router-link :to="'/roles'"><i class="bi bi-info-square"></i>Roles</router-link></li>
          </ul>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li><a href="#" class="download"><i class="bi bi-gear"></i>Setting</a></li>
        <li><a href="#" class="article"><i class="bi bi-question-square"></i>Rule for hotel</a></li>
      </ul>
    </nav>

    <!-- Page Content Holder -->
    <div id="content" class="">
      <nav class="navbar ">
                    <div class="navbar-collapse collapse">

                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                              <i class="bi bi-justify"></i>
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><router-link :to="'/profile'"><i class="bi bi-person-circle"></i></router-link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

