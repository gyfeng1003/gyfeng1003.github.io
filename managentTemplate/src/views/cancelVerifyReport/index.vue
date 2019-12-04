<template>
  <div class="report-container">
    <div class="option-form">
      <el-form :inline="true" :model="form">
        <el-form-item label="日期范围">
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
        <el-form-item label="商品名称">
          <el-input v-model="form.goodsName" placeholder="请输入商品名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="商户名称">
          <el-input v-model="form.merchantName" placeholder="请输入商户名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="商户电话">
          <el-input v-model="form.merchantPhone" placeholder="请输入商户电话" clearable></el-input>
        </el-form-item>
        <el-form-item label="核销状态">
          <el-select v-model="form.couponStatus" placeholder="请选择核销状态" clearable>
            <el-option v-for="item in couponStatusOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        icon="el-icon-document"
        @click="handleDownloadExcel"
      >
        导出 Excel
      </el-button>
    </div>
    <custom-table :list="list" :columns="columns"></custom-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchCouponVerifyList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
// import { formatJson } from '@/utils'
// import { exportJson2Excel } from '@/utils/excel'
import { getCouponVerifyList, exportExcel, defaultCancelVerifyForm } from '@/api/users'
import CustomTable from '@/components/Table/custom-table.vue'
import Pagination from '@/components/Pagination/index.vue'

@Component({
  name: 'CancelVfReport',
  components: {
    CustomTable,
    Pagination
  }
})
export default class extends Vue {
  private list: object[] = []
  private columns = [
    { label: '序号', prop: 'id' },
    { label: '门店账号', prop: 'merchant_id' },
    { label: '所属商户', prop: 'merchant_name' },
    { label: '商户电话', prop: 'merchant_phone' },
    { label: '核销商品名称', prop: 'goods_name' },
    { label: '优惠券Code', prop: 'coupon_code' },
    { label: '核销状态', prop: 'coupon_status' },
    { label: '核销时间', prop: 'user_time' }
  ]
  private operation = {
    label: '操作',
    prop: 'operation',
    btnList: [
      {
        label: '查看详情',
        type: 'primary',
        icon: '',
        event: 'look',
        show: true,
        method: (key: any, row: any) => {
          // console.log(row)
        }
      }
    ]
  }
  private couponStatusOptions = [
    { value: '0', label: '未使用' },
    { value: '1', label: '已使用' },
    { value: '2', label: '已过期' },
    { value: '3', label: '已失效' },
    { value: '5', label: '退券中' },
    { value: '6', label: '已退券' }
  ]
  private total = 0
  private listQuery = {
    page: 1,
    limit: 10,
    importance: undefined,
    title: undefined,
    type: undefined,
    sort: '+id'
  }
  // private filename = '核销报表'
  // private autoWidth = true
  // private bookType = 'xlsx'
  private form = defaultCancelVerifyForm
  private dateRange: Array<number> = []

  created () {
    // 获取优惠券列表
    this.fetchCouponVerifyList()
  }

  @Watch('dateRange')
  private onDateRangeChange (value: Array<number>) {
    if (value) {
      this.form.startDate = value[0]
      let endT = (value[1] + 24 * 60 * 60 * 1000 - 1)
      this.form.endDate = endT
    } else {
      this.form.startDate = ''
      this.form.endDate = ''
    }
  }

  private async fetchCouponVerifyList (params = { page: 0, limit: 10 }) {
    console.log(params)
    try {
      let { data } = await getCouponVerifyList({
        'pageNum': (params.page - 1) > 0 ? (params.page - 1) : 0,
        'pageSize': params.limit || 10,
        ...this.form
      }, { showLoading: true })
      this.list = data.result || []
      this.total = data.totalCount
    } catch (e) {
    }
  }

  private async handleDownloadExcel () {
    // let labelArr = this.columns.map((data) => {
    //   return data.label
    // })
    // let propArr = this.columns.map((data) => {
    //   return data.prop
    // })
    // let data = formatJson(propArr, this.list)
    // exportJson2Excel(labelArr, data, this.filename !== '' ? this.filename : undefined, undefined, undefined, this.autoWidth, this.bookType)
    exportExcel(`/exportCouponVerifyList`, this.form)
  }

  /**
   * 查询
   */
  private search () {
    this.listQuery.page = 0
    this.fetchCouponVerifyList({
      page: 0,
      limit: this.listQuery.limit
    })
  }
}
</script>

<style lang="less" scoped>
.option-form {
  margin: 20px 20px 0 20px;
}
</style>
