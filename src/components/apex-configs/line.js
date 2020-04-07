export default {
    chart: {
        id: 'vuechart-example',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        },
        events: {
            markerClick: (event, chartContext, { seriesIndex, dataPointIndex, config }) => {
                console.log('event', event)
                console.log('chartContext', chartContext)
                console.log('seriesIndex', seriesIndex)
                console.log('dataPointIndex', dataPointIndex)
                console.log('config', config)
            }
        }
    },
    stroke: {
        curve: ['straight', 'straight', 'stepline', 'straight'],
        dashArray: [0, 0, 0, 5],
        width: 2
    },
    grid: {
        show: true,
        borderColor: '#e6ebef',
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    tooltip: {
        shared: true,
        x: {
            show: false
        }
    },
    xaxis: {
        type: 'datetime',
        labels: {
            format: 'ddd'
        },
        crosshairs: {
            show: true
        },
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        show: false,
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    },
    colors: ['#5bb0e3', '#5854e5', '#c3c3cf', '#5bb0e3'],
    noData: {
        text: 'No data'
    }
}