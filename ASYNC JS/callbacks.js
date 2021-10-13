//-----[CALLBACKS]---------------------------------------------------------------------------------------------------

// A CALLBACK FUNCTION IS A FUNCTION PASSED AS 
// AN ARGUMENT INTO ANOTHER FUNCTION TO BE 
// EXECUTED LATER 

// CALLBACKS ARE USED BOTH SYNCHRONOUSLY AND 
// ASYNCHRONOUSLY



//-----[setTimeout()]------------------------------------------------------------------------------------------------

// THIS CREATES A DELAY IN MILLISECONDS BEFORE A 
// FUNCTION IS EXECUTED

setTimeout(() => {
    console.log("Waited 1 Second...");
},1000);


//-----[CALLBACK HELL]--------------------------------------------------------------------

// NESTED setTimeouts 

setTimeout(() => {
    console.log("3");
    setTimeout(() => {
        console.log("2")
        setTimeout(() => {
            console.log("1")
        }, 1000);
    }, 1000);
}, 1000);


//-----[ADDEVENTLISTENER() METHOD]------------------------------------------------------------------------------------

// <button id="btn">Save</button>

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    // THIS IS THE CALLBACK FUNCTION SINCE IT 
    // WILL BE CALLED WHEN THE BUTTON IS CLICKED
});


//-----[ERROR FIRST CALLBACK HANDLER]---------------------------------------------------------------------------------

// IT IS IMPORTANT TO BE PREPARED FOR ERRORS
// WHEN WORKING WITH ASYNCHRONOUS JS CONCEPTS

fs.readFile("test.txt", {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.error("ERROR");
        console.error(err);
    } else {
        console.error("GOT DATA");
        console.log(data);
    }
});



