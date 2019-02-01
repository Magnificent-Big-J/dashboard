
var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "EARNINGS ",
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10000, 5000, 15000, 10000, 30000, 45000],
            spanGaps: true,
        },
            {
                label: "EARNINGS ",
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10000, 5000, 15000, 10000, 30000, 45000],
                spanGaps: true,
            }
            ,
            {
                label: "EARNINGS ",
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10000, 5000, 15000, 10000, 30000, 45000],
                spanGaps: true,
            }
        ]
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
            text:'Annual Earnings',
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
    }
});

//backgroundColor: 'rgb(255, 99, 132)'