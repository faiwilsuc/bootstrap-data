$(document).ready(function(){
		$('.menu_icon').click(function(e) {
            $('.header_top_detail').slideToggle();
        });
		$('.menu_icon1').click(function(e) {
            $('.main_nav').slideToggle();
        });
		
		$(".Prus").click(function(){	
		$(this).next('.dagpas-drop-content.row').toggle();
	});
	});
