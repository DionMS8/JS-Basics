//-----[JS OPERATORS]---------------------------------------------------------------------------------------------

//-----[TERNARY/CONDITIONAL/QUESTION MARK OPERATOR]---------------------------------------------------------------

// THIS IS A SHORTCUT FOR AN IF STATEMENT

// SYNTAX: CONDITION ? VALUE IF TRUE : VALUE IF FALSE

//-----[EXAMPLE 1]-------------------------------------------------------------------------------------------------

let output = (10 > 0) ? true : false; // => TRUE


//-----[EXAMPLE 2]--------------------------------------------------------------------------------------------------

var age = 14;

console.log((age >= 18) ? "Adult" : "Underage");


//-----[EXAMPLE 3]------------------------------------------------------------------------------------------------

var stop; // THIS WILL TAKE A BOOLEAN VALUE

(age >= 18) ? (
    consol.log("ADULT!!!"),
    stop = false
) : (
    console.log("SORRY, TOO YOUNG"),
    stop = true
);


//-----[EXAMPLE 4]----------------------------------------------------------------

let mark = 85;

// STORING THE RESULT OF THE TERNARY OPERATOR 
// IN A VARIABLE
let result = (mark > 50) ? "Pass" : "Fail"; 

console.log(result);



