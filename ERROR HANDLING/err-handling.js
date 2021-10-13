//-----[CONTROL FLOW AND ERROR HANDLING]-----------------------------------------------------------------------------

// CONTROL FLOW REFERS TO THE USE OF LOOPS, 
// IF STATEMENTS,

// A CONTROL FLOW APPROACH IS PREFERRED OVER ERROR HANDLING

//-----[TRY, CATCH, FINALLY, THROW]----------------------------------------------------------------------------------------

// TRY{} - TESTING A CODE BLOCK FOR ERRORS
// CATCH{} - HANDLING THE ERRORS
// FINALLY{} - EXECUTES CODE AFTER TRY & CATCH REGARDLESS OF THE RESULT
// THROW{} - CREATES CUSTOM ERRORS

try {

    console.log("BEGIN TRY RUNS");

    pizza; // THIS IS UNDEFINED

    console.log("END TRY RUNS");

} catch(err) { 
    
    console.log("ERROR DETECTED " + err.stack);

} finally {

    console.log("THIS WILL ALWAYS RUN");

}

console.log("EXECUTION CONTINUES");


// err - THIS IS THE JS ERROR OBJECT AND IT IS 
// MADE UP OF A "NAME" AND A "MESSAGE"

// WHENEVER AN ERROR IS ENCOUNTERED BY TRY{}, 
// AN ERROR OBJECT IS GENERATED AND PASSED INTO 
// CATCH{} WHICH HANDLES IT

// ERR.STACK ALLOWS FOR THE EXACT LOCATION OF 
// THE ERROR TO BE SHOWN


// NOTE: TRY-CATCH ONLY HANDLES RUNTIME ERRORS

let json = '{ "age": 30 }';
 
try {
    
  let user = JSON.parse(json); 

  if (!user.name) {
    throw new SyntaxError("Incomplete Data: No Name Found");
  }
 
  console.log(user.name);
 
} catch(err) {

  console.log(`JSON Error: ${err}`); 

}

// JSON Error: SyntaxError: 
// Incomplete Data: No Name Found

