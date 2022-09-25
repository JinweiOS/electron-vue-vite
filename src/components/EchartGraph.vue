<template>
  <div ref="chart" class="container"></div>
</template>
<script>
import * as echarts from 'echarts'
import { $on, TypeSet } from '../EventBus'
const localDataChart = []
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  localDataChart.push(randomData());
}
console.log(localDataChart)
function randomData() {
  // +now可以转换为时间戳
  now = new Date(+now + oneDay);
  console.log(now, 'now')
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}
// 表格配置
const option = {
  title: {
    text: 'WS动态数据监控'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      var date = new Date(params.name);
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' : ' +
        params.value[1]
      );
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data: localDataChart
    }
  ]
};

export default {
  name: 'EchartGraph',
  mounted() {
    // 初始化图标
    const chart = echarts.init(this.$refs.chart)
    chart.setOption(option)
    // $on(TypeSet.resize, () => {
    //   myChart.resize()
    // })
    const socket = new WebSocket('ws://127.0.0.1:9000');
    socket.addEventListener('message', (event) => {
      // TODO: GET DATA
      // if (localDataChart.length > 1000) {
      //   localDataChart.shift()
      // }
      console.log(event.data)
      localDataChart.push(JSON.parse(event.data))
      // TODO: ECHARTS更新
      chart.setOption({
        series: {
          data: localDataChart
        }
      })
    })
  }
}
</script>
<style>
.container {
  width: 100%;
  height: 100%;
}
</style>
