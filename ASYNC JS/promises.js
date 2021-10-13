//-----[JS PROMISES]----------------------------------------------------------------------------------------------------

//  A PROMISE IS AN OBJECT WHICH REPORTS THE 
// SUCCESS OR FAILURE OF AN OPERATION

// A NEW JS PROMISE OBJECT IS CREATED USING THE 'NEW' 
// KEYWORD TO ACCESS THE THE PROMISE CONSTRUCTOR FUNCTION 

//-----[EXAMPLE 1]------------------------------------------------------------------------------------------------------------------------

const p = new Promise((resolve, reject) => {
    // THE PROMISE IS STATED AND STORED IN A VARIABLE
    let a = 1 + 1;    
    // THE IF ELSE STATEMENT CHECKS IF THE PROMISE IS RESOLVED OR REJECTED                        
    if(a == 2) {                              
        resolve("Successful")
    } else {
        reject(new Error("Failed"));
    }
});

// '.THEN' IS CALLED IF THE PROMISE IS RESOLVED AND SUCCESSFUL
// '.CATCH' IS CALLED IF THE PROMISE IS REJECTED AND HAS FAILED

p.then((message) => {
    console.log('The promise is ' + message);
}).catch((message) => {
    console.log('This promise is ' + err.message);
})


//-----[EXAMPLE 2]------------------------------------------------------------------------------------------------------------------------


function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve ({username: email});
        }, 5000);
    });
}

function getUserVideos (email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (["video1", "video2", "video3"]);
        }, 1000);
    });
}

loginUser("codingbeast8@gmail.com", "123456")
    .then(user => console.log(user))
    .then(videos => console.log(videos[0]))



//-----[EXAMPLE 3]------------------------------------------------------------------------------------------------------------------------

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


//-----[EXAMPLE 4]------------------------------------------------------------------------------------------------------------------------

// USING PROMISES WITH THE FETCH API

fetch("API URL")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


//=====[PROMISE.ALL]============================================================================

const yt = new Promise (resolve => {
    setTimeout(() => {
        console.log("Capturing YouTube content");
        resolve({videos:[1, 2, 3, 4, 5]});
    }, 2000);
});

const fb = new Promise (resolve => {
    setTimeout(() => {
        console.log("Capturing Facebook content");
        resolve({user: "Name"});
    }, 2000);
});

Promise.all([yt,fb])
    .then(result => console.log(result));





