$(document).ready(function () {
	// mob menu
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.init = function()
			{
                $('#js-sidebar-open').on('click', function() {
                    self.open();
                });
                $('#js-sidebar-close').on('click', function() {
                    self.close();
                });
			},
            self.open = function()
            {
                $('.sidebar').addClass('sidebar_opened');
                $('body').css('overflow', 'hidden');                            //запрет прокрутки
            },
            self.close = function()
            {
                $('.sidebar').removeClass('sidebar_opened');
                $('body').css('overflow', '');                                  //разрешить прокрутку
            }
		}
		return new obj();
	}();
	mobileSidebar.init();
    //end mob menu

    /*sub mob menu*/
    $(".sidebar__menu_item-set").on("click", function() {
        var sub_menu = $(this).find('.sidebar__sub-menu_items');

        if(sub_menu.css('display') == 'block')
        {
            sub_menu.css('display', 'none');
            $(this).find('.sidebar__menu_link').css('color', '#fffff');
            $(this).find('.sidebar__menu_set').css({
                'transform': 'rotate(-90deg)',
                'background': 'url("../img/menu_set.svg") center center no-repeat'
            });
        }
        else {
            sub_menu.css('display', 'block');
            $(this).find('.sidebar__menu_link').css('color', '#DA2128');
            $(this).find('.sidebar__menu_set').css({
                'transform': 'rotate(0deg)',
                'background': 'url("../img/menu_set.svg") center center no-repeat'
            });
        }
    });
    /*end sub mob menu*/
});