var densityCanvas = document.getElementById("maleStatsChart").getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var africanData = {
    label: 'African',
    data: [110,177,234],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,

};

var colouredData = {
    label: 'Coloured',
    data: [110,130,60],
    backgroundColor: 'rgba(246, 106, 59)',
    borderWidth: 0,

};

var indianData = {
    label: 'Indian/Asian',
    data: [600,220,200],
    backgroundColor: 'rgba(59, 106, 246, 0.6)',
    borderWidth: 0,

};

var whiteData = {
    label: 'White',
    data: [630,220,110],
    backgroundColor: 'rgba(246, 59, 106, 0.6)',
    borderWidth: 0,

};



var MaleData = {
    labels: ["Junior management","Middle management","Semi skilled"],
    datasets: [africanData, colouredData,indianData,whiteData]
};

var chartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    title:{
        display:true,
        text:'Males',
        fontSize:18
    },
    layouts:{
        padding:{
            left:50 ,
            right: 0,
            bottom:0,
            top:0
        }
    }
};

var barChart = new Chart(densityCanvas, {
    type: 'bar',
    data: MaleData,
    options: chartOptions
});