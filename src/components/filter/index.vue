<template>
  <section class="z_filter">
    <!--下拉选择-->
    <template v-for="(selectItem,key) in filterItems">
      <!--多选-->
      <div class="select_wrapper" v-if="selectItem.multiple">
        <span>{{ selectItem.name }}</span>
        <z-mutil-select v-model="selectItem.value"
                        :options="selectItem.options"
                        @change="change"></z-mutil-select>
      </div>
      <!--单选-->
      <div class="select_wrapper" v-else>
        <span>{{ selectItem.name }}</span>
        <el-select v-model="selectItem.value"
                   @change="change"
                   placeholder="请选择">
          <el-option
            v-for="(option,index) in selectItem.options"
            :key="index"
            :change="change"
            :label="option.label"
            :value="option.value">
          </el-option>
        </el-select>
      </div>
    </template>
    <!--区域-->
    <div class="select_wrapper" v-if="area">
      <span>地区</span>
      <z-city-select :area="area"
                     :init-province-list="initProvinceList"
                     @change="change" v-if="area"></z-city-select>

    </div>
    <slot></slot>
    <el-button v-if="!immediacy"
               type="primary"
               size="small"
               @click="pass()">确认


    </el-button>
  </section>
</template>
<style lang="less" scoped>
  .select_wrapper {
    display: inline-block;
    margin: 0 10px 10px 0;
  }
</style>
<script>
  import mutilSelect from 'components/mutilSelect'
  import citySelect from 'components/citySelect'
  export default {
    components: {
      'z-mutil-select': mutilSelect,
      'z-city-select': citySelect
    },
    props: {
      filterItems: {
        type: Object,
        default: function () {
          return {}
        }
      },
      immediacy: {
        type: Boolean,
        default: true
      },
      area: {
        type: Object
      },
      initProvinceList: {
        type: Array,
        default:function(){
          return []
        }
      }
    },
    data() {
      var vm = this;
      return {}
    },
    methods: {
      //向父组件传递参数
      pass(){
        this.$emit('get-params', this.params)
      },
      //下拉改变
      change(value){
        if (this.immediacy) {
          this.pass()
        }
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {
      'params': {
        deep: true,
        handler: function (val, oldVal) {
        }
      }
    },
    computed: {
      params: function () {
        let vm = this;
        let filter = vm.filterItems;
        let area = vm.area || {};
        let result = {};
        //下拉参数
        for (let key in filter) {
          result[key] = filter[key].value
        }
        //地区参数
        for (let key in area) {
          result[key] = area[key]
        }
        return result
      }
    }
  }
</script>
