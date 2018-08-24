navigator.geolocation.getCurrentPosition(function(location) {
    const MAPS = 'maps';
    let latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    let mymap = L.map('mapid').setView(latlng, 13)
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);
    
    L.marker(latlng).addTo(mymap);
    mymap.on('click', locationClick);


    const savedPoints = JSON.parse(localStorage.getItem(MAPS));
    if(Array.isArray(savedPoints)) {
      savedPoints.forEach((location) => {
        L.marker(location).addTo(mymap);
      });
    }


    function locationClick(ev) {
        const location = ev.latlng;
        const mapsFromLocalstorage = JSON.parse(localStorage.getItem(MAPS));

        let mapsToBeAdded = [];
        if(Array.isArray(mapsFromLocalstorage)) {
          mapsToBeAdded = mapsFromLocalstorage;
        }

        mapsToBeAdded.push(location);
        localStorage.setItem(MAPS, JSON.stringify(mapsToBeAdded));
        L.marker(location).addTo(mymap);
    };
});
