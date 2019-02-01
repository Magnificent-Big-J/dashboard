
var ctx = document.getElementById("occ-level").getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Junior management","Middle management","Semi skilled","Senior management","Top management","Unskilled"],
        datasets: [{
            label: "OCC Level Per  Skills",
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: '#FFF',
            data: [2323,618,2958,89,6,455],

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title:{
            display:true,
            text:'OCC Level Grand Total Per  Skills',
            fontSize:18
        },
        layouts:{
            padding:{
                left:50 ,
                right: 0,
                bottom:0,
                top:0
            }
        },
        legend:{
            display:true,
            position:'right',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});

//backgroundColor: 'rgb(255, 99, 132)'