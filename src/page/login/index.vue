<template>
  <div>

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
