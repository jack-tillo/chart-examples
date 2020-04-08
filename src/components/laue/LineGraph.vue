<template>
    <div>
        <h3>Line</h3>
        <cartesian :bound="[0, n => n + 1000]" :data="values" :colors="colours">
            <la-line :curve="curveStep" label="Goal" prop="goal" />
            <la-line label="Spend" prop="spend" />
            <la-line label="Revenue" prop="revenue" />
            <la-line dashed label="Predicted" prop="predicted" continues />
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
    data() {
        return {
            colours: ['#c3c3cf', '#59b1e3', '#4f3ad0', '#59b1e3'],
            values: [
                { name: 'Mon', spend: 4000, goal: 2400, revenue: 2400, predicted: null },
                { name: 'Tues', spend: 3000, goal: 1398, revenue: 2210, predicted: null },
                { name: 'Wed', spend: 2000, goal: 9800, revenue: 2290, predicted: null },
                { name: 'Thur', spend: 2780, goal: 3908, revenue: 2000, predicted: null },
                { name: 'Fri', spend: 1890, goal: 4800, revenue: 1700, predicted: null },
                { name: 'Sat', spend: 2390, goal: 3800, revenue: 2500, predicted: null },
                { name: 'Sun', spend: 3490, goal: 4300, revenue: 2100, predicted: 3490 },
                { name: 'Mon', spend: null, goal: null, revenue: null, predicted: 4000  }
            ],
            curveStep: curveStep
        }
    }
}
</script>

<style lang="scss" scoped>
</style>