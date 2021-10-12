//-----[CALLBACKS]---------------------------------------------------------------------------------------------------

//-----[setTimeout()]------------------------------------------------------------------------------------------------

setTimeout(() => {
    console.log("Waited 1 Second...");
},1000);

//-----[NESTED setTimeouts (a.k.a CALLBACK HELL)]--------------------------------------------------------------------

setTimeout(() => {
    console.log("3");
    setTimeout(() => {
        console.log("2")
        setTimeout(() => {
            console.log("1")
        }, 1000);
    }, 1000);
}, 1000);

// ADDING AN EVENT HANDLER TO A DOM ELEMENT SUCH 
// AS A BUTTON 

const btn;

btn.addEventListener("click",)


//-----[ERROR FIRST CALLBACK HANDLER]---------------------------------------------------------------------------------





