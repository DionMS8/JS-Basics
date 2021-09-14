
function multiplication (x1, x2) { 
    return x1*x2; //code to be executed whenever the function is called
}

let product = multiplication(5,6); //stores the result of the fucntion in a variable
console.log(product); //prints the value stored in the variable

function greeting1() {

    let name = prompt('What is your name?'); //stores the user's response in a variable
    let result = 'Hello' + ' ' + name; //string concatenation
    console.log(result); //prints the greeting with the user's name

}

// greeting1();


function greeting2(yourName) {
    
    let result = 'Hello' + ' ' + yourName; //string concatenation
    console.log(result); //prints the greeting with the user's name

}

let name = prompt('What is your name?'); //stores the user's response in a variable

//greeting2(name);

