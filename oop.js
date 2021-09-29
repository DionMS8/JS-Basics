class House {
    constructor(colour) {
    this.colour = colour
    }

    getFurniture() {
        return 'bed' //Functions would be shared between all objects of the class
    }
}

const houseObject = new House('red')

console.log(houseObject.getFurniture());


//-----[CREATING AN OBJECT LITERAL]--------------------------------------------------------------------------------------------------

// OBJECT DATA IS "ENCAPSULATED" INSIDE AN OBJECT PACKAGE
// AN OBJECT PACKAGE IS COMPOSED OF KEY-VALUE PAIRS


const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2021',

    // DEFINING A METHOD WITHIN THE CONSTRUCTOR
    getSummary: () => { 
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// PRINTING INFORMATION ABOUT THE OBJECT 
console.log(book1);
console.log(book1.title);

// PRINTING THE KEYS AND VALUES OF THE OBJECT
console.log(Object.keys(book1));
console.log(Object.values(book1));



//-----[CONSTRUCTORS]-------------------------------------------------------------------------------------------------------------------
function Book(title, author, year){
    this.title;
    this.author;
    this.year; 

    //Using Template Literals provided by ES6
    //this.getSummary = function() {
       // return '${this.title}  was written by ${this.author} in ${this.year};
   // }
}


//INSTANTIATING AN OBJECT
const book2 = new Book('Tom Sawyer', 'Mark Twain', '1997');
console.log(book2);

// PROTOTYPE FUNCTIONS
Object.prototype.getSummary = function() {
   // return '${this.title}  was written by ${this.author} in ${this.year};
}

// GET AGE PROTOTYPE FUNCTION

Book.prototype.getAge = function() {
    //Using the Built-In Date() Constructor Function
    const age = new Date().getFullYear() - this.year;
    return '${this.title} is ${age} years old';
}

// CALLING THE GETAGE PROTOTYPE FUNCTION FOR BOOK2
console.log(book2.getAge());

const dateObject = new Date();
console.log(dateObject);
console.log(dateObject.toISOString());
console.log(dateObject.getFullYear());

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

book2.revise('2018');
console.log(book2);


//-----[ENCAPSULATION]------------------------------------------------------------------------------------------------






//-----[POLYMORPHISM]--------------------------------------------------------------------------------------------------





