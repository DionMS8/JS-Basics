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


//-----[SORT METHOD]--------------------------------------------------------------------------------------------------------------------------------

// THE SORT METHOD ARRANGES THE ARRAY ELEMENTS 
// BY DEFAULT, IT SORTS IN ALPHABETICAL AND ASCENDING ORDER
letters.sort()

// SORTING THE NUMBERS IN AN ARRAY IN DESCENDING ORDER
const points = [80, 200, 2, 10, 50, 20]
points.sort((a,b) => {return b-a})

// IN ASCENDING ORDER...
points.sort((a,b) => {return a-b})

// FINDING THE HIGHEST VALUE IN AN ARRAY


// FINDING THE LOWEST VALUE IN AN ARRAY


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


//-----[REDUCE]-----------------------------------------------------------------------------------------------------------------------------------------

// THE REDUCE METHOD EXECUTES A REDUCER FUNCTION FOR EACH 
// VALUE/ELEMENT IN AN ARRAY AND RETURNS A SINGLE VALUE FOR 
// THE ACCUMULATED RESULT 

// REQUIRES 2 ARGUMENTS => (FUNCTION, INITIAL VALUE)
// FUNCTION => (TOTAL/ACCUMULATOR, NUM/CURRENT VALUE)
// INITIAL VALUE IS COMMONLY 0


//-----[REDUCE: EXAMPLE 1]--------------------------------------------------------------------------------------------------------------------------

const numbers  = [2,4,6,8,10] 

// APPLYING THE REDUCE METHOD TO THE ARRAY

const total = numbers.reduce((accumulator, number) => {
    console.log(`Accumulator: ${accumulator} | Number: ${number}`)
    return accumulator + number;
}, 0)


// PRINTING THE TOTAL TO THE CONSOLE
console.log(`Array Total: ${total}`);


//-----[REDUCE: EXAMPLE 2]--------------------------------------------------------------------------------------------------------------------------

// SUBTRACTING THE NUMBERS IN AN ARRAY STARTING FROM THE BEGINNING

const numbers = [175, 50, 25];

result = numbers.reduce((total, num) => {
  return total - num;
});

console.log(result);


//-----[REDUCE: EXAMPLE 3]----------------------------------------------------------------------------------------------------------------------------

// ROUNDING ALL THE NUMBERS IN AN ARRAY AND DISPLAYING THE SUM

const numbers = [15.5, 2.3, 1.1, 4.7];

roundedTotal = numbers.reduce((total, num) => {
  return total + Math.round(num);
}, 0)



