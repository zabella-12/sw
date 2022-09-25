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
            label: 'Anúncios X Vendas',
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

//----------------------------gráfico 3----------------------------
import jsonDataAnual from './data_anual.json'assert { type: "json" };
const cta = document.getElementById('myChartAnually');
const myChartAnually = new Chart(cta, {
    type: 'line',
    data: {
        labels: [
            jsonDataAnual[0].ano,
            jsonDataAnual[1].ano,
            jsonDataAnual[2].ano,
            jsonDataAnual[3].ano,
            jsonDataAnual[4].ano,
            jsonDataAnual[5].ano,
            jsonDataAnual[6].ano,
            jsonDataAnual[7].ano,
            jsonDataAnual[8].ano,
            jsonDataAnual[9].ano,
            jsonDataAnual[10].ano,
            jsonDataAnual[11].ano,
        ],
        datasets: [{
            label: 'Vendas anuais',
            data: [
                jsonDataAnual[0].qtd,
                jsonDataAnual[1].qtd,
                jsonDataAnual[2].qtd,
                jsonDataAnual[3].qtd,
                jsonDataAnual[4].qtd,
                jsonDataAnual[5].qtd,
                jsonDataAnual[6].qtd,
                jsonDataAnual[7].qtd,
                jsonDataAnual[8].qtd,
                jsonDataAnual[9].qtd,
                jsonDataAnual[10].qtd,
                jsonDataAnual[11].qtd,


            ],
            backgroundColor: [
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
                '#92E3A9',
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