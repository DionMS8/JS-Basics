const pokeId = prompt('Please enter your favourite number to see your Pokemon:');

//const pokeId = document.getElementById('#pokemon');

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: pokeId
}

//apiData.id = prompt('Please enter your favourite number to see your Pokemon:')

// DECONSTRUCTION
const {url, type, id} = apiData;
const apiUrl = `${url}${type}/${id}`

// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`
//console.log(apiUrl);

fetch(apiUrl)
    .then(data => data.json())
    .then(pokemon => generateHtml(pokemon))

// THE DATA WILL NO BE HELD IN A PROMISE //

// generateHtml IS A HIGH-ORDER FUNCTION

const generateHtml = (data)=> {

    console.log(data);

    const newHtml = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
    `

    const pokeDiv = document.querySelector('.pokemon');

    pokeDiv.innerHTML = newHtml;

}

//-----[URL OBJECT]----------------------------------------------------------------------------------------------------

// THE URL CONSTRUCTOR PARSES A GIVEN URL STRING INTO A URL OBJECT DEFINED BY ITS PARAMETERS
new URL(url, [base])

// CAPTURING THE URL OF THE CURRENT WEB PAGE
newURL(window.location.href)
newURL(window.location.href).searchParams.get("parameter")

//-----[ACCESSING THE OBJECT PARAMETERS]

// SETTING THE PARAMETERS OF THE URL OBJECT TO

const urlObject = new URL();

urlObject.searchParams.set("parameter", "value");

// THE PARAMETERS  OF THE URL OBJECT CAN THEN BE EASILY READ OR MANIPULATED

// SEARCHING THROUGH THE PARAMETERS OF THE URL OBJECT
const urlObject = new URL("https://google.com/search?query=JavaScript").searchParams.get();

urlObject.search 

// GETTING THE FULL URL USING HREF and TOSTRING()

// urlObject.href
urlObject.toString()

//-----[ENCODING]

// SPACES ARE REPLACED WITH %20


//-----[USING IN CONJUNCTION WITH FETCH()]






