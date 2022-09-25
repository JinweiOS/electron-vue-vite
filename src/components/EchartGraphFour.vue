<template>
  <div ref="chart" class="container"></div>
</template>
<script>
import * as echarts from 'echarts';
import data from '../json/second.json'
export default {
  name: 'EchartGraphFour',
  data: function() {
    return {
      myChart: null,
      option: null,
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.chart);
    this.render(data);
  },
  methods: {
    render(json) {
      this.myChart.hideLoading();
      this.myChart.setOption(
      {
          title: {
            text: 'NPM Dependencies'
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              // progressiveThreshold: 700,
              data: json.nodes.map(function (node) {
                return {
                  x: node.x,
                  y: node.y,
                  id: node.id,
                  name: node.label,
                  symbolSize: node.size,
                  itemStyle: {
                    color: node.color
                  }
                };
              }),
              edges: json.edges.map(function (edge) {
                return {
                  source: edge.sourceID,
                  target: edge.targetID
                };
              }),
              emphasis: {
                focus: 'adjacency',
                label: {
                  position: 'right',
                  show: true
                }
              },
              roam: true,
              lineStyle: {
                width: 0.5,
                curveness: 0.3,
                opacity: 0.7
              }
            }
          ]
        }),
        true
    }
  }
}
</script>
<style>
  .container {
    height: 100%;
    width: 100%;
  }
</style>
