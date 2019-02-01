var ctx = document.getElementById("bar-chart-grouped").getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Junior management","Middle management","Semi skilled","Senior management","Top management","Unskilled"],
        datasets: [
            {
                label: "Africa",
                backgroundColor: "#3e95cd",
                data: [133,221,783,2478]
            }, {
                label: "Europe",
                backgroundColor: "#8e5ea2",
                data: [408,547,675,734]
            }
            ,{
                label: "Asia",
                backgroundColor: "#3e934d",
                data: [133,221,783,2478]
            }, {
                label: "North America",
                backgroundColor: "#8e5232",
                data: [408,547,675,734]
            }
            ,{
                label: "Australia",
                backgroundColor: "#3dd34d",
                data: [133,221,783,2478]
            }, {
                label: "Antarctica",
                backgroundColor: "#8eff32",
                data: [408,547,675,734]
            }

        ]
    },
    options: {
        title: {
            display: true,
            text: 'Population growth (millions)'
        }
    }
});

