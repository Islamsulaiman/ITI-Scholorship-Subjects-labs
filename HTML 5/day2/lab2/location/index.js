let myLocation = document.getElementById("location");
var mainContainer = document.getElementById("mapContainer");

var Url = 0;
var Longitude = 0;
var Latitude = 0;

myLocation.addEventListener("click", (e) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    Longitude = pos.coords.longitude;
    Latitude = pos.coords.latitude;
    Url = `http://maps.google.com/maps?q=${Latitude},${Longitude}`;
    window.open(Url, "_blank");
  });
});
