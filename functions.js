$(document).ready(function() {

    $(".features-btn a").click(function(e) {
        e.preventDefault();
        var dataTarget = $(this).attr("data-target");
        $(".tab-content").hide();
        $("[id='" + dataTarget + "']").css('display', 'flex');
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

// FORM VALIDATION
$(".user-request-form").submit(function(e){
  e.preventDefault();
var first_name = e.target.firstName.value;
var last_name = e.target.lastName.value;
var user_email = e.target.email.value;
var user_phone = e.target.phone.value;

var program_of_interest = e.target.programOfInterest.value;
var program_delivery_type = e.target.programDeliveryType.value;
var preferred_communication_type = e.target.preferredCommunicationType.value;

if(first_name.length <= 3) {
  alert("JS VALIDATION ALERT: FIRST NAME SHOULD BE MORE THAN 3");
  return false;
} else if (last_name <= 3 ) {
  alert("JS VALIDATION ALERT: LAST NAME SHOULD BE MORE THAN 3");
  return false;
}  else if (user_phone <= 9 ) {
  alert("JS VALIDATION ALERT: PHONE SHOULD BE MORE THAN OR EQUAL 10");
  return false;
} else if (program_of_interest == false ) {
  alert("JS VALIDATION ALERT: Please Select Program of interest");
  return false;
}else if (program_delivery_type == false ) {
  alert("JS VALIDATION ALERT: Please Select Program Delivery Type");
  return false;
}else if (preferred_communication_type == false ) {
  alert("JS VALIDATION ALERT: Please Select Preferred Communication Type");
  return false;
} else {
  alert("Thank you for submitting the details, you will be redirected to netsolutions.com");
  window.location.href = "https://www.netsolutions.com/";
}


 
})
// FORM VALIDATION

})


