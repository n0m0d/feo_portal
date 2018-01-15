$(function() {

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".main-menu").addClass("header-scroll");
        } else {
            $(".main-menu").removeClass("header-scroll");
        }
    });

	$(".footer-click-button").on("click", function() {
		$(".main-wrap").toggleClass("off");
		$(".main-wrap-in").slideToggle();
		var $target = $('html,body'); 
		$target.animate({scrollTop: $target.height()}, 1000);
		return false;
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

	$(document).on("submit", ".select-city-wrap form", function () {
        var city = $(".select-city-wrap form .select-city .btn-info").attr("title");
        $.cookie('cityselected', city);
    });

    $(document).on("click", ".ads-li", function() {
        $(this).toggleClass("active");
        var block = $(this).find(".ads-ul-block-inner").slideToggle();
    });

    $(document).on("click", ".fotorama__stage__shaft", function() {
        var fotorama = $('.fotorama').fotorama({allowfullscreen: true}).data('fotorama');
        fotorama.requestFullScreen();
    });

    $(document).on("focus focusout", ".add-comment .right-col .comment-area form textarea", function() {
        $(this).toggleClass("active");
        $(".add-comment .right-col .comment-area form button").toggleClass("button-active");
        return false;
    });

    function main() {

        $(".text-clock").timeago();

        $("#city-filter").chosen({
            disable_search: false
        });

        $('.selectpicker').selectpicker({
            style: 'btn-info',
            size: 4
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

        function slidersInit() {

            function slider_1_rows() {
                if ($(window).width() > 992) {
                    var rows = 2;
                } else if ($(window).width() < 480) {
                    var rows = 2;
                } else {
                    var rows = 1;
                }

                return rows;
            }

            function slider_3_rows() {
                if ($(window).width() < 480) {
                    var rows = 2;
                } else {
                    var rows = 1;
                }

                return rows;
            }

            function slider_4_rows() {
                if ($(window).width() > 992) {
                    var rows = 2;
                } else if ($(window).width() < 480) {
                    var rows = 2;
                } else {
                    var rows = 1;
                }

                return rows;
            }

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
        }

        slidersInit();

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

        function ads_boxes_reverse() {
            if ($(window).width() < 992) {
                $(".ads-content-center-box").insertAfter($(".ads-aside-right-box"));
            } else {
                $(".ads-content-center-box").insertBefore($(".ads-aside-right-box"));
            }
        }

        ads_boxes_reverse();

        function news_boxes_reverse() {
			if($(window).width() < 992) {
				$("#news-items-block").insertAfter($("#news-sibebar-block"));
			} else {
				$("#news-items-block").insertBefore($("#news-sibebar-block"));
			}
		}

		news_boxes_reverse();

        function ads_yellow_slider() {
            if ($(window).width() < 768) {
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
        }

        ads_yellow_slider();

        function firm_nav_slider() {
            if ($(window).width() < 768) {
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
            } else {
                $(".slider-style-5").slick('unslick');
            }
        }

        firm_nav_slider();

        $('.leftArrow').on('click', function () {
            var sliderId = $(this).data("sliderId");
            $('#' + sliderId).slick("slickPrev");
        });

        $('.rightArrow').on('click', function () {
            var sliderId = $(this).data("sliderId");
            $('#' + sliderId).slick("slickNext");
        });

        function sliderHeight() {
            var heightNewsBlock = $("#news-slider-block").height();
            var heightItemsBlock = $("#news-items-block").height();
            var heightItemsBlock1 = (heightItemsBlock / 2) - 10;

            if ($(window).width() > 992) {
                $(".main-index .info-block-verticale .info-item").css({"height": heightItemsBlock});
                $(".main-slider .slick-slide").css({"height": heightNewsBlock});
                //$(".main-news .info-block-verticale .info-item").css({"height": heightItemsBlock1});
                //$(".main-news .section-1 .left-slider-col .main-slider .slick-slide img").css({"height": heightItemsBlock1});
            } else if ($(window).width() > 768) {
                $(".main-slider .slick-slide").css({"height": heightNewsBlock});
                //$(".main-news .section-1 .left-slider-col .main-slider .slick-slide img").css({"height": heightItemsBlock});
                //$(".main-news .info-block-verticale .info-item").css({"height": "auto"});
            } else {
                $(".main-slider .slick-slide").css({"height": "auto"});
                //$(".main-news .section-1 .left-slider-col .main-slider .slick-slide img").css({"height": "auto"});
            }

        }

        sliderHeight();

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

        if($('*').is('#price-slider')) {
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
        }

        window.onresize = function() {
            sliderHeight();
            ads_boxes_reverse();
            ads_yellow_slider();
            firm_nav_slider();
            news_boxes_reverse();
        }
    }main();

    //Аякс меню
    $(document).on("click", 'li.ajax-anchor', function (e) {
        e.preventDefault();
        var $a = $(this);
        var href = $a.find('a').attr('href');
        NProgress.start();
        $.ajax({
            type: 'POST',
            data: {"side": "server"},
            url: href,
            success: function (result) {
                NProgress.done();
                try {
                    $a.parent().find('li.active').removeClass('active');
                    $a.addClass('active');

                    var $main_content = $(result).find("main").html() || $(result).filter("main").html();
                    $('main').html($main_content);

                    var title = $(result).filter('title').text();
                    var description = $('meta[name="description"]').attr("content");
                    $('head title').text(title);
                    $('head meta[name="description"]').attr("content", description);
                    main();
                } catch (e) {
                    console.error(e);
                }
                history.pushState("state", title, href);
            }
        });
    });

});
