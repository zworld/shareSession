<template>
  <nav>
    <span href="javascript:void(0);" class="menu_toggle"  @click="toggleMenu"><i class="el-icon-more"></i></span>
    <el-menu
      theme="dark"
      class="menu"
      :router="true"
      :collapse= "memuIn"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="/">选项1</el-menu-item>
          <el-menu-item index="login">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="event">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>
<style>
  nav .menu:not(.el-menu--collapse){
    width: 200px;
  }
</style>
<style lang="less" scoped>
  @import "../../../assets/css/lib";
  nav{
    display: inline-block;
    background: @theme-menu;
    height: 100%;
    .menu_toggle{
      display: block;
      line-height: 30px;
      text-align: center;
      background: darken(@theme-menu,2%);
    }
  }
</style>
<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    methods: {
      toggleMenu() {
        //全局设置menu状态
        var vm = this;
        this.$emit('collapse-change', vm.memuIn)
        this.$store.commit('MENU_TOGGLE')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {

    },
    mounted() {
    },
    computed:{
      memuIn: function () {
        return this.$store.state.layout.menuIn
      }
    }
  }
</script>
