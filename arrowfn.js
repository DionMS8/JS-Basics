function sum(a,b) {
    return a + b
}

let sum2 = (a,b) => a + b

// Parameters are on the left of the arrow 
// The executable code for the function is on the right of the arrow
// Everything after the arrow is returned

function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0

// Since there is one parameter, the brackets are not necessary

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

