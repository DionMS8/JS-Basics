//-----[CALLBACKS]---------------------------------------------------------------------------------------------------

// A CALLBACK FUNCTION IS A FUNCTION PASSED AS 
// AN ARGUMENT INTO ANOTHER FUNCTION TO BE 
// EXECUTED LATER 

// CALLBACKS ARE USED BOTH SYNCHRONOUSLY AND 
// ASYNCHRONOUSLY

//-----[EXAMPLE OF SYNCHRONOUS CALLBACKS]

const items = [1, 2, 3, 4, 5];

items.forEach((item) => {
    console.log(item);
});


//-----[SETTIMEOUT() FUNCTION]---------------------------------------------------------------------------------------------------------

// THIS FUNCTION CREATES A DELAY BEFORE ANOTHER FUNCTION IS EXECUTED

// IT TAKES 2 ARGUMENTS/PARAMETERS
// 1ST ARGUMENT IS THE FUNCTION TO BE EXECUTED AFTER THE DELAY 
// 2ND ARGUMENT IS THE DELAY IN MILLISECONDS


//-----[EXAMPLE 1]--------------------------------------------------------------------------------------------------------------

// CREATING A FUNCTION WHICH WILL SIMULATE A LOGIN ALERT
const loginAlert = () => {
    alert("LOGIN SUCCESSFUL");
};

// USING setTimeout() TO CALLBACK THE loginAlert() FUNCTION AFTER 6000 MS
setTimeout(loginAlert, 6000);


//-----[EXAMPLE 2]--------------------------------------------------------------------------------------------------------------

setTimeout(() => {
    console.log("WAITED 1 SECOND...");
},1000);


//-----[EXAMPLE 3]--------------------------------------------------------------------------------------------------------------

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback ({username: email});
    }, 5000)
}

function getUserVideos (email, callback) {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 1000)
}

const user = loginUser("codingbeast8@gmail.com", 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
    });
});


//-----[CALLBACK HELL]-------------------------------------------------------------------------------------------------------------

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



