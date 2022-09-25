//----------------------------gráfico 1----------------------------
import jsonData from './data_herbicidas.json'assert { type: "json" };
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            jsonData[0].produto,
            jsonData[1].produto,
            jsonData[2].produto,
            jsonData[3].produto,
            jsonData[4].produto,
        ],
        datasets: [{
            data: [
                jsonData[0].price,
                jsonData[1].price,
                jsonData[2].price,
                jsonData[3].price,
                jsonData[4].price,

            ],
            backgroundColor: [
                '#92E3A9',
                '#6495ED',
                '#FFD700',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',


            ],
            borderRadius: ['5'],

        }]
    },
    options: {
        onHover: (event, chartElement) => {
            event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
            if (chartElement.length === 1) {
                event.native.target.style.cursor = 'pointer';
            };
            if (chartElement.length === 0) {
                event.native.target.style.cursor = 'default';
            };
        },
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {


            },
        },
        scales: {

            x: {

                grid: {
                    color: 'hsl(33, 100%, 98%)',
                    drawBorder: false,

                },

            },
            y: {
                display: false,
            },
        },

    },
    plugins: []
}
);

//----------------------------gráfico 2----------------------------
import jsonDataMarketing from './data_propaganda.json'assert { type: "json" };
const ctm = document.getElementById('myChartAds');
const myChartAds = new Chart(ctm, {
    type: 'bar',
    data: {
        labels: [
            jsonDataMarketing[0].anuncio,
            jsonDataMarketing[1].anuncio,

        ],
        datasets: [{
            data: [
                jsonDataMarketing[0].qtd,
                jsonDataMarketing[1].qtd,


            ],
            backgroundColor: [
                '#92E3A9',
                '#6495ED',
            ],
            borderRadius: ['5'],

        }]
    },
    options: {
        onHover: (event, chartElement) => {
            event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
            if (chartElement.length === 1) {
                event.native.target.style.cursor = 'pointer';
            };
            if (chartElement.length === 0) {
                event.native.target.style.cursor = 'default';
            };
        },
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {

            x: {

                grid: {
                    color: 'hsl(33, 100%, 98%)',
                    drawBorder: false,

                },

            },
            y: {
                display: true,
            },
        },

    },
    plugins: []
}
);