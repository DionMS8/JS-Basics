//-----[ERROR HANDLING]-----------------------------------------------------------------------------

//-----[TRY, CATCH, FINALLY, THROW]-----------------------------------------------------------------

// TRY{} - TESTING A CODE BLOCK FOR ERRORS
// CATCH{} - HANDLES THE ERROR
// FINALLY{} - EXECUTES CODE AFTER TRY & CATCH REGARDLESS OF THE RESULT
// THROW{} - CREATES CUSTOM ERRORS

// err - THIS IS THE JS ERROR OBJECT

// WHENEVER AN ERROR IS ENCOUNTERED BY TRY{}, 
// AN ERROR OBJECT IS GENERATED AND PASSED INTO 
// CATCH{} WHICH HANDLES IT

// ERROR.STACK ALLOWS FOR THE EXACT LOCATION OF 
// THE ERROR TO BE SHOWN

try {

    console.log("BEGIN TRY RUNS");

    pizza; // THIS IS UNDEFINED

    console.log("END TRY RUNS");

}

catch(err) { 

    console.log("ERROR DETECTED " + err.stack);

}

finally {

    console.log("THIS WILL ALWAYS RUN");

}

console.log("EXECUTION CONTINUES");



