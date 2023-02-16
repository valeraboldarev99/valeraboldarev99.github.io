$(document).ready(function () {
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

	/*аккордеон*/
	$(".set > .set__btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.set__content').slideUp(200);
		}
		else{
			$(".set > .set__btn").removeClass("active");
			$(this).addClass("active");
			$('.set__content').slideUp(200);
			$(this).siblings('.set__content').slideDown(200);
		}
		return false
	});

	// слaйдер на странице продукта
		$('.product__slider__small').slick({
			slidesToScroll:1,
			slidesToShow:7,
			// autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover:true,
			arrows:false,
			draggable:false,
			dots:false,
			focusOnSelect: true,
			asNavFor: '.product__slider__big',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
					arrows:false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 5,
					vertical : false,
					slidesToScroll: 1
				}
			 },
		]
		});

		$('.product__slider__big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots:false,
			draggable:false,
			// autoplay: true,
			fade: true,
			asNavFor: '.product__slider__small'
		});

});