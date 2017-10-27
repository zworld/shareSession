<template>
  <div class="z_mutil_select">
    <div class="el-select" @click="active=!active" ref="input">
      <div class="el-input">
        <div class="tags">
          <el-tag type="primary" v-for="tag in tags" :key="tag">{{ tag || '全部'}}</el-tag>
        </div>
        <i :class="['el-input__icon', 'el-icon-caret-top', {'is-reverse': active}]"></i>
        <input readonly="readonly" type="text" class="el-input__inner">
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <ul class="el-dropdown-menu" v-if="active" @click.stop>
        <li class="el-select-dropdown__item" v-for="(item,index) in options" @click="select(item.value)"
            :key="item.value">
          <span>{{item.label}}</span>
          <i class="el-icon-check checked"
             v-if="isSelected(item.value)"></i>
        </li>
        <li class="btn_wrapper">
          <el-button
            @click="setValue"
            size="mini"
            type="primary">确认
          </el-button>
        </li>
      </ul>
    </transition>
  </div>
</template>
<style lang="less">
  @import "../../assets/css/lib";
  .z_mutil_select {
    .pos(r);
    display: inline-block;
    .el-select-dropdown__item {
      min-width: 217px;
    }
    .tags {
      position: absolute;
      left: 0;
      .text-ellipsis();
      height: 36px;
      line-height: 36px;
      right: 25px;
    }
    .el-select {
      position: relative;
    }
    .el-dropdown-menu {
      top: 36px;
      .btn_wrapper {
        text-align: right;
        padding: 8px 10px;
      }
      .checked {
        float: right;
        position: relative;
        top: 4px;
        font-size: 12px;
        color: #20a0ff
      }
    }
  }
</style>
<script>
  export default {
    props: {
      value: {
        type: Array,
        default: function () {
          return []
        }
      },
      options: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        active: false,
        //管理临时的选择状态
        tempValue: []
      }
    },
    methods: {

      //是否选中
      isSelected(itemValue){
        return this.tempValue.includes(itemValue)
      },

      //选择
      select(itemValue){
        var vm = this;
        if (itemValue === '') return vm.tempValue = [''];
        let allIndex = vm.tempValue.findIndex(item => item === '')
        if (allIndex !== -1) {
          vm.tempValue.splice(allIndex, 1)
          vm.tempValue.push(itemValue)
          return
        } else {
          var i = vm.tempValue.indexOf(itemValue);
          i === -1 ? vm.tempValue.push(itemValue) : vm.tempValue.splice(i, 1)
          if (vm.tempValue.length === 0) vm.tempValue = ['']
        }
      },

      //通过v-model设置value
      setValue(){
        var vm = this;
        this.active = false
        var inputVal = vm.rank(vm.tempValue,vm.optionsVal);
        if(_.isEqual(inputVal,vm.value)) return
        this.$emit('change',inputVal)
        this.$emit('input', inputVal);
      },
      //对选项排序
      rank(arr,referArr){
        var result = arr.slice()
        result.sort(function(pre,next){
          return referArr.indexOf(pre) - referArr.indexOf(next)
        })
        return result
      },

      //点击空白关闭下拉
      close(e){
        var vm = this;
        if (e.path.includes(vm.$refs.input)) return
        vm.active = false
      }
    },
    created() {
    },
    mounted() {
      document.body.addEventListener('click', this.close)
    },
    beforeDestroy(){
      document.body.removeEventListener('click', this.close)
    },

    watch: {
      active: function (newValue) {
        if (newValue) {
          this.tempValue = this.value.slice(0)
        }
      }
    },

    computed: {
      tags: function () {
        return this.active ? [] : this.value
      },
      optionsVal: function(){
        return this.options.map(item=>item.value)
      }
    }
  }
</script>
