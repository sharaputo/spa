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

// Modal windows open
$(document).ready(function () {
	$('.best-products-open').click(function (event) {
		$('.modal--best-products').addClass('active');
		$('.wrapper').addClass('locked');
	});
});

$(document).ready(function () {
	$('.modal-close').click(function (event) {
		$('.modal--best-products').removeClass('active');
		$('.wrapper').removeClass('locked');
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