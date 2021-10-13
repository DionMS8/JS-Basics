//-----[JS PROMISES]----------------------------------------------------------------------------------------------------

// A NEW JS PROMISE OBJECT IS CREATED USING THE 'NEW' 
// KEYWORD TO ACCESS THE THE PROMISE CONSTRUCTOR FUNCTION 

//-----[EXAMPLE 1]------------------------------------------------------------------------------------------------------------------------

const p = new Promise((resolve, reject) => {
    // THE PROMISE IS STATED AND STORED IN A VARIABLE
    let a = 1 + 1;    
    // THE IF ELSE STATEMENT CHECKS IF THE PROMISE IS RESOLVED OR REJECTED                        
    if(a == 2) {                              
        resolve('Successful')
    } else {
        reject('Failed');
    }
});

// '.THEN' IS CALLED IF THE PROMISE IS RESOLVED AND SUCCESSFUL
// '.CATCH' IS CALLED IF THE PROMISE IS REJECTED AND HAS FAILED

p.then((message) => {
    console.log('The promise is ' + message);
}).catch((message) => {
    console.log('This promise is ' + message);
})


//-----[EXAMPLE 2]------------------------------------------------------------------------------------------------------------------------

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


//-----[EXAMPLE 3]------------------------------------------------------------------------------------------------------------------------

// USING PROMISES WITH FETCH API

fetch("API URL")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));







