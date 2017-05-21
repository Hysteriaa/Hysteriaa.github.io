$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup({type:'inline', midClick: true});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".resume_item").animated("fadeIn", "fadeOut");

	$(".animation_about").animated("fadeIn", "fadeOut");
	

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function(){
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_"+ i);
		$(this).find(".port_descr").attr("id", "work_"+ i)
	});

	$("input,select,textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

