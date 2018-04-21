function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
    var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
    var close = randomNumber(open * 0.95, open * 1.05);
    return {
        t: date.valueOf(),
        y: close
    };
}

var dateFormat = 'MMMM DD YYYY';
var date = moment('April 01 2018', dateFormat);
var data = [randomBar(date, 30)];
var labels = [date];
while (data.length < 30) {
    date = date
        .clone()
        .add(1, 'd');
    if (date.isoWeekday() <= 5) {
        data.push(randomBar(date, data[data.length - 1].y));
        labels.push(date);
    }
}

var ctx = document
    .getElementById('chart-bdfm')
    .getContext('2d');
ctx.canvas.width = 1000;
ctx.canvas.height = 200;
var cfg = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'B',
                data: data,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            xAxes: [
                {
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'labels'
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Sentiment %'
                    }
                }
            ]
        }
    }
};
var chart = new Chart(ctx, cfg);

document
    .getElementById('update')
    .addEventListener('click', function () {
        var type = document
            .getElementById('type')
            .value;
        chart.config.data.datasets[0].type = type;
        chart.update();
    });