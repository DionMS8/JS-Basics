//-----[VARIABLE SCOPE IN JS]----------------------------------------------------

// GLOBAL SCOPE

// - GLOBAL VARIABLES CAN BE ACCESSED FROM ANYWHERE

// IF VAR IS USED TO DEFINE A GLOBAL VARIABLE, 
// THEN IT WILL APPEAR ON THE WINDOW OBJECT

var a = 20; // APPEARS ON WINDOW OBJECT
let b = 50; // NOT ON WINDOW OBJECT
const c = 80; // NOT ON WINDOW OBJECT


// FUNCTION SCOPE

// - VARIABLES DECLARED BY VAR WITHIN A FUNCTION
// CANNOT BE ACCESSED OUTSIDE OF IT

function dbz() {
    var z = "goku"; // ONLY APPLIES TO THE "VAR" KEYWORD
}

console.log(z); // UNDEFINED 


//-----[BLOCK SCOPE]---------------------------------------------------------------------

// - LET AND CONST VARIABLES DECLARED WITHIN {} 
// CANNOT BE ACCESSED OUTSIDE OF IT

if (100 > 20) {
    let d = 500;
    const m = 600;
    var s = 700;
}

console.log(d); // UNDEFINED
console.log(m); // UNDEFINED
console.log(s); // 700


