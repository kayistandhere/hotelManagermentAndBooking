<template>
  <div class="">
    <div class="row">
      <div class="col-lg-3">

      </div>
    </div>
    <div class="row">
      <div class="col-lg-6"> <canvas id="revenueChart"></canvas> </div>
      <div class="col-lg-6"> <canvas id="barChart"></canvas> </div>
    </div>
  </div>
</template>
  
<script>
import authMixin from '../mixin/auth.js'
export default {
  name: 'Dashboard.show',
  mixins: [authMixin],
  data() {
    return {
      chartData: [],
      sumYear: {},
      barData: {},
    };
  },
  created() {
    this.addAccessTokenToHeaders();
    this.getSumYear()
    this.getDataYear();
  },
  methods: {
    getSumYear() {
      this.$request.get("https://localhost:7103/v2/admin/revenue/get-sum?year=2023").then((res) => {
        this.sumYear = res.data;
        console.log("xin", res.data.year);
      })
    },
    getDataYear() {
      this.$request.get('https://localhost:7103/v2/admin/revenue/revenue-by-year?year=2023').then((res) => {
        this.chartData = res.data;
        this.lineChart();
      });
    },
    getDataByDay() {
      this.$request.get("https://localhost:7103/v2/admin/revenue/revenue-by-month?month=5&year=2023"),then((res) => {
        this.barChart = res.data;
        this.barChart();
      })
    },
    // Line Chart Start
    lineChart() {
      const ctx = document.getElementById('revenueChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.chartData.map((item) => `Month ${item.month}`),
          datasets: [
            {
              label: 'Revenue',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: this.chartData.map((item) => item.revenue),

            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    barChart() {
      const ctx = document.getElementById('barChart'.getContext('2d'));
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartData.map((item) => `Month ${item.month}`),
          datasets: [
            {
              label: 'Revenue',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: this.chartData.map((item) => item.revenue),

            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

    },
  },
  
  // Line Chart Ends

  destroyed() {
    this.removeAccessTokenFromHeaders();
  }
};
</script>
<style>
.chart-container {
  width: 50%;
  height: 50%;
  margin: auto;
}
</style>