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
		// autoplay: true,
		// autoplaySpeed: 3000,
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
				breakpoint: 767,
				settings: {
					arrows:true,
				}
			}
		]
	});

    /*мобильное меню*/
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.animSpeed = 400;
			self.init = function()
			{
				self.events();
			},
			self.events = function()
			{
				$('.sidebar-open').click(function() {
					self.open();
				});
				$('.sidebar-close, .sidebar-overlay').click(function() {
					self.close();
				});
			},
			self.open = function()
			{
				$('.sidebar').addClass('sidebar_opened');
				$('.sidebar-overlay').fadeIn(self.animSpeed);
				// pageScroll.hide(1);
			},
			self.close = function()
			{
				$('.sidebar').removeClass('sidebar_opened');
				$('.sidebar-overlay').fadeOut(self.animSpeed);
				// pageScroll.show(0);
			}
		}
		return new obj();
	}();
	mobileSidebar.init();
});

function showSearch()
{
    $('#search__btn').css('display', 'none');
    $('#search__form').css('display', 'inline-block');
}

function hideSearch()
{
    $('#search__btn').css('display', 'inline-block');
    $('#search__form').css('display', 'none');
}