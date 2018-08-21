const resultsList = document.getElementsByClassName('cards')[0];
const results = [];
// 'http://api.vertnet-portal.appspot.com/api/search?q=query_object'
let urlParams = new URLSearchParams(window.location.search);
let searchData = urlParams.get('search');
const proxy = "https://cors-anywhere.herokuapp.com/"
let searchUrl = `${proxy}https://api.inaturalist.org/v1/search?q=${searchData}`
console.log(searchUrl)



fetch(searchUrl)
    .then(response => response.json())
    .then( (data) => {
        console.log(data);
        const dataAbbrev = data.results[0].record;
        
        const herpObj = {
            name: dataAbbrev.preferred_common_name,
            observCount: dataAbbrev.observations_count,
            extinct: dataAbbrev.extinct,
            photo: dataAbbrev.taxon_photos[0].photo.medium_url,
            // observationsCount: dataAbbrev.observations_count
        };
    
    results.push(herpObj);
    console.log(results);

    resultsList.innerHTML = results.map(createHerpCard).join('');
 

    // create card: 

    function createHerpCard(results) {
        return `
        <div class="id-card-wrapper">
        <div class="id-card">
          <div class="profile-row">
            <div class="dp">
              <img src="${herpObj.photo}">
            </div>
            <div class="desc">
              <h1>${herpObj.name}</h1>
                  <p>Observation Count: ${herpObj.observCount}</p>
                  <p>Is extinct? ${herpObj.extinct}</p>

            </div>
          </div>
        </div>
      </div>
            `
      };
   
    })