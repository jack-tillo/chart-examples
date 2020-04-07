<template>
    <div id="my-chart"></div>
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
                columns: [
                    ['x', '2020-04-05', '2020-04-06', '2020-04-07', '2020-04-08', '2020-04-09', '2020-04-10', '2020-04-11', '2020-04-12'],
                    ...val
                ]
            })
        }
    },
    mounted() {
        this.chart = c3.generate({
            bindto: '#my-chart',
            size: {
                height: 350,
                width: 800
            },
            data: {
                x: 'x',
                columns: [
                    [
                        'x',
                        '2020-04-05',
                        '2020-04-06',
                        '2020-04-07',
                        '2020-04-08',
                        '2020-04-09',
                        '2020-04-10',
                        '2020-04-11',
                        '2020-04-12'
                    ],
                    ['Revenue', 0, 0, 0, 0, 0, 0, 0, 0],
                    ['Spend', 0, 0, 0, 0, 0, 0, 0, 0],
                    ['Goal', 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                types: {
                    Revenue: 'line',
                    Spend: 'line',
                    Goal: 'step'
                },
                regions: {
                    Revenue: [{ start: '2020-04-11', style: 'dashed' }],
                    Spend: [{ start: '2020-04-11', style: 'dashed' }]
                }
            },
            color: {
                pattern: ['#5bb0e3', '#5854e5', '#c3c3cf']
            },
            point: {
                show: false
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: x =>
                            ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'][
                                x.getDay()
                            ]
                    }
                },
                y: {
                    show: false
                }
            },
            regions: [{ axis: 'x', start: '2020-04-11' }],
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