
$(document).ready(function(){ 

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })

  //submenu


			//.submenu_wrap 숨긴다.
			$(".submenu_wrap").hide();
			//#gnb li에 마우스를 올리면,
			$(".header_inner li").mouseenter(function(){
				//.submenu_wrap이 슬라이드다운된다.
				$(".submenu_wrap").stop().slideDown();
			});
			//#header(#gnb li+.submenu_wrap)에 마우스를 벗어나면,
			$("#header").mouseleave(function(){
				//.submenu_wrap이 슬라이드업된다.
			  $(".submenu_wrap").stop().slideUp();
		  });


 });
