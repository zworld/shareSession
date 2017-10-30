<template>
  <div class="z_city_select">
    <el-select @change="provinceChange" v-model="area.province" placeholder="请选择省">
      <el-option
        v-for="item in provinceList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select @change="cityChange" v-model="area.city" placeholder="请选择市">
      <el-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="area.country" placeholder="请选择区县">
      <el-option
        v-for="item in countryList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<style lang="less">
  @import "../../assets/css/lib";
  .z_city_select {
    display: inline-block;
    .el-select {
      width: 130px
    }
  }
</style>
<script>
  var url = 'getAreaList';
  import Mock from 'mockjs'
  Mock.mock('', function (options) {
    return {
      code: 1,
      data: {
        list: ['成都', '内江']
      }
    }
  })
  export default {
    props: {
      area: {
        type: Object,
        default: {
          province: '',
          city: '',
          country: ''
        }
      },
      initProvinceList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        province: '',
        city: '',
        country: '',
        provinceList: [{
          value: '',
          label: '全部'
        }],
        cityList: [
          {
            value: '',
            label: '全部'
          }],
        countryList: [
          {
            value: '',
            label: '全部'
          }],
      }
    },
    methods: {
      getProvinceList(){
        var vm = this;
        if (vm.initProvinceList.length !== 0) {
          vm.provinceList = vm.handleList(vm.initProvinceList)
        } else {
          vm.$http({
            url: url,
            params: {
              name: 'test'
            }
          }).then(function (data) {
            vm.provinceList = vm.handleList(data.list)
          })
        }
      },
      pass(){
        this.$emit('change', this.params)
      },
      provinceChange(val){
        var vm = this;
        vm.area.city = '';
        vm.area.country = '';
        vm.countryList = [{
          label: '全部',
          value: ''
        }]
        if (!val) {
          vm.cityList = [{
            label: '全部',
            value: ''
          }];
        } else {
          vm.$http({
            url: url,
            params: {province: vm.province}
          }).then(function (data) {
            vm.cityList = vm.handleList(data.list)
          })
        }
        //向父组件传递参数
        vm.pass()
      },

      cityChange(val){
        var vm = this;
        vm.area.country = '';
        if(!val){
          vm.countryList = [{
            label: '全部',
            value: ''
          }]
        }else{
          vm.$http({
            url: url,
            params: {
              city: vm.city
            }
          }).then(function(data){
            vm.countryList = vm.handleList(data.list)
          })
        }
        //向父组件传递参数
        vm.pass()
      },
      countryChange(val){
        var vm = this;
        //向父组件传递参数
        vm.pass()
      },
      handleList(listArr){
        var result = [{
          label: '全部',
          value: ''
        }]
        listArr.forEach(item =>
          result.push({
            label: item,
            value: item
          }))
        return result
      }
    },
    created(){
      var vm = this;
      //获取provinceList
      vm.getProvinceList()
    },
    computed: {
      params: function () {
        return {
          province: this.province,
          city: this.city,
          country: this.country
        }
      }
    }
  }
</script>
