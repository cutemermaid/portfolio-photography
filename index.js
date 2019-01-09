$(".menu-image").click(function() {
  $(".menu").show();
  $("body").css("overflow", "hidden");
});

$(".cross").click(function() {
  $(".menu").hide();
  $("body").css("overflow", "");
});
