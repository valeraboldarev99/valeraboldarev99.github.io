$(document).ready(function () {
	// слaйдер на главной
	$('.slider').slick({
		slidesToScroll:1,
		slidesToShow:1,
		// autoplay: true,
		appendArrows:'.slider-arrows',
        appendDots: '.slick-slider-dots',
		// autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows:true,
				}
			}
		]
	});

    //слайдер членов палаты и партнеров
    $('.chamber-member__slider').slick({
		slidesToScroll:1,
		slidesToShow:6,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
            {
				breakpoint: 1300,
				settings: {
		            slidesToShow:4,
				}
			},
			{
				breakpoint: 801,
				settings: {
		            slidesToShow:2,
                    // centerMode: true,
		            arrows:false,
                    dots:true,
				}
			}
		]
	});

    // mob menu
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.init = function()
			{
                $('#sidebar-open').on('click', function() {
                    self.openClose();
                });
			},
			self.openClose = function()
			{
                if($('#sidebar-open').hasClass('header__mobile_hamburger'))
                {
                    mobileSearch.close();
                    self.open();
                }
                else {
                   self.close();
                }
			},
            self.open = function()
            {
                $('.sidebar').addClass('sidebar_opened');
                $('#sidebar-open').removeClass('header__mobile_hamburger');     //поменять значек hamburger
                $('#sidebar-open').addClass('header__mobile_close');            //на значек close
                $('body').css('overflow', 'hidden');                            //запрет прокрутки
            },
            self.close = function()
            {
                $('.sidebar').removeClass('sidebar_opened');
                $('#sidebar-open').removeClass('header__mobile_close');         //поменять значек close
                $('#sidebar-open').addClass('header__mobile_hamburger');        //на значек hamburger
                $('body').css('overflow', '');                                  //разрешить прокрутку
            }
		}
		return new obj();
	}();
	mobileSidebar.init();
    //end mob menu

    // mob search
	var mobileSearch = function()
	{
		function obj()
		{
			var self = this;
			self.init = function()
			{
                $('#search__mobile_btn').on('click', function() {
                    self.openClose();
                });
                $('#search__form_btn-close').on('click', function() {
                    self.close();
                });
			},
			self.openClose = function()
			{
                if($('.search__mobile').hasClass('search-opened'))
                {
                    self.close();
                }
                else {
                    mobileSidebar.close();
                    self.open();  
                }
			},
            self.open = function()
            {
                $('.search-overlay').css('display', 'block');
                $('.search__mobile').addClass('search-opened');
                $('body').css('overflow', 'hidden');                    //запрет прокрутки  
            },
            self.close = function()
            {
                $('.search-overlay').css('display', 'none');
                $('.search__mobile').removeClass('search-opened');
                $('body').css('overflow', '');                          //разрешить прокрутку
            }
		}
		return new obj();
	}();
	mobileSearch.init();
    //end mob search

    /*sub mob menu*/
	$(".sidebar__menu_item-set").on("click", function() {
        var sub_menu = $('.sidebar__menu_item-set > .sidebar__sub-menu_items');
        
        if(sub_menu.css('display') == 'block')
        {
            sub_menu.css('display', 'none');
            $('.sidebar__menu_item-set > .sidebar__menu_link').css('color', '#000000');
            $('.sidebar__menu_item-set > .sidebar__menu_set').css({
                'transform': 'rotate(-90deg)',
                'background': 'url("../img/menu_set.svg") center center no-repeat'
            });
        }
        else {
            sub_menu.css('display', 'block');
            $('.sidebar__menu_item-set > .sidebar__menu_link').css('color', '#DA2128');
            $('.sidebar__menu_item-set > .sidebar__menu_set').css({
                'transform': 'rotate(0deg)',
                'background': 'url("../img/menu_set_hover.svg") center center no-repeat'
            });
        }
	});
    /*end sub mob menu*/

    /*custom select*/
    $('.js-select').on('mouseenter', function() {
        $(this).find('.select__items').css('display', 'block');
    });
    $('.js-select').on('mouseleave', function() {
        $(this).find('.select__items').css('display', 'none');
    });

    $('.js-select label').on('click', function() {
        var select_name = $(this).data('select_name');
        var city = $(this).html();
        $('#'+ select_name +'').html(city);
        $('#'+ select_name +' + .js-select-items').css('display', 'none');
    });
    /*end custom select*/

    /*custom hight*/
    var request__block_height = $('.request__items').innerHeight();
    $('.js-request__block').css('height', request__block_height);
});

// search field 
function showHideSearch()
{
    if($('#search__form').css('display') == 'none')
    {
        $('.search__form').css('display', 'inline-block');
    }
    else {
        $('.search__form').css('display', 'none');
    }
}