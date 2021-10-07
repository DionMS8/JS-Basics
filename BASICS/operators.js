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

// ADDING MULTIPLE EXPRESSIONS TO BE EXECUTED 
// IF THE CONDITION IS TRUE OR FALSE

var stop; // THIS WILL TAKE A BOOLEAN VALUE

// STOP WILL BE FALSE IF THE AGE IS ABOVE 18 
// AND TRUE IF IT IS BELOW 18 SO THAT UNDERAGE 
// PERSONS ARE STOPPED

age >= 18 ? (
    console.log("ADULT!!!"),
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


//-----[EXAMPLE 5]----------------------------------------------------------------

// EMBEDDING A TERNARY OPERATOR WITHIN ANOTHER 
// TERNARY OPERATOR 

// CREATING 2 BOOLEAN VARIABLES
let firstCheck = false;
let secondCheck = false;

// CREATING THE TERNARY OPERATOR
let access = firstCheck ? "Access Denied" : secondCheck ? "Access Denied" : "Access Granted";


//-----[EXAMPLE 6]-------------------------------------------------------------------------------------------------------

// CHECKING IF X IS WITHIN A RANGE OF 10-20

let x = 15;

(x < 10) ? "Outside Range" : (x > 20) ? "Outside Range" : "Inside Range";


