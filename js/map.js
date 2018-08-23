navigator.geolocation.getCurrentPosition(function(location) {
    let latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    let mymap = L.map('mapid').setView(latlng, 13)
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);
    
    let marker = L.marker(latlng).addTo(mymap);
    
    mymap.on('click', locationClick)
    // let marker2 = L.marker([30.25773273260216, -97.75806427001955]).addTo(mymap);

    function locationClick(ev) {
        console.log(ev.latlng)
        let newMarker = L.marker(ev.latlng).addTo(mymap);
    }
});