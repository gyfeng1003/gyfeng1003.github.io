<template>
  <div class="memberShip">
    <div class="option-form">
      <el-form :inline="true" :model="form">
        <el-form-item label="查询时间段">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            align="right"
            unlink-panels
            value-format="timestamp"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search(0)">
            查询
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="resetForm">
            重置
          </el-button>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary" @click="search(2)">
            近一月
          </el-button>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary" @click="search(1)">
            当日
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="body-box">
      <aside>
        <span>核心指数({{this.yesterday}} 至 {{this.today}})</span>
        <span class="fr">
          <el-button type="primary" icon="el-icon-document" @click="handleDownloadExcel">
            导出Excel
          </el-button>
        </span>
      </aside>
      <panel-group :list="list" type="1"/>
        <div class="history-num">历史累计注册用户</div>
      <panel-group :list="accumulatorList" type="2"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getMemberShipList, defaultMemberShipForm, getRegisterTotal, exportExcel } from '@/api/users'
import PanelGroup from '@/components/PanelGroup/index.vue'
import { getYesterday, getLastMonth, parseTime, getIntegralTime } from '@/utils'

@Component({
  name: 'MemberShipList',
  components: {
    PanelGroup
  }
})
export default class extends Vue {
  private list: object[] = []
  private accumulatorList: object[] = []
  private dateRange: any = []
  private form = defaultMemberShipForm
  private MemberMap: any = {
    '90062': '国内版',
    '90063': '国际版',
    '10010': '微信小程序'
  }
  private yesterday: any = parseTime(getYesterday().startDate)
  private today: any = parseTime((getYesterday()).endDate)
  private getYesterday = getYesterday
  private parseTime = parseTime

  created () {
    this.getMemberList()
    this.getAllUser()
  }

  @Watch('dateRange')
  onDateRangeChange (value: Array<number>) {
    if (value) {
      this.form.startDate = value[0]
      let endT = (value[1] + 24 * 60 * 60 * 1000 - 1)
      this.form.endDate = endT
    } else {
      this.form.startDate = getYesterday().startDate
      this.form.endDate = getYesterday().endDate
    }
  }

  private async getMemberList () {
    try {
      let { data } = await getMemberShipList(this.form) // 昨日-新用户注册数
      data.result = data.result || []
      this.list = this.parseData(data.result)
      // if (isInit) {
      //   let accumulatorData = await getMemberShipList({
      //     startDate: '',
      //     endDate: ''
      //   }) // 累计-新用户注册数
      //   let tempData = accumulatorData.data
      //   tempData.result = tempData.result || []
      //   this.accumulatorList = this.parseData(tempData.result)
      // }
    } catch (e) {
    }
  }

  private async getAllUser () {
    try {
      let { data } = await getRegisterTotal({}) // 累计用户注册数
      data.result = data.result || []
      this.accumulatorList = this.parseData(data.result)
    } catch (e) {
    }
  }

  /**
   * 查询
   */
  private search (type: number) {
    switch (type) {
      case 1: // 当日
        this.form = {
          startDate: getYesterday().endDate + 1000,
          endDate: getIntegralTime()
        }
        this.dateRange = [this.form.startDate, this.form.endDate]
        break
      case 2: // 最近一个月
        this.form = {
          startDate: getLastMonth().startDate,
          endDate: getIntegralTime()
        }
        this.dateRange = [this.form.startDate, this.form.endDate]
        break
      default:
        break
    }
    this.yesterday = parseTime(this.form.startDate)
    this.today = parseTime(this.form.endDate)
    this.getMemberList()
  }

  /**
   * 重置
   */
  private resetForm () {
    this.dateRange = null
    this.form['startDate'] = getYesterday().startDate
    this.form['endDate'] = getYesterday().endDate
    this.yesterday = parseTime(getYesterday().startDate)
    this.today = parseTime(getYesterday().endDate)
    this.getMemberList()
  }

  /**
   * 导出Excel
   */
  private handleDownloadExcel () {
    exportExcel(`/export-user-summary`, {
      startDate: new Date(this.yesterday).getTime(),
      endDate: new Date(this.today).getTime()
    })
  }

  private parseData (data: any) {
    let list = data.map((data: any) => {
      data['label'] = this.MemberMap[data.channel_code]
      return data
    })

    // 累加
    let totalCount = data.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.count * 1
    }, 0)
    list.unshift({
      label: '',
      channel_code: '',
      count: totalCount
    })

    return list
  }
}
</script>

<style lang="less" scoped>
.memberShip {
  .option-form {
    margin-right: 200px;
  }
  .history-num {
    padding-left: 30px;
  }
}
</style>
