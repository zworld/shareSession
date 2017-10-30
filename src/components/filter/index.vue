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
    <div class="select_wrapper" v-if="date">
      <span>时间范围</span>
      <el-date-picker
        v-model="dateList"
        :clearable="false"
        type="datetimerange"
        :picker-options="dateOptions"
        placeholder="选择时间范围"
        @change="timeChange"
        format="yyyy-MM-dd"
        align="right">
      </el-date-picker>
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
        default: function () {
          return []
        }
      },
      date: {
        type: Array
      }
    },
    data() {
      var vm = this;
      return {
        //初始化参数
        initParams: {},
        //设置日期
        dateList: [],
        dateOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
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
      },
      timeChange(time){
        console.log(time)
      },
      getParams(){
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
        //时间参数
        if(vm.date){
          result.startTime = vm.dateList[0];
          result.endTime = vm.dateList[1];
        }
        return result
      }
    },
    created() {
      //处理时间参数
      this.dateList = this.date ? this.date.slice() : []
      //获取初始化参数
      this.initParams = this.getParams()
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
        return this.getParams()
      }
    }
  }
</script>
