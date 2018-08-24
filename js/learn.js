const resultsList = document.getElementsByClassName('cards')[0];
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function onSearch(ev) {
  let results = [];
  resultsList.innerHTML = ''
  ev.preventDefault();
    
const herpName = searchInput.value;
  fetch(`https://api.inaturalist.org/v1/search?q=${herpName}`)
    .then(response => response.json())
    .then((data) => {
      const taxonFilterApplied = data.results.filter(obj => obj.type === 'Taxon');
        
        for (i = 0; i < taxonFilterApplied.length; i++) {
            const currentItem = taxonFilterApplied[i].record
            const herpObj = {
                commonName:currentItem.preferred_common_name,
                sciName:currentItem.name,
                observCount:currentItem.observations_count,
                extinct:currentItem.extinct,
                photo:currentItem.taxon_photos[0].photo.medium_url,
                wiki:currentItem.wikipedia_url
            };
            results.push(herpObj)
        }

        
    resultsList.innerHTML = results.map(createHerpCard).join('');
    searchInput.value = '';
            function createHerpCard(herpObj) {
                
                let extinctType = (herpObj.extinct) ? `` : `not`;
                return `
                        <div class="id-card-wrapper">
                            <div class="id-card">
                                <div class="profile-row">
                                    <div class="dp">
                                        <img src="${herpObj.photo}">
                                    </div>
                                    <div class="desc">
                                        <h1>${herpObj.commonName}</h1>
                                        <br>
                                            <p>Scientific Name: ${herpObj.sciName}</p>
                                            <br>
                                            <p>Observation Count in Database: ${herpObj.observCount}</p>
                                            <br>
                                            <p>This species is ${extinctType} extinct.</p>
                                            <br>
                                            <p>For more information, check out the Wikipedia article <a href="${herpObj.wiki}">here</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
            };
        });
    
}

searchInput.addEventListener('keypress', (ev) => {
  if (ev.keyCode === 13) {
    ev.preventDefault();
    return onSearch(ev);
  } else {
    return null
  }
});

searchButton.addEventListener('click', (ev) => {
  onSearch(ev);
});
