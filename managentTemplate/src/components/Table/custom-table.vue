<template>
  <div class="table-box">
    <el-table :data="list">
      <template v-for="(column, index) in columns">
        <el-table-column :key="index"
                         :fixed="column.fixed"
                         :prop="column.prop"
                         :label="column.label">

        </el-table-column>
      </template>
      <el-table-column :label="operation.label" :prop="operation.prop" v-for="(btn, idx) in operation.btnList"
                       :key="idx+columns.length">
        <template slot-scope="scope">
          <el-button :type="btn.type" :icon="btn.icon"
                     @click.native.prevent="btn.method(btn, scope.row)">{{btn.label}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CustomTable'
})
export default class extends Vue {
  @Prop({ default: () => [] }) private list!: object[]
  @Prop({ default: () => [] }) private columns!: object[]
  @Prop({ default: () => ({}) }) private operation!: object
}
</script>

<style lang="less" scoped>
.table-box {
  padding: 20px;
}
</style>
