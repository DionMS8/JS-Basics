const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '132'
}

// DECONSTRUCTION
const {url, type, id} = apiData;
const apiUrl = `${url}${type}/${id}`

// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`
//console.log(apiUrl);

fetch(apiUrl)
    .then((data) => {
        console.log(data.json);
    })






    