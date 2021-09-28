// CREATING A COMPANIES OBJECT

let companies = `[

    {
        "name": "Facebook",
        "numberOfEmployees": 10000,
        "ceo": "Mark",
        "rating": 8.5
    },

    {
        "name": "Apple",
        "numberOfEmployees": 20000,
        "ceo": "Jobs",
        "rating": 7.5
    },

    {
        "name": "Startup Company",
        "numberOfEmployees": 500,
        "ceo": null,
        "rating": 4.3
    }
]`

let companiesObject = JSON.parse(companies);

// AS A JS OBJECT, CERTAIN INFORMATION CAN NOW BE ACCESSED FROM THE JSON DATA
// console.log((companiesObject)[0].ceo);
// console.log((companiesObject)[1].name);
// console.log((companiesObject)[2].rating);



//-----[EXAMPLE 2]---------------------------------------------------------------------------------------------------------------------------------

// CREATING AN ARRAY OF OBJECTS

var zfighters = [
    { 
        name: "Goku", 
        age: 50
    },
    { 
        name: "Vegeta",
        age: 60
    },
    {
        name: "Broly",
        age: 80
    }
];

var output = " ";

for (var i = 0; i < zfighters.length; i++){
    // console.log(zfighters[i].name);
    output += `<li> ${zfighters[i].name} </li>`;
}

document.getElementById("dbz-names").innerHTML = output;



// PRACTICING USING AJAX TO REQUEST DATA FROM A WEB SERVER

// CREATING AN XMLHttpRequest OBJECT
var xhttp = new XMLHttpRequest();
    
// THE READY STATE CHANGE EVENT IS TRIGGERED WHENEVER THE READY STATE ATTRIBUTE CHANGES
// CREATING AN EVENT HANDLER FUNCTION TO BE CALLED WHENEVER THE READY STATE CHANGE EVENT IS TRIGGERED
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // IF THESE CONDITIONS ARE MET, THEN THE REQUEST HAS BEEN COMPLETED SUCCESSFULLY
    document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "zfighters.json", true);
xhttp.send();



//-----[EXAMPLE 3]--------------------------------------------------------------------------------------------------------------------------------------

// CREATING A CITIZENS OBJECT

let citizens = {
                    
                    
    "fname": "John",
    "lname": "Doe",
    "age": 23,
    "dateOfBirth": {
        "day": "7",
        "month": "March",
        "year": "1995"
    },
    "email": "johndoe123@hotmail.com",
    "isVaccinated": true,
    "vaccines": ["1st Dose", "2nd Dose"],
    "friends": [{ 
        "fname": "Jane", 
        "lname": "Doe", 
        "age": 26, 
        "dateOfBirth": {
            "day": "4",
            "month": "May",
            "year": "1992"
        },
        "email": "johndoe123@hotmail.com",
        "isVaccinated": true,
        "vaccines": ["1st Dose", "2nd Dose"],
        "address": {
            "street": "2 main rd",
            "city": "Tobago"
        },
    }]
        
}

