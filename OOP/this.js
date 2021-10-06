//-----[THIS KEYWORD]---------------------------------------------------------------

// BY DEFAULT IT REPRESENTS AN OBJECT 

// THE OBJECT VARIES DEPENDING ON THE CONTEXT

function dbz() {console.log(this)} 
dbz(); // THE GLOBAL WINDOW OBJECT WILL BE PRINTED TO THE CONSOLE


//--[ADDING EVENT LISTENERS TO HTML DOM ELEMENTS]------------------------------------

// TARGETING AN ELEMENT IN THE DOM
const title = document.getElementById("title");

// REGULAR FUNCTIONS
// "THIS" WILL REFER TO THE DOM ELEMENT
title.addEventListener("click", function() {
    console.log(this);
})

// ARROW FUNCTIONS
// "THIS" WILL REFER TO THE GLOBAL ENVIRONMENT
title.addEventListener("click", () => {
    console.log(this);
})



