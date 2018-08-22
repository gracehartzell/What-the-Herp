// const resultsList = document.getElementsByClassName('cards')[0];
const results = [];

const resultsList = document.getElementsByClassName('cards')[0];
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const proxy = `https://cors-anywhere.herokuapp.com/`





searchButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    const herpName = searchInput.value;
   
    fetch(`${proxy}https://api.inaturalist.org/v1/search?q=${herpName}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const dataAbbrev = data.results.filter(obj => obj.type === 'Taxon')[0].record;
            const herpObj = {
                commonName: dataAbbrev.preferred_common_name,
                sciName: dataAbbrev.name,
                observCount: dataAbbrev.observations_count,
                extinct: dataAbbrev.extinct,
                photo: dataAbbrev.taxon_photos[0].photo.medium_url,
                wiki: dataAbbrev.wikipedia_url
            };
            console.log(herpObj)
            results.push(herpObj)
        
            


            let extinctType = (herpObj.extinct) ? `` : `not`;

    resultsList.innerHTML = results.map(createHerpCard).join('');
            
            
            function createHerpCard(herpObj) {
                return `
                <div class="id-card-wrapper">
                  <div class="id-card">
                   <div class="profile-row">
                     <div class="dp">
                          <img src="${herpObj.photo}">
                     </div>
                      <div class="desc">
                      <h1>${herpObj.commonName}</h1>
                          <p>Scientific Name: ${herpObj.sciName}</p>
                          <p>Observation Count: ${herpObj.observCount}</p>
                          <p>This species is ${extinctType} extinct.</p>
                          <p>For more information, check out the Wikipedia article <a href="${herpObj.wiki}">here</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
                `
            };
        })
    })