<template>
  <div ref="chart" class="container"></div>
</template>
<script>
import * as echarts from 'echarts';
import {$on, TypeSet} from '../EventBus'
const option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};



export default {
  name: 'EchartGraphThree',
  data: function () {
    return {
      arr: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      chart: null
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart)
    // 设置option对象的数据

    // option.series.data = this.arr.map(item => item);
    // console.log(option)
    this.chart.setOption(option);
    console.log(Object.entries(this.arr).map(item => item))
    // 监听resize
    $on(TypeSet.resize, () => {
      this.chart.resize()
    })
  },
  // methods: {
  //   resizeChart() {
  //     this.chart.resize()
  //   }
  // },
}
</script>
<style>
  .container {
    height: 100%;
    width: 100%;
  }
</style>
