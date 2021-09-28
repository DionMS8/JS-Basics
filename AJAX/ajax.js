// USING AJAX TO REQUEST DATA FROM JSON ON A LIVE WEB SERVER

// CREATING AN XMLHttpRequest OBJECT
var xhttp = new XMLHttpRequest();
    
// THE READY STATE CHANGE EVENT IS TRIGGERED WHENEVER THE READY STATE ATTRIBUTE CHANGES

// CREATING AN EVENT HANDLER FUNCTION TO BE CALLED WHENEVER THE READY STATE CHANGE EVENT IS TRIGGERED
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
        // CONVERTING THE TEXT STRING INTO A JS OBJECT
        var response = JSON.parse(xhttp.responseText);
        var zfighters = response.zfighters;
        
        // console.log(response.zfighters);

        var output = " ";

        for (var i = 0; i < zfighters.length; i++){
            // console.log(zfighters[i].name);
            output += `<li> ${zfighters[i].name} </li>`;
        }

        document.getElementById("zfighters").innerHTML = output;


        // IF THESE CONDITIONS ARE MET, THEN THE REQUEST HAS BEEN COMPLETED SUCCESSFULLY
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        
    }
};

xhttp.open("GET", "zfighters.json", true);

xhttp.send();




