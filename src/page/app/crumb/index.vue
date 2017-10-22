<template v-if="show">
  <div class="z_crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(crumb,index) in crumbList" :to=crumb.to :key="index">{{ crumb.label }}
    </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
</style>
<script>
  export default {
    data() {
      return {
        crumbListMap: {
          '/': [
            {
              label: '首页',
              to: {
                path: '/'
              }
            }],
          '/login': [
            {
              label: '首页',
              to: {
                path: '/'
              }
            },
            {
              label: '登录页面',
              to: {
                path: '/login'
              }
            }]
        }
      }
    },
    methods: {},
    created() {

    },
    mounted() {
    },
    computed: {
      crumbList: function () {
        return this.crumbListMap[this.$route.path]
      },
      show: function(){
        return this.crumbList.length === 0 ? false : true
      }
    }
  }
</script>
