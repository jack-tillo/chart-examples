<template>
    <div id="chart">
        <h1>Apex Charts with Vue wrapper</h1>
        <button @click="loadChartData">Load data</button>
        <apexchart width="600px" type="line" :options="lineOptions" :series="lineData" />
        <apexchart width="600px" type="heatmap" :options="heatmapOptions" :series="heatmapData" />
    </div>
</template>

<script>
import lineConfig from './apex-configs/line'
import heatmapConfig from './apex-configs/heatmap'
export default {
    name: 'Apex',
    data() {
        return {
            lineOptions: lineConfig,
            lineData: [],
            heatmapOptions: heatmapConfig,
            heatmapData: []
        }
    },
    methods: {
        loadChartData () {
            fetch('./static/data-line.json')
                .then(res => res.json())
                .then(res => {
                    this.lineData = res.chart
                })
            fetch('./static/data-heatmap.json')
                .then(res => res.json())
                .then(res => {
                    this.heatmapData = res.chart
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chart {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
