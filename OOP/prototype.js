// PROTOTYPES

// ALMOST EVERY JS OBJECT CONTAINS A DEFAULT
// PROPERTY WHICH IS A REFERENCE OR LINK TO A 
// PROTOTYPE OBJECT

// EACH PROTOTYPE OBJECT HAS IT'S OWN PROTOTYPE
// PROPERTY, WHICH FORMS A PROTOTYPE CHAIN 


// SETTING THE PROTOTYPE OF THE OBJECT

// CREATING AN OBJECT WITH A "GREET" FUNCTION

var objProto = {
    greet: function() {
        console.log(this.greeting + " dawgggg");
    }
};

//-----[1. USING A CONSTRUCTOR FUNCTION]--------------------------------------

// CREATING A CONSTRUCTOR FUNCTION
var Greeting = function (term) {
    this.greeting = term;
};


// LINKING THE PROTOTYPE OF THE CONSTRUCTOR FUNCTION TO THE OBJECT

Greeting.prototype = objProto;

// THIS IS DONE SO THAT THE CONSTRUCTOR FUNCTION 
// CAN NOW ACCESS THE "GREET" FUNCTION WHICH IS 
// DEFINED WITHIN THE OBJECT


// CREATING AN INSTANCE OF THE CONSTRUCTOR FUNCTION

var objG = new Greeting("Oooo");

objG.greet();


//-----[2. OBJECT.CREATE(PROTOTYPE)]--------------------------------------------------------------------------------------------------

var obj2 = Object.create(objProto);

// ASSIGNING THE REQUIRED PARAMETERS
obj2.greeting = "Hello";

// ACCESSING THE GREET METHOD FROM THE PROTOTYPE
obj2.greet()


//-----[3. OBJECT.SETPROTOTYPEOF()]------------------------------------------------------------------------------------------------------------------

// INTRODUCED IN ES6
// Object.setPrototypeOf(obj, prototype)

var obj3 = {
    greeting: "Yooo"
}

Object.setPrototypeOf(obj3, objProto);

// obj3.greet()










