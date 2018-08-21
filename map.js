// 'http://api.vertnet-portal.appspot.com/api/search?q=query_object'
// let urlParams = new URLSearchParams(window.location.search);
// let searchData = urlParams.get('search');
// const proxy = "https://cors-anywhere.herokuapp.com/"
// let searchUrl = `${proxy}https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}taxonKey?style=fire.point`
// console.log(searchUrl)

// fetch(searchUrl)
//     .then(response => response.json())
//     .then( (data) => {
//         console.log(data);
//     })

// navigator.geolocation.getCurrentPosition(function(location) {
//     var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  
//     var mymap = L.map('mapid').setView(latlng, 13)
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
//       maxZoom: 18,
//       id: 'mapbox.streets',
//       accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
//     }).addTo(mymap);
  
//     var marker = L.marker(latlng).addTo(mymap);
//   });