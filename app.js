'http://api.vertnet-portal.appspot.com/api/search?q=query_object'
let urlParams = new URLSearchParams(window.location.search);
let searchData = urlParams.get('search');
const proxy = "https://cors-anywhere.herokuapp.com/"
let searchUrl = `${proxy}http://api.vertnet-portal.appspot.com/api/search?q={"q":"${searchData}"}`
console.log(searchUrl)

fetch(searchUrl)
    .then(response => response.json())
    .then( (data) => {
        console.log(data);
    })