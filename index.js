$(".menu-image").click(function() {
  $(".menu").show();
  $("body").css("overflow", "hidden");
});

$(".cross").click(function() {
  $(".menu").hide();
  $("body").css("overflow", "");
});

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map($(".mapimage")[0], { zoom: 6, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

if ($("#slider-placeholder").slippry) {
  $("#slider-placeholder").slippry();
}
