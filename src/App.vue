<template>
  <div id="app" :class="{'no_header': noHeader, 'no_menu': noMenu}">
    <!--头部-->
    <z-header v-if="!noHeader"></z-header>
    <!--中间-->
    <section class="main">
      <!--左边栏-->
      <z-menu v-if="!noMenu" @collapse-change="addPageCollapse"></z-menu>
      <!--右边内容区域-->
      <section class="page_main" :class="{menu_in: menuIn,'page_collapse': pageCollapse}">
      <!--页面路由-->
        <router-view/>
      </section>
    </section>
  </div>
</template>

<style lang="less" scoped>
  @import "./assets/css/lib";

  .no_header {
    .main {
      top: 0;
    }
  }

  .no_menu {
    .main {
      .page_main {
        left: 0;
      }
    }
  }

  .main {
    background: @page-bg;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    .page_main {
      position: absolute;
      padding: 10px;
      left: 200px;
      top: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      &.page_collapse {
        .transition(all 0.3s ease-in-out);
      }
      &.menu_in {
        left: 64px;
      }
    }
  }
</style>

<script>
  import menu from 'page/app/menu'
  import header from 'page/app/header'
  import crumb from 'page/app/crumb'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    components: {
      'z-menu': menu,
      'z-header': header,
      'z-crumb': crumb
    },
    data(){
      return {
        pageCollapse: false
      }
    },
    methods: {
      addPageCollapse(val){
        this.pageCollapse = true;
      }
    },
    created() {
    },
    mounted(){
      var vm = this;
    },
    computed: {
      noHeader: function () {
        return this.$store && this.$store.getters.layout.noHeader
      },
      noMenu: function () {
        return this.$store && this.$store.getters.layout.noMenu
      },
      menuIn: function () {
        return this.$store && this.$store.state.layout.menuIn
      }

    },

    watch:{
      '$route':function(){
        this.pageCollapse = false;
      }
    }
  }
</script>


