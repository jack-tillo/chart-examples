<template>
    <div>
        <h3>Line</h3>
        <cartesian :bound="[0, n => n + 1000]" :data="values" :colors="colours">
            <la-line dot :curve="curveStep" label="Goal" prop="goal" />
            <la-line dot label="Spend" prop="spend" />
            <la-line dot label="Revenue" prop="revenue" />
            <la-line dot dashed label="Predicted" prop="predicted" continues />
            <y-axis />
            <x-axis prop="name" />
            <tooltip/>
            <la-legend selectable/>
        </cartesian>
    </div>
</template>

<script>
import { Cartesian, Line, YAxis, XAxis, Tooltip, Legend } from 'laue'
import { curveStep } from 'd3-shape'
export default {
    props: {
        graphData: Array
    },
    components: {
        Cartesian,
        'la-line': Line,
        YAxis,
        XAxis,
        Tooltip,
        'la-legend': Legend
    },
    watch: {
        graphData(val) {
            this.values = val
        }
    },
    data() {
        return {
            colours: ['#c3c3cf', '#59b1e3', '#4f3ad0', '#59b1e3'],
            values: [
                { name: 'Mon', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Tues', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Wed', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Thur', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Fri', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Sat', spend: 0, goal: 0, revenue: 0, predicted: null },
                { name: 'Sun', spend: 0, goal: 0, revenue: 0, predicted: 0 },
                { name: 'Mon', spend: null, goal: null, revenue: null, predicted: 0  }
            ],
            curveStep: curveStep
        }
    }
}
</script>

<style lang="scss" scoped>
</style>