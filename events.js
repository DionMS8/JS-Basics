//*********************** EVENT HANDLING ****************************************************************************************************************************//

alertFunction() => {
    alert("NO TIME TO WASTE");
};

//METHOD 1: <button onclick="alert('Hello World')">Click Me</button>

<button onclick="document.getElementById('saiyanName').innerHTML=Date()">The time is?</button>

// METHOD 2:
// TARGET THE ELEMENT USING QUERY SELECTOR
// CREATE A CONST FOR IT
// ADD THE DESIRED EVENT ATTRIBUTE TO THE CONST USING AN ARROW FUNCTION 
const btn = document.querySelector('#btn');

btn.onClick = alertFunction();

//METHOD 3:
btn.addEventListener('click', alertFunction());


// NOTE: Using named functions can clean up your code considerably.
// Anonymous Arrow Functions can be given names to avoid rewriting
// the code for the fucntion.


//------------------------ PRACTICE -------------------------------------------------------------------------------------------------------------------------------------

const btn8 = document.querySelector('#btn8');

btn8.onclick = () => {
   let x = prompt("Please enter your name:");
   let z = `Hello ${x}`;
   console.log(z);
};

//function alertFunction() {
    //alert('NO TIME TO WASTE');
//};

// btn.addEventListener('click', logFunction());


const aTag = document.querySelector("a[target]"); // This will get the first <a> element in the HTML DOM that has a "target" attribute such as "target = "_blank" "


// USING MULTIPLE SELECTORS

// <h3> A h3 element </h3>
// <h2> A h2 element </h2>

//document.querySelector("h2, h3").style.backgroundColor = "red"; 

// The background dolour would be applied to the <h3> element since it would be the first Node seen in the DOM which matches the selectors provided


// BUBBLE EVENTS

//let x = event.bubbles; // The bubbles property returns a Boolean value that indicates whether or not an event is a bubbling event








