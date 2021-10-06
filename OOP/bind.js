//-----[BIND METHOD]------------------------------------------------------------------

// BINDING AN OBJECT LITERAL TO A FUNCTION 

// CREATING 2 OBJECTS
let c1 = {
    x: 20,
    y: 40
};

let c2 = {
    x: 100,
    y: 300
};

// CREATING A FUNCTION
function getCoords() {
    console.log(`${this.x}, ${this.y}`);
}

// BINDING THE FUNCTION TO EACH OBJECT
c1_function = getCoords.bind(c1);
c2_function = getCoords.bind(c2);

// CALLING THE FUNCTIONS
c1_function(); // 20, 40
c2_function(); // 100, 300


