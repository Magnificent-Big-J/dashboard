
var ctx = document.getElementById("myChart2").getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Digital", "Marketing", "Shared Services", "Consulting Services", "People Services", "Advisory Services", "Suppliers"],
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
            borderColor: '#FFF',
            data: [75, 74, 55, 45, 73, 30,25],

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
            text:'Department Performance',
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