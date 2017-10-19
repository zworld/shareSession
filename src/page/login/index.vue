<template>
  <div>
    name: <input type="text" v-model="name">
    <a href="javascript:void(0)" @click="login">确认</a>
    <router-link :to="{name: 'index'}">index</router-link>
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
      var vm = this;
      vm.$http({
        url: 'data.json'
      }).then(function(data){
        console.log(data)
      })
    }
  }
</script>
