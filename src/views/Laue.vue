<template>
    <div class="container">
        <h1>Laue Charts</h1>
        <button @click="loadLaueData">Load data</button>
        <laue-line-graph :graph-data="lineData" />
        <laue-scatter-point :graph-data="scatterData" />
    </div>
</template>

<script>
import ScatterPoint from '../components/laue/ScatterPoint'
import LineGraph from '../components/laue/LineGraph'
export default {
    name: 'laue',
    components: {
        'laue-line-graph': LineGraph,
        'laue-scatter-point': ScatterPoint
    },
    data() {
        return {
            lineData: [],
            scatterData: []
        }
    },
    methods: {
        loadLaueData() {
            this.lineData = [
                { name: 'Mon', spend: 4000, goal: 2400, revenue: 2400, predicted: null },
                { name: 'Tues', spend: 3000, goal: 1398, revenue: 2210, predicted: null },
                { name: 'Wed', spend: 2000, goal: 9800, revenue: 2290, predicted: null },
                { name: 'Thur', spend: 2780, goal: 3908, revenue: 2000, predicted: null },
                { name: 'Fri', spend: 1890, goal: 4800, revenue: 1700, predicted: null },
                { name: 'Sat', spend: 2390, goal: 3800, revenue: 2500, predicted: null },
                { name: 'Sun', spend: 3490, goal: 4300, revenue: 2100, predicted: 3490 },
                { name: 'Mon', spend: null, goal: null, revenue: null, predicted: 4000  }
            ]
            this.scatterData = []
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>