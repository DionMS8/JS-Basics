//-----[HIGH ORDER FUNCTIONS AND ARRAYS]-------------------------------------------------------------------------------------------------------------------------


const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Technology", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1979, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}


//-----[FOREACH METHOD]-----------------------------------------------------------------------------------------------------------------------------------------

// THE FOREACH METHOD CALLS A FUNCTION FOR EACH ARRAY ELEMENT, IN ORDER

//--[EXAMPLE 1 - PRINTING COMPANY NAMES]-------------------------------------------------------------------------------------------------------------------------

companies.forEach((company) => {
    console.log(company.name);
});


//--[EXAMPLE 2 -    ]-------------------------------------------------------------------------------------------------------------------------------------------



//-----[MAP METHOD]---------------------------------------------------------------------------------------------------------------------------------------------

// THE MAP METHOD CALLS A FUNCTION FOR EVERY ARRAY ELEMENT
// AND THEN STORES THE RESULTS IN A NEW ARRAY

// THE ORIGINAL ARRAY IS NOT CHANGED

//--[EXAMPLE 1 - CREATING AN ARRAY FOR THE COMPANY NAMES]------------------------------------------------------------------

const companyNames = companies.map(company => company.name)
console.log(companyNames);

//--[EXAMPLE 2 - USING THE SQUARE ROOT MATH FUNCTION]--------------------------------------------------------------------------

// THIS RETURNS A NEW ARRAY WITH THE SQUARE ROOT
// OF ALL THE ORIGINAL VALUES


const randomNums = [5, 10, 17, 25];
const newArray = nums.map(Math.sqrt);
console.log(newArray);


//-----[FILTER METHOD]--------------------------------------------------------------------------------------------------------------------------------------

// THE FILTER METHOD CREATES A NEW ARRAY FILLED WITH ELEMENTS 
// FROM THE ORIGINAL ARRAY THAT MET A GIVEN CONDITION


// EXAMPLE 1 - FILTERING TECHNOLOGY COMPANIES

// THIS WILL CREATE A NEW ARRAY WITH ONLY COMPANIES THAT HAVE A VALUE OF "TECHNOLOGY" FOR CATEGORY

const techCompanies = companies.filter(company => company.category === "Technology");

console.log(techCompanies);


//--[EXAMPLE 2 - FILTERING '80s COMPANIES]--------------------------------------------------------------------------------------------------------------------------------------

// THIS WILL CREATE A NEW ARRAY WITH ONLY COMPANIES THAT HAVE A START VALUE >= 1980 AND < 1990

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);

console.log(eightiesCompanies);


//--[EXAMPLE 3 - FILTERING COMPANIES THAT ARE AT LEAST 10 YEARS OLD]-----------------------------------------------------------------------------------------------------------------

// THIS WILL CREATE A NEW ARRAY WITH ONLY COMPANIES THAT

const oldCompanies = companies.filter(company => (company.end - company.start) >= 10);

console.log(oldCompanies);


//--[EXAMPLE 4 - FILTERING AGES ABOVE 18]------------------------------------------------------------------------------------------------------------------------------------------------

// A FUNCTION IS CREATED TO CHECK THE FILTER CONDITION

// console.log(ages.filter(age => {
//     if(age >= 18){
//         return true
//     }
// }));

console.log(ages.filter(age => age >= 18));



//-----[SORT]------------------------------------------------------------------------------------------------------------------------------------------








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

const subNumbers = [175, 50, 25];

result = subNumbers.reduce((total, num) => {
  return total - num;
});

console.log(result);


//-----[REDUCE: EXAMPLE 3]----------------------------------------------------------------------------------------------------------------------------

// ROUNDING ALL THE NUMBERS IN AN ARRAY AND DISPLAYING THE SUM

const floatNumbers = [15.5, 2.3, 1.1, 4.7];

roundedTotal = floatNumbers.reduce((total, num) => {
  return total + Math.round(num);
}, 0)



//-----------------------------------------------------------------------------------------------------------------------------------------------------




