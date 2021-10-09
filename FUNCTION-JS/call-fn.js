//-----[CALL FUNCTION]-----------------------------------------------

// THE CALL() FUNCTION TAKES ARGUMENTS SEPARATELY
// RATHER THAN IN AN ARRAY

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
  
person.fullName.call(person1, "Oslo", "Norway");

  
//-----[APPLY() METHOD]-----------------------------------------------

// IT IS SIMILAR TO THE CALL() FUNCTION BUT IT 
// TAKES ARGUMENTS AS AN ARRAY

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


// EXAMPLE 2: THE APPLY() METHOD WITH ARGUMENTS

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
  
person.fullName.apply(person1, ["Oslo", "Norway"]);


// EXAMPLE 3: USING THE APPLY METHOD TO FIND THE 
// LARGEST NUMBER IN AN ARRAY BY APPLYING THE 
// MATH.MAX() METHOD

Math.max.apply(null, [2,4,6]);
Math.max.apply(" ", [2,4,6]);
Math.max.apply(0, [2,4,6]);

// THE FIRST ARGUMENT IN THE APPLY METHOD BECOMES
// THE OWNER OF THE INVOKED FUNCTION AND IN 
// NON-STRICT MODE, IT BECOMES A GLOBAL OBJECT

