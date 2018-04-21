var ctx = document
    .getElementById('radar-ace')
    .getContext('2d');
// ctx.canvas.width = 50; ctx.canvas.height = 50;

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Track Fire', 'Overcrowding', 'Sick Passenger', 'Power Outage', 'Signal Failure'
        ],
        datasets: [
            {
                data: [12, 5, 4, 1, 4]
            }
        ]
    },
    options: {
        scale: {
            ticks: {
                display: false
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: false
        }

    }
});
