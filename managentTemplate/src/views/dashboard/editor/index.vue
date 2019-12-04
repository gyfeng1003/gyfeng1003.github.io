<template>
  <div class="dashboard-editor-container">
    editor dashboard
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { UserModule } from '@/store/modules/user'
// import PanThumb from '@/components/PanThumb/index.vue'
// import GithubCorner from '@/components/GithubCorner/index.vue'

@Component({
  name: 'DashboardEditor',
  components: {
    // PanThumb,
    // GithubCorner
  }
})
export default class extends Vue {
  private emptyGif = 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'

  get name () {
    // return UserModule.name
    return 'name'
  }

  // get avatar () {
  //   return UserModule.avatar
  // }
  //
  // get roles() {
  //   return UserModule.roles
  // }
}
</script>

<style lang="less" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;

  .info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }

  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;

    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
