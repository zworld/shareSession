<template>
  <div>
    name: <input type="text" v-model="name">
    <a href="javascript:void(0)" @click="login">确认</a>
  </div>

</template>

<style lang="less" scoped>
</style>
<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      login(){

      }
    },
    created() {

    },
    mounted() {
    }
  }
</script>
