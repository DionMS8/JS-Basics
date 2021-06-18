
//JavaScript accepts both double and single quotes

console.log('Broly is the Legendary Super Saiyan');
//alert("oooooo");

var superhero = "spiderman"; //creates a variable and stores a string value 
console.log(superhero); //prints the value stored in the variable
console.log('superhero'); //prints the text


//The example below "finds" an HTML element by it's id, and changes 
//the element content (innerHTML) 

document.getElementById('saiyanName').innerHTML = "Goku is Kakarot";


//document.getElementById("demo").style.fontSize = "35px";

//JavaScript Can Hide HTML Elements
//document.getElementById("saiyanName").style.display = "none";

//var favFood = prompt('What is your favourite food?');

//document.getElementById('saiyanName').innerHTML = favFood;

var myNumber = 8;
myNumber++; //increments by one
myNumber+=8; //increments by any number
myNumber--; //decrements by one
myNumber-=5; //decrements by any number
console.log(myNumber = myNumber % 3); //This gives the remainder 
console.log(myNumber);


//WHILE LOOPS ******************************************************** 

let ms8 = 0;

//while (ms8 < 200) {

   // console.log(ms8);
   // ms8+=5; //can also be stated as "ms8 = ms8 +5"

//}

var saiyans = ["Goku", "Vegeta", "Gohan", "Trunks", "Goten"];
var i = 0;
var fighters = "";

while (saiyans[i]) {
  fighters += saiyans[i] + " ";
  console.log(fighters)
  i++;
}

//Based on the format, it is less likely to forget to increment the 
//variable with a For Loop than with a While Loop, which can cause it
//to run infinitely

//FOR LOOPS ************************************************************

//for(let ms8=0; ms8 <= 100; ms8+=4) {

// console.log(ms8);

//}

//DO WHILE LOOPS *******************************************************

do {
    console.log('DO WHILE LOOP!');
    ms8++;
}

while (ms8 < 8);


//IF ELSE

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}
 

//COMPARISON OPERATORS AND IF ELSE

let hungerLevel = 7;

if (hungerLevel>7) {
  console.log('Time to eat!');
}

else {
  console.log('We can eat later!');
}

// = is assignment
// == checks if values are equal
// === also checks if the data type matches


// CONSTANTS **********************************************************
const pi = 3.14; 
//pi = 8;
console.log(pi);

// An error will arise if you try to reassign a new value to a const.

//HTML DOM *************************************************************
let myElement = document.createElement('h1');
let mySpan = document.createElement('span');

mySpan.innerText = "Beast Mode";

myElement.appendChild(mySpan);

document.body.appendChild(myElement);

// Virtually creating HTML DOM elements and injecting them 
// into the page on the window 

//CREATING AN OBJECT **************************************************
let person = {
    firstName: "Dion", // these are key/value pairs
    middleName: "Mitra", // ":" is a delimiter
    lastName: "Singh"
};

//OBJECTNAME.PROPERTYNAME allows for object properties to be accessed

var txt = "Hello World!";
var x = 
txt.length
;
alert(x);

// ESCAPE CHARACTERS => "\" and "\"

// STRING METHODS
// STRINGNAME.length;
// STRINGNAME.indexOF("element");
// STRINGNAME.slice(index of 1st letter, index after last letter);
// STRINGNAME.replace("Original Element", "Replacement Element");
// STRINGNAME.toUpperCase();
// STRINGNAME. toLowerCase();

// LOGICAL OPERATORS
/// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)


// BREAK LOOPS
// BREAKING A FOR LOOP WHEN i == 5
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
  break;
    }
  }

// SKIPPING AN ITERATION 
for (i = 0; i < 10; i++) {
    if (i == 5) {
  continue;
    } else {
      consolelog(i);
    }
  }

// PROMPTS 
let p = prompt(displayText, defaultInputText);


