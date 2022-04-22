
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


//서브 3
$('.show_img').show();//show 사진 보여주기
  $(".hide_img").hide();//hide 사진 숨기기

$('.show_img').click(function() {
	//2000:2초,'slow','nomal','fast'
    $(".hide_img").show('3000');
		$(this).hide('fast')
    // .show_img을 클릭하면 .hover_img를 보여줘라

})

$('.hide_img').click(function() {
	//2000:2초,'slow','nomal','fast'
    $(".show_img").show('3000');
		$(this).hide('fast')
    // .show_img을 클릭하면 .hover_img를 보여줘라

})
