$(document).ready(function () {
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
});