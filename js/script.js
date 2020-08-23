// Burger menu open and close
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.sidebar__nav,.header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.sidebar__item a').click(function (event) {
		$('.header__burger,.sidebar__nav').toggleClass('active');
		// $('body').toggleClass('lock');
	});
});

// Side menu open and close
$(document).ready(function () {
	$('.sidebar__collapse').click(function (event) {
		$('.sidebar__icon-menu,.sidebar__chat').toggleClass('active');
		$('.sidebar__nav').toggleClass('closed');
		$('main').css('padding-left', '40px');
	});
});

$(document).ready(function () {
	$('.sidebar__expand').click(function (event) {
		$('.sidebar__icon-menu,.sidebar__chat').toggleClass('active');
		$('.sidebar__nav').toggleClass('closed');
		$('main').css('padding-left', '');
	});
});

// Modal windows open
$(document).ready(function () {
	$('.header__account').click(function (event) {
		$('.modal--registration').addClass('active');
		$('.wrapper').addClass('locked');
	});
});

$(document).ready(function () {
	$('#modal_order_open').click(function (event) {
		$('.modal--order').addClass('active');
		$('.wrapper').addClass('locked');
	});
});

// Modal windows close
$(document).ready(function () {
	$('.modal-close').click(function (event) {
		$('.modal--registration').removeClass('active');
		$('.modal--login').removeClass('active');
		$('.modal--forgot').removeClass('active');
		$('.modal--password').removeClass('active');
		$('.modal--reset').removeClass('active');
		$('.modal--order').removeClass('active');
		$('.wrapper').removeClass('locked');
	});
});

$(document).ready(function () {
	$('.modal-backdrop').click(function (event) {
		$('.modal--registration').removeClass('active');
		$('.modal--login').removeClass('active');
		$('.modal--forgot').removeClass('active');
		$('.modal--password').removeClass('active');
		$('.modal--reset').removeClass('active');
		$('.modal--order').removeClass('active');
		$('.wrapper').removeClass('locked');
	});
});

$(document).on('keydown', function (e) {
	if (e.keyCode === 27) {
		$('.modal--registration').removeClass('active');
		$('.modal--login').removeClass('active');
		$('.modal--forgot').removeClass('active');
		$('.modal--password').removeClass('active');
		$('.modal--reset').removeClass('active');
		$('.modal--order').removeClass('active');
		$('.wrapper').removeClass('locked');
	}
});

// Modal order info open & close
$(document).ready(function () {
	$('.order-number').click(function (event) {
		$('.orders-info__modal').addClass('active');
	});
});

$(function () {
	$(document).mouseup(function (e) {
		let div = $('.orders-info__modal');
		if (!div.is(e.target) &&
			div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
});

$(document).on('keydown', function (e) {
	if (e.keyCode === 27) {
		$('.orders-info__modal').removeClass('active');
	}
});

// Summary Tabs Control
const topTabs = document.querySelectorAll('.tabs__item--goods');
const topSections = document.querySelectorAll('.tabs__block--goods');

topTabs.forEach(topTab => {
	topTab.addEventListener("click", e => {
		e.preventDefault();
		removeActiveTab();
		addActiveTab(topTab);
	});
})

const removeActiveTab = () => {
	topTabs.forEach(topTab => {
		topTab.classList.remove("is-active");
	});
	topSections.forEach(topSection => {
		topSection.classList.remove("is-active");
	});
}

const addActiveTab = topTab => {
	topTab.classList.add("is-active");
	const topHref = topTab.querySelector("a").getAttribute("href");
	const topMatchingSection = document.querySelector(topHref);
	topMatchingSection.classList.add("is-active");
}

const bottomTabs = document.querySelectorAll('.tabs__item--best');
const bottomSections = document.querySelectorAll('.tabs__block--best');

bottomTabs.forEach(bottomTab => {
	bottomTab.addEventListener("click", e => {
		e.preventDefault();
		removeActiveTabBottom();
		addActiveTabBottom(bottomTab);
	});
})

const removeActiveTabBottom = () => {
	bottomTabs.forEach(bottomTab => {
		bottomTab.classList.remove("is-active");
	});
	bottomSections.forEach(bottomSection => {
		bottomSection.classList.remove("is-active");
	});
}

const addActiveTabBottom = bottomTab => {
	bottomTab.classList.add("is-active");
	const bottomHref = bottomTab.querySelector("a").getAttribute("href");
	const bottomMatchingSection = document.querySelector(bottomHref);
	bottomMatchingSection.classList.add("is-active");
}

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