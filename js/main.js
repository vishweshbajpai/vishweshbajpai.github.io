jQuery(document).ready(function ($) {
  $(".marquee").marquee({
    duration: 12000,
    duplicated: true,
    gap: 00,
    direction: "left",
    pauseOnHover: true,
  });
});
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
