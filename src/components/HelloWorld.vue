<script>
import EchartGraph from './EchartGraph.vue';
import EchartGraphTwo from './EchartGraphTwo.vue';
import EchartGraphThree from './EchartGraphThree.vue';
import EchartGraphFour from './EchartGraphFour.vue';
export default {
  name: 'HelloWorld',
  components: {
    EchartGraph,
    EchartGraphTwo,
    EchartGraphThree,
    EchartGraphFour
  },
  mounted() {}
}
</script>

<template>
  <h1 class="title">哈哈哈</h1>
  <div class="contianer">
    <div class="chart-layout">
      <echart-graph></echart-graph>
    </div>
    <div class="chart-layout">
      <echart-graph-two></echart-graph-two>
    </div>
    <div class="chart-layout">
      <echart-graph-three></echart-graph-three>
    </div>
    <div class="chart-layout">
      <echart-graph-four></echart-graph-four>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.chart-layout {
  height: calc(50vh - 20px);
  flex-basis: 45%;
}

.contianer {
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.title {
  margin: 0px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
