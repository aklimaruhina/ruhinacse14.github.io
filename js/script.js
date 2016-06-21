$(document).ready(function() {
	 $("history-tab-menu>ul>li>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tab-content>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.tab-pane").eq(index).addClass("active");
    });
	 $('body').scrollspy({target: ".navbar", offset: 80});
	 $("#navbar a").on('click', function(event){
	 	event.preventDefault();
	 	var hash = this.hash;
	 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		 }, 1300, function(){
		 	 window.location.hash = hash;
		});
	});

$(".client-list").owlCarousel({
			items: 5,
	        itemsCustom: false,
	        itemsDesktop: [1199, 5],
	        itemsDesktopSmall: [980, 4],
	        itemsTablet: [768, 1],
	        itemsTabletSmall: false,
	        itemsMobile: [479, 1],
	        singleItem: false,
	        startDragging: true,
	        autoPlay: 4000
		});
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});
	$('.portfolio-list').mixItUp();
	 $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        );
	 $(".img-wrap").mouseenter(function(){
			 $(this).addClass("hover");
		})
		.mouseleave(function(){
			$(this).removeClass("hover");
		});
	 $('.testimony-list').slick({

		  infinite: true,
		  speed: 100,
	 	  centerMode: true,
		  slidesToShow: 5,
		  adaptiveHeight: true,
		  variableWidth: true,
		  arrows: true,
		  autoplay: true,
  		  autoplaySpeed: 2000,
  		  prevArrow: "<i class='fa fa-angle-left'></i>",
  		  nextArrow: "<i class='fa fa-angle-right'></i>"
	 });
	 $('.scroll-top').click(function(){
	  $('body,html').animate({scrollTop:0},1500);
	});
});