//-----[ARROW FUNCTIONS]----------------------------------------------------------------------

// INTRODUCED IN ES6
// MORE CONCISE
// IMPLICIT RETURN WHICH ELIMINATES THE NEED FOR THE "RETURN" KEYWORD
// "THIS" IS PICKED UP FROM THE SURROUNDINGS

// CREATING A REGULAR FUNCTION USING TRADITIONAL SYNTAX
function sum(a,b) {
    return a + b
}

// CREATING THE SAME FUNCTION USING ES6 ARROW SYNTAX
let arrowSum = (a,b) => a + b;

// PARAMETERS ARE ON THE LEFT OF THE ARROW
// EXECUTABLE CODE FOR THE FUNCTION IS ON THE RIGHT OF THE ARROW
// EVERYTHING AFTER THE ARROW IS RETURNED

function isPositive(number) {
    return number >= 0
}

// IF THERE IS ONE PARAMETER, THE PARENTHESES CAN BE OMITTED

let isPositive2 = number => number >= 0;

// IF THERE ARE NO PARAMETERS, THE PARENTHESES AND CURLY BRACES ARE MANDATORY 

() => {(console.log(2*2))};


function randomNumber() {
    return Math.randomNumber
}

let randomNumber2 = () => Math.randomNumber

// Arrow Functions are especiallyimportant when creating anonymous functions

document.addEventListener('Click', function () {
    console.log('Click');
})

document.addEventListener('Click', () => console.log('Click'))

// The setTimeout () method is used to execute a function after waiting 
// for the specified time interval



document.getElementById("saiyanName").style.display = "block";

// document.getElementById("saiyanName").style.display = "none"; 
// THIS HIDES THE HTML ELEMENT


//-----[THIS REFERENCE KEYWORD]------------------------------------------------------------------------------------

// EXAMPLE 1 - USING IT IN AN ARROW FUNCTION, WITHIN ANOTHER FUNCTION

// THE VALUE OF THE "THIS" REFERENCE IS TAKEN FROM THE SURROUNDING 
// WHICH IS THE OVERALL FUNCTION HERE

() => {
    this.myVar = 0;
    setTimeout(
        () => {
            this.myVar++; 
            console.log(this.myVar);
        }, 
        
        0
    );
}



