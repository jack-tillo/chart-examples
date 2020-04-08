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
            this.lineData = []
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