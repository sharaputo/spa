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
		$('body').toggleClass('lock');
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

// Modal windows close
$(document).ready(function () {
	$('.modal-backdrop').click(function (event) {
		$('.modal-registration').removeClass('active');
	});
});

$(document).on('keydown', function (e) {
	if (e.keyCode === 27) {
		$('.modal-registration').removeClass('active');
	}
});