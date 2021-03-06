var densityCanvas = document.getElementById("femaleStatsChart2").getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var africanData = {
    label: 'African',
    data: [110,170,230],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,

};

var colouredData = {
    label: 'Coloured',
    data: [151,130,600],
    backgroundColor: 'rgba(246, 106, 59)',
    borderWidth: 0,

};

var indianData = {
    label: 'Indian/Asian',
    data: [600,722,200],
    backgroundColor: 'rgba(59, 106, 246, 0.6)',
    borderWidth: 0,

};

var whiteData = {
    label: 'White',
    data: [635,220,114],
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
        text:'Females',
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