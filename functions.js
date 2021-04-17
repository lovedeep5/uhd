$(document).ready(function() {

    $(".features-btn a").click(function(e) {
        e.preventDefault();
        var dataTarget = $(this).attr("data-target");
        $(".tab-content").hide();
        $("[tab-data='" + dataTarget + "']").css('display', 'flex');
    });


    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
   $('.header-wrapper-top').addClass("scroll");
  } else {
    $('.header-wrapper-top').removeClass("scroll");
  }
}




    $(".footer-scroll").click(function(){
    	topFunction();
    });
    function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

})


