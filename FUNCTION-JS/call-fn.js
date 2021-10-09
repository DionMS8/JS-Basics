//-----[CALL FUNCTION]-----------------------------------------------









//-----[APPLY() METHOD]-----------------------------------------------

// IT IS SIMILAR TO THE CALL() FUNCTION

// EXAMPLE 1: APPLYING A FUNCTION THAT IS DEFINED 
// WITHIN ONE OBJECT, TO ANOTHER OBJECT.

const person = {
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: John,
    lastName: "Doe"
};

console.log(person.fullName.apply(person1));

