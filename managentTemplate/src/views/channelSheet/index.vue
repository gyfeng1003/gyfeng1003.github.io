<template>
  <div class="channel-container">
    <div class="option-form">
      <el-form :inline="true" :model="form">
        <el-form-item label="一级渠道">
          <el-select v-model="form.firstChannel" placeholder="请选择一级渠道" clearable>
            <el-option v-for="item in channelSelect"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级渠道">
          <el-input v-model="form.secondChannel" placeholder="请输入二级渠道" clearable></el-input>
        </el-form-item>
        <el-form-item label="三级渠道">
          <el-input v-model="form.thirdChannel" placeholder="请输入三级渠道" clearable></el-input>
        </el-form-item>
        <el-form-item label="创建日期">
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
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="resetForm">
            重置
          </el-button>
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
      @pagination="fetchChannelList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { exportExcel } from '@/api/users'
import { defaultChannelForm, getChannelList } from '@/api/channelSheet'
import CustomTable from '@/components/Table/custom-table.vue'
import Pagination from '@/components/Pagination/index.vue'
import { channelSelect } from '@/utils/constant'

@Component({
  name: 'ChannelSheet',
  components: {
    CustomTable,
    Pagination
  }
})
export default class extends Vue {
  private list: object[] = []
  private columns = [
    { label: '序号', prop: 'id' },
    { label: '用户ID', prop: 'user_id' },
    { label: '一级渠道', prop: 'first_channel' },
    { label: '二级渠道', prop: 'second_channel' },
    { label: '三级渠道', prop: 'third_channel' },
    { label: '创建日期', prop: 'create_time' },
    { label: '修改日期', prop: 'update_time' }
  ]
  private channelSelect = channelSelect
  // private operation = {
  //   label: '操作',
  //   prop: 'operation',
  //   btnList: [
  //     {
  //       label: '查看详情',
  //       type: 'primary',
  //       icon: '',
  //       event: 'look',
  //       show: true,
  //       method: (key: any, row: any) => {
  //         // console.log(row)
  //       }
  //     }
  //   ]
  // }
  private total = 0
  private listQuery = {
    page: 1,
    limit: 10,
    importance: undefined,
    title: undefined,
    type: undefined,
    sort: '+id'
  }
  private form = defaultChannelForm
  private dateRange: any = []

  created () {
    // 获取渠道列表
    this.fetchChannelList()
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

  private async fetchChannelList (params = { page: 0, limit: 10 }) {
    try {
      let { data } = await getChannelList({
        'pageNum': (params.page - 1) > 0 ? (params.page - 1) : 0,
        'pageSize': params.limit || 10,
        ...this.form
      }, { showLoading: true })
      console.log('success')
      this.list = data.result || []
      this.total = data.totalCount
    } catch (e) {
    }
  }

  private async handleDownloadExcel () {
    exportExcel(`/export-register-channel`, this.form)
  }

  private resetForm () {
    this.dateRange = null
    for (let key in this.form) {
      (this.form as any)[key] = ''
    }
    this.listQuery.page = 0
    this.fetchChannelList({ page: 0, limit: this.listQuery.limit })
  }

  /**
   * 查询
   */
  private search () {
    this.listQuery.page = 0
    this.fetchChannelList({ page: 0, limit: this.listQuery.limit })
  }
}
</script>

<style lang="less" scoped>
.option-form {
  margin: 20px 20px 0 20px;
}
</style>
