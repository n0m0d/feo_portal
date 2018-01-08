$(function() {

	$("#city-filter").chosen({
		disable_search: false,
		//width: "100%"
	});

	$(".toggle-menu").on("click", function() {
		$(this).toggleClass("on");
		$(".mobile-block-menu").slideToggle();
		return false;
	});

	$(".has-drop-mobile").on("click", function() {
		$(this).find('ul').slideToggle();
		$(this).toggleClass("open");
		return false;
	});

	$(".fa-search").on("click", function() {
		$(".search-input").slideToggle();
		return false;
	});

	$(".ads-li").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		var block = $(this).find(".ads-ul-block-inner").slideToggle();
		return false;
	});

	/*$(".item-select .fa-star-o").on("click", function() {
		$(this).removeClass("active");
		$(".item-select .fa-star").addClass("active");
		return false;
	});

	$(".item-select .fa-star").on("click", function() {
		$(this).removeClass("active");
		$(".item-select .fa-star-o").addClass("active");
		return false;
	});*/

	$(".main-slider").slick({
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
	});

	function ads_boxes_reverse() {
		var viewportWidth = $(window).width();

		if(viewportWidth < 992) {
			$(".ads-content-center-box").insertAfter($(".ads-aside-right-box"));
		} else {
			$(".ads-content-center-box").insertBefore($(".ads-aside-right-box"));
		}
	}ads_boxes_reverse();

	function slider_1_rows() {

		var viewportWidth = $(window).width();

		if(viewportWidth > 992) {
			var rows = 2;
		} else if(viewportWidth < 480) {
			var rows = 2;
		} else {
			var rows = 1;
		}

		return rows;
	}slider_1_rows();

	function slider_3_rows() {

		var viewportWidth = $(window).width();

		if(viewportWidth < 480) {
			var rows = 2;
		} else {
			var rows = 1;
		}

		return rows;
	}slider_3_rows();

	function slider_4_rows() {

		var viewportWidth = $(window).width();

		if(viewportWidth > 992) {
			var rows = 2;
		} else if(viewportWidth < 480) {
			var rows = 2;
		} else {
			var rows = 1;
		}

		return rows;
	}slider_4_rows();

	$(".slider-style-1").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		centerMode: false,
		rows: slider_1_rows(),
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".slider-style-2").slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 5,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".slider-style-3").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		rows: slider_3_rows(),
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".slider-style-4").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: slider_4_rows(),
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".slider-style-5").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
	});

	function ads_yellow_slider() {
		var viewportWidth = $(window).width();

		if(viewportWidth < 768) {
			$(".slider-style-6").slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				rows: 1,
				dots: false,
				arrows: false,
				centerMode: false,
				infinite: true,
				speed: 500,
				fade: false,
				cssEase: 'linear',
				autoplay: false,
				autoplaySpeed: 2000,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
	}ads_yellow_slider();

	$('.leftArrow').on('click', function() {
		var sliderId = $(this).data("sliderId");
		$('#' + sliderId).slick("slickPrev");
	});

	$('.rightArrow').on('click', function() {
		var sliderId = $(this).data("sliderId");
		$('#' + sliderId).slick("slickNext");
	});

	function sliderHeight() {
		var heightNewsBlock = $("#news-slider-block").height();
		var heightItemsBlock = $("#news-items-block").height();
		var heightItemsBlock1 = (heightItemsBlock / 2) - 10;

		if(document.documentElement.clientWidth > 767) {
			$(".main-slider .slick-slide").css({"height":heightNewsBlock});
		}
		if(document.documentElement.clientWidth > 991) {
			$(".main-index .info-block-verticale .info-item").css({"height":heightItemsBlock});
			$(".main-news .info-block-verticale .info-item").css({"height":heightItemsBlock1});
			$(".main-news .section-1 .left-slider-col .main-slider .slick-slide img").css({"height":heightItemsBlock1});
		}
	}sliderHeight();

	window.onresize = function() {
		sliderHeight();
		ads_boxes_reverse();
	}

	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 100) {
			$(".main-menu").addClass("header-scroll");
		} else {
			$(".main-menu").removeClass("header-scroll");
		}
	});

	$(".datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '<Пред',
		nextText: 'След>',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Не',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	var nouislider = document.querySelector('#price-slider');

	noUiSlider.create(nouislider, {
		start: [150, 350],
		connect: true,
		tooltips: true,
		step: 1,
		format: wNumb({
			decimals: 0,
			postfix: ' 000',
		}),
		range: {
			'min': 5,
			'max': 500
		}
	});

	var nouislidermobile = document.querySelector('#mobile-price-slider');

	noUiSlider.create(nouislidermobile, {
		start: [150, 350],
		connect: true,
		tooltips: true,
		step: 1,
		format: wNumb({
			decimals: 0,
			postfix: ' 000',
		}),
		range: {
			'min': 5,
			'max': 500
		}
	});

});
