<template>
    <div class="container">
        <h1>c3.js Charts</h1>
        <button @click="loadC3Data">Load data</button>
        <c3-line-graph :graph-data="lineData" />
        <c3-scatter-point :graph-data="scatterData" />
    </div>
</template>

<script>
import ScatterPoint from '../components/c3/ScatterPoint'
import LineGraph from '../components/c3/LineGraph'
export default {
    name: 'c3',
    components: {
        'c3-line-graph': LineGraph,
        'c3-scatter-point': ScatterPoint
    },
    data() {
        return {
            lineData: [],
            scatterData: []
        }
    },
    methods: {
        loadC3Data() {
            this.lineData = [
                ['Revenue', 30, 200, 100, 400, 150, 250, 120, 400],
                ['Spend', 130, 340, 200, 500, 250, 350, 320, 500],
                ['Goal', 200, 200, 240, 240, 250, 260, 200, 300]
            ]
            this.scatterData = [
                ['one_x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                ['one', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            ]
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