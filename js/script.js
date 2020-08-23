// Smooth scroll
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#!"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

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

// Chart script
let firstChart = document.getElementById('chartNew').getContext('2d');

var lineChart = new Chart(firstChart, {
	type: 'line',
	data: {
		labels: ["01.07", "02.07", "03.07", "04.07", "05.07", "06.07"],
		datasets: [{
			label: '',
			data: [0, 25, 50, 75, 100],
			backgroundColor: [
				'#312D70',
				'#312D70',
				'#312D70',
				'#312D70',
				'#312D70',
				'#312D70'
			]
		}]
	}
});