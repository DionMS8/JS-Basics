
//-----[JS PROMISES]----------------------------------------------------------------------------------------------------

// AN INSTANCE OF THE JS PROMISE OBJECT IS CREATED USING THE 'NEW' KEYWORD 
// TO ACCESS THE THE PROMISE CONSTRUCTOR FUNCTION 

const p = new Promise((resolve, reject) => {
    let a = 1 + 1;                                      // THE PROMISE IS STATED AND STORED IN A VARIABLE
    if(a == 2) {                                        // THE IF ELSE STATEMENT CHECKS IF THE PROMISE IS RESOLVED OR REJECTED
        resolve('Successful')
    } else {
        reject('Failed');
    }
}) 

// INTERACTING WITH PROMISES

// '.THEN' IS CALLED IF THE PROMISE IS RESOLVED
// '.CATCH' REFERS TO IF THE PROMISE FAILED AND IT IS CALLED IF IT IS REJECTED

p.then((message) => {
    console.log('The promise is ' + message);
}).catch((message) => {
    console.log('This promise is ' + message);
})


//-----[SETTIMEOUT() FUNCTION]---------------------------------------------------------------------------

// THIS FUNCTION CREATES A DELAY BEFORE ANOTHER FUNCTION IS EXECUTED

// IT TAKES 2 ARGUMENTS/PARAMETERS
// 1ST ARGUMENT IS THE FUNCTION TO BE EXECUTED AFTER THE DELAY 
// 2ND ARGUMENT IS THE DELAY IN MILLISECONDS

//-----[EXAMPLE 1]------------------------------------------------------------------------------------------

const loginAlert = () => {
    alert('Login');
};
   
setTimeout(loginAlert, 6000);



//-----[MORE PRACTICE]------------------------------------------------------------------------------------

let firstFunction = () => {
    return new Promise((resolve, reject) => {
        resolve('Dr. Seuss likes ');
    });
  }
  
let secondFunction = (dataFromFirstFunction) => {
    return new Promise((resolve, reject) => {
      resolve(`${dataFromFirstFunction} green eggs and ham.`);
        
    });
}
  
firstFunction()
    .then((data) => {return secondFunction(data);})     // DATA IS PASSED TO THE SECOND FUNCTION
    .then((data) => {console.log(data);});              // DATA IS BEING PASSED AGAIN

// NOTE: .THEN INDICATES THAT THE DATA IS BEING PASSED 

