//-----[MAP]-----------------------------------------------------------------------------------------------------------------------------------------

// THE MAP METHOD CALLS A FUNCTION FOR EVERY ARRAY ELEMENT
// AND THEN STORES THE RESULTS IN A NEW ARRAY

// THE ORIGINAL ARRAY IS NOT CHANGED

const nums = [5, 10, 17, 25];
const newArray = nums.map(Math.sqrt);
console.log(newArray);


//RETURNS A NEW ARRAY WITH THE SQUARE ROOT
// OF ALL THE ORIGINAL VALUES



//-----[FILTER]--------------------------------------------------------------------------------------------------------------------------------------

// THE FILTER METHOD CREATES A NEW ARRAY FILLED WITH ELEMENTS 
// FROM THE ORIGINAL ARRAY THAT MET A GIVEN CONDITION

// EXAMPLE 1

const ages = [38, 12, 34, 17, 45];

console.log(ages.filter(isAdult));

function isAdult(age) {
    if(age>=18){
        return age
    }
};


//-----[SORT]------------------------------------------------------------------------------------------------------------------------------------------








//-----[REDUCE]-----------------------------------------------------









function makeAdjectifier(adjective){
    return function(string) {
        return adjective + " " + string
        //return `The sun is ${adjective} and birds have ${string}`
    }
};

var hottifier = makeAdjectifier("Hot") 

console.log(hottifier("Wings"));




