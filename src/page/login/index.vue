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
        var vm = this;
        vm.$http({
          url: 'login.json'
        }).then(function(data){
            //登录成功
            vm.$http({
              url: 'getUserData.json'
            }).then(function(data){

            })
        })
      }
    },
    created() {

    },
    mounted() {
      var vm = this;

    }
  }
</script>
