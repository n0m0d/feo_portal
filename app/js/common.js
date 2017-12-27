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

	function sliderHeight() {
		var heightNewsBlock = $("#news-slider-block").height();
		var heightItemsBlock = $("#news-items-block").height();
		if(document.documentElement.clientWidth > 767) {
			$(".slick-slide").css({"height":heightNewsBlock});
		}
		if(document.documentElement.clientWidth > 991) {
			$(".info-block-verticale .info-item").css({"height":heightItemsBlock});
		}
	}sliderHeight();

	window.onresize = function() {
		sliderHeight();
	}
});
