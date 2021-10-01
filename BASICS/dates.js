// new Date() creates a new date object with the current date and time

// toISOString() method converts a date to a string, using the ISO standard format:
const d = new Date();
document.getElementById("saiyanName").innerHTML = d.toISOString();

// INSTANTIATING A DATE OBJECT
const dateObject = new Date();
console.log(dateObject);

// OPERATING ON THE DATE OBJECT

//DATE GET METHODS
console.log(dateObject.toISOString());
console.log(dateObject.getFullYear());
console.log(dateObject.getMonth());
console.log(dateObject.getDate());
console.log(dateObject.getDay());
console.log(dateObject.getTime());


// DATE SET METHODS


