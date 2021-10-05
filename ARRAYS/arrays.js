//-----[JS ARRAYS]---------------------------------------------------------------------------------------------------------------------------------

// CREATING AN ARRAY AND STORING IT IN A VAR
var letters = ["a", "b", "c"];

// PUSH ADDS AN ELEMENT AT THE END OF AN ARRAY
letters.push("d");

// POP REMOVES THE LAST ELEMENT OF THE ARRAY AND DISPLAYS IT
letters.pop();

// SHIFT REMOVES THE FIRST ELEMENT OF THE ARRAY AND DISPLAYS IT
letters.shift()

// UNSHIFT ADDS AN ELEMENT AT THE BEGINNING OF AN ARRAY AND 
// RETURNS THE NEW LENGTH OF THE ARRAY

letters.unshift("z")

// SLICE RETURNS A SPECIFIED SECTION OF THE ARRAY BASED ON IT'S INDEX RANGE NON INCLUSIVE OF THE LAST INDEX
letters.slice(1,2)



//-----[SPLICE]-----------------------------------------------------------------------------------------------------------------------------------------

// SPLICE RETURNS A SPECIFIED SECTION AND ADDS AN ELEMENT 
// TO THE ARRAY WHERE THE SECTION WAS REMOVED

letters.splice(2,2,"JS ARRAYS")


// CONCAT JOINS 2 ARRAYS

// CREATING A SECOND ARRAY AND STORING IT IN A VAR
var nums = [1, 2, 3, 4];

console.log(letters.concat(nums));


// JOIN CREATES A TEXT STRING FROM ALL OF THE ARRAY ELEMENTS
console.log(letters.join())

// REVERSE WILL REVERSE THE ORDER OF THE ARRAY ELEMENTS
console.log(letters.reverse())



//-----[GETTING A RANDOM VALUE FROM AN ARRAY]--------------------------------------------------------------------------

const fruits = ["🍎", "🍉", "🍍", "🍓"]

let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log(randomFruit);


// EMPTYING THE ARRAY BY SETTING IT'S LENGTH TO 0

fruits.length = 0;



