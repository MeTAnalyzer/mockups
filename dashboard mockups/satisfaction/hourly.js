var ctx = document
    .getElementById('myChart')
    .getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'M',
            'T',
            'W',
            'T',
            'F',
            'S',
            'S'
        ],
        datasets: [

            {
                fill: false,
                borderColor: "rgba(255,0,0,0.9)",
                backgroundColor: "rgba(255,0,0,0.9)",
                label: '1 train',
                data: [
                    12,
                    19,
                    3,
                    17,
                    6,
                    3,
                    7
                ]
            }, {
                fill: false,
                borderColor: "rgba(0,255,0,0.9)",
                backgroundColor: "rgba(0,255,0,0.9)",
                label: '6 train',
                data: [
                    2,
                    29,
                    5,
                    5,
                    2,
                    3,
                    10
                ]
            }
        ]
    },
    options: {
        scales: {

            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        // labelString: 'Days of the Week'
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Sentiment Index'
                    }
                }
            ]
        }
    }
});