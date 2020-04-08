<template>
    <div id="my-chart2"></div>
</template>

<script>
import c3 from 'c3'
export default {
    props: {
        graphData: Array
    },
    data() {
        return {
            chart: {}
        }
    },
    watch: {
        graphData(val) {
            this.chart.load({
                columns: [...val]
            })
        }
    },
    mounted() {
        this.chart = c3.generate({
            bindto: '#my-chart2',
            size: {
                height: 350,
                width: 800
            },
            data: {
                x: 'x',
                columns: [
                    [
                        'x',
                        0,
                        1,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        5,
                        2,
                        5,
                        6,
                        2,
                        6,
                        7,
                        2,
                        0,
                        2,
                        6,
                        2,
                        6,
                        2,
                        6,
                        8,
                        3,
                        3,
                        6,
                        7,
                        3
                    ],
                    [
                        '',
                        0,
                        1,
                        1,
                        2,
                        3,
                        3,
                        3,
                        4,
                        1,
                        2,
                        4,
                        6,
                        2,
                        6,
                        5,
                        3,
                        2,
                        6,
                        3,
                        7,
                        9,
                        0,
                        3,
                        7,
                        8,
                        3,
                        7,
                        8,
                        3,
                        7
                    ]
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    type: 'category',
                    categories: [
                        'mon',
                        'tues',
                        'wed',
                        'thur',
                        'fri',
                        'sat',
                        'sun'
                    ]
                },
                y: {
                    label: 'Time of day',
                    format: x => `${x} am`
                }
            },
            grid: {
                x: {
                    show: true
                }
            }
        })
        this.chart.element = this.$refs['chart-container']
    }
}
</script>

<style lang="scss">
#line1 {
    width: 800px;
    height: 350px;
}

.c3-lines,
.domain {
    fill: transparent;
}

.c3-xgrid {
    stroke-width: 1px;
    stroke: #dddcdc;
    &:first-of-type,
    &:last-of-type {
        stroke: none;
    }
}

.c3-xgrid-focus {
    stroke: #adadad;
}
</style>