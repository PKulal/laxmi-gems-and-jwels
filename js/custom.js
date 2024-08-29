// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(13.336739287845164, 74.73890095480483),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
