<template>
  <div id="app" :class="{'no_header': noHeader, 'no_menu': noMenu}">
    <z-header v-if="!noHeader"></z-header>
    <section class="main">
      <z-menu v-if="!noMenu"></z-menu>
      <section class="page_main" :class="{menu_in: menuIn}">
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
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    .page_main {
      position: absolute;
      left: 200px;
      top: 0;
      right: 0;
      bottom: 0;
      .transition(all 0.6s ease);
      &.menu_in {
        left: 64px;
        .transition(all 0.3s ease);
      }
    }
  }
</style>

<script>
  import menu from 'components/menu'
  import header from 'components/header'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    components: {
      'z-menu': menu,
      'z-header': header
    },
    data(){
      return {}
    },
    created() {

    },
    computed: {
      noHeader: function() {
        return this.$store && this.$store.getters.layout.noHeader
      },
      noMenu: function(){
        return this.$store && this.$store.getters.layout.noMenu
      },
      menuIn: function(){
        return this.$store && this.$store.state.layout.menuIn
      }

    }
  }
</script>


