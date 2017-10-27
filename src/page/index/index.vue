<template>
  <section class="page_index">
    <z-crumb :crumbList="crumbList"></z-crumb>
    <z-filter :immediacy="filter.immediacy"
              :filter-items="filter.filterItems"
              :area="filter.area"
              @get-params="getParams"></z-filter>
  </section>
</template>

<style lang="less" scoped>
</style>
<script>
  import crumb from 'components/crumb'
  import filter from 'components/filter'
  export default {
    name: 'index',
    components: {
      'z-crumb': crumb,
      'z-filter': filter,
    },
    data() {
      var vm = this;
      return {
        testVModel: [],
        filter: {
          filterItems: {
            test: {
              name: 'name1',
              value: ['双皮奶'],
              options: [
                {
                  value: '',
                  label: '全部'
                },
                {
                  value: '双皮奶',
                  label: '双皮奶'
                },
                {
                  value: '1双皮奶',
                  label: '1双皮奶'
                },
                {
                  value: '2双皮奶',
                  label: '2双皮奶'
                },
                {
                  value: '3双皮奶',
                  label: '3双皮奶'
                }],
              multiple: true
            },
            test1: {
              name: 'name2',
              value: '',
              options: [
                {
                  value: '',
                  label: '全部'
                },
                {
                  value: '1111',
                  label: 'test'
                }]
            }
          },
          area:{
            province: '',
            city: '',
            country: ''
          },
          immediacy: true
        },
        crumbList: [
          {
            label: '首页',
            to: {
              path: '/'
            }
          }
        ]
      }
    },
    methods: {
      getParams(params){
        console.log(params)
      }
    },
    created() {
    },
    mounted() {
      var vm = this;
    },
    beforeDestory(){
    }
  }
</script>
