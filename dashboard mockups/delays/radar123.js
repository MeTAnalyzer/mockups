var ctx = document
    .getElementById('radar-123')
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
                data: [5, 2, 3, 4, 15]
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