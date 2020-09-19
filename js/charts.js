// Chart script
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ['', '01.07', '02.07', '03.07', '04.07', '05.07', '06.07', ''],
		datasets: [{
				label: 'Беру',
				data: [null, 60, 35, 29, 74, 69, 80, null],
				borderWidth: 2,
				borderColor: '#312D70',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#312D70",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			},
			{
				label: 'Ozon',
				data: [null, 70, 40, 25, 85, 73, 77, null],
				borderWidth: 2,
				borderColor: '#00D385',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#00D385",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			},
			{
				label: 'Wildberries',
				data: [null, 40, 60, 55, 60, 85, 60, null],
				borderWidth: 2,
				borderColor: '#FF9900',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#FF9900",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			}
		]
	},

	// Configuration options go here
	options: {
		layout: {
			padding: {
				left: 0,
				right: 10,
				top: 0,
				bottom: 0
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					padding: 10,
					suggestedMin: 0,
					suggestedMax: 100
				}
			}]
		},
		legend: {
			display: true,
			position: 'top',
			align: 'end',
			labels: {
				fontColor: '#000',
				usePointStyle: true,
				padding: 20,
			},

		}
	}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ['', '01.07', '02.07', '03.07', '04.07', '05.07', '06.07', ''],
		datasets: [{
				label: 'Беру',
				data: [null, 60, 35, 29, 74, 69, 80, null],
				borderWidth: 2,
				borderColor: '#312D70',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#312D70",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			},
			{
				label: 'Ozon',
				data: [null, 70, 40, 25, 85, 73, 77, null],
				borderWidth: 2,
				borderColor: '#00D385',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#00D385",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			},
			{
				label: 'Wildberries',
				data: [null, null, null, null, null, null, null, null],
				borderWidth: 2,
				borderColor: '#FF9900',
				fill: false,
				pointRadius: 8,
				pointHoverRadius: 8,
				pointBorderColor: "#FF9900",
				pointBackgroundColor: "#fff",
				pointStyle: 'circle',
				pointBorderWidth: 4,
				lineTension: 0,
			}
		]
	},

	// Configuration options go here
	options: {
		layout: {
			padding: {
				left: 0,
				right: 10,
				top: 0,
				bottom: 0
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					padding: 10,
					suggestedMin: 0,
					suggestedMax: 100
				}
			}]
		},
		legend: {
			display: true,
			position: 'top',
			align: 'end',
			labels: {
				fontColor: '#000',
				usePointStyle: true,
				padding: 20,
			},

		}
	}
});