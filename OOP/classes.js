//-----[CLASSES]---------------------------------------------------------------------------------------

// FUNCTIONS DEFINED WITHIN A CLASS ARE ACCESSIBLE TO 
// ALL OBJECTS OF THAT CLASS 

// CALLING A METHOD IN A CLASS

objectName.methodName(args)


//-----[EXAMPLE 1 - PERSON]----------------------------------------------------------------------------

// DECLARING A PERSON CLASS
class Person {

    // DEFINING THE CONSTRUCTOR FUNCTION FOR THE CLASS
    constructor(name) {
        this.name = name;
    }

    // CREATING A METHOD OF THE PERSON CLASS
    getName() {
        return this.name
    }
}

// CREATING A NEW PERSON OBJECT 
let john = new Person("John Doe");


//-----[EXAMPLE 2 - HOUSE]--------------------------------------------------------------------------------

// DECLARING A HOUSE CLASS
class House {

    constructor(colour) {
        this.colour = colour
    }

    getFurniture() {
        return "bed" 
    }
}

const houseObject = new House("yellow")

console.log(houseObject.getFurniture());




