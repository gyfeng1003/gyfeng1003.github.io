<template>
  <div class="dashboard-editor-container">
    dashboard
  </div>
</template>

<script lang="ts">
// import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DashboardAdmin',
  components: {}
})
export default class extends Vue {
  private handleSetLineChartData (type: string) {
  }
}
</script>

<style lang="less" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
