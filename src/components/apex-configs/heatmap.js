export default {
    chart: {
        id: "vuechart-example",
        type: "heatmap",
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        heatmap: {
            radius: 0
        }
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0
    },
    colors: ["#5854e5"],
    noData: {
        text: 'No data'
    }
}