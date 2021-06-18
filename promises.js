
// AN INSTANCE OF THE JS PROMISE OBJECT IS CREATED USING THE 'NEW' KEYWORD TO ACCESS THE THE PROMISE COSTRUCTOR FUNCTION 

const p = new Promise((resolve, reject) => {
    let a = 1 + 1;                            // THE PROMISE IS STATED AND STORED IN A VARIABLE
    if(a == 2) {                              // THE IF ELSE STATEMENT CHECKS IF THE PROMISE IS RESOLVED OR REJECTED
        resolve('Successful')
    } else {
        reject('Failed');
    }
}) 

// INTERACTING WITH PROMISES

// '.THEN' REFERS TO IF THE PROMISE IS SUCCESSFUL AND IT IS CALLED IF IT IS RESOLVED
// '.CATCH' REFERS TO IF THE PROMISE FAILED AND IT IS CALLED IF IT IS REJECTED

p.then((message) => {
    console.log('The promise is ' + message);
}).catch((message) => {
    console.log('This promise is ' + message);
})

// SETTIMEOUT() FUNCTION

const loginAlert = () =>{
    alert('Login');
  };
   
setTimeout(loginAlert, 6000);



  