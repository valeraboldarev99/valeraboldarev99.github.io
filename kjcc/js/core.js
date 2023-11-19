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
		            slidesToShow:1,
                    centerMode: true,
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
				self.events();
			},
			self.events = function()
			{
				$('#sidebar-open').click(function() {
					self.openClose();
				});
			},
			self.openClose = function()
			{
                if($('#sidebar-open').hasClass('header__mobile_hamburger')) //open
                {
                    $('.sidebar').addClass('sidebar_opened');
                    $('#sidebar-open').removeClass('header__mobile_hamburger');
                    $('#sidebar-open').addClass('header__mobile_close');  
                    $('body').css('overflow', 'hidden');              
                }
                else {                                                      //close
                    $('.sidebar').removeClass('sidebar_opened');
                    $('#sidebar-open').removeClass('header__mobile_close');
                    $('#sidebar-open').addClass('header__mobile_hamburger'); 
                    $('body').css('overflow', '');
                }                
			}
		}
		return new obj();
	}();
	mobileSidebar.init();
    //end mob menu

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
        $('.search__btn').css('display', 'none');
        $('.search__form').css('display', 'inline-block');
    }
    else {
        $('.search__btn').css('display', 'inline-block');
        $('.search__form').css('display', 'none');
    }
}

// mob search field 
function showHideMobSearch()
{
    if($('.search__mobile').hasClass('search-opened'))        //close
    {
        $('.search-overlay').css('display', 'none');
        $('.search__mobile').removeClass('search-opened');
        $('body').css('overflow', '');
    }
    else {                                                          //open
        $('.search-overlay').css('display', 'block');
        $('.search__mobile').addClass('search-opened');
        $('body').css('overflow', 'hidden');              
    }
}