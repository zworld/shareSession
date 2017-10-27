<template>
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
    props: {
      crumbList: {
        /*
         example: [
          {
            label: '首页',
            to: {
              path: '/'
            }
          }
         ]
         */
        type: Array,
        default:function(){
          return []
        }
      }
    },
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
    }
  }
</script>
