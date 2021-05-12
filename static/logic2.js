var myMap = L.map("map", {
  center: [31.9686, -99.9018],
  zoom: 6.5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



var metdata = "Meteorite-Landings.csv";



var coordinates = [];
var latlist = [];
var longlist = [];
var maplat;
var long;

  d3.csv(metdata).then(function(response) {
    console.log('response :', response);
    console.log('metadata i :', response.length);

    for (var i = 0; i < response.length; i++) {

      maplat = +response[i].reclat;
      long = +response[i].reclong;

      latlong = [maplat, long];
      coordinates.push(latlong);

      var marker = L.marker(latlong) 
      .bindPopup("Thank you for clicking" + "</h1> <hr> <h3>You are awesome! " +  "</h3>")
        .addTo(myMap);
  
      
    }

  
   



    

   


});


 
