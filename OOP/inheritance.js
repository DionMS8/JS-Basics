
// CONSTRUCTOR
function Book (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

        // Creating the getSummary Function
        // Using Template Literals provided by ES6
        //this.getSummary = function () {
            //return "${this.title}  was written by ${this.author} in ${this.year};";
        //};
}

// CREATING ANOTHER MAGAZINE CONSTRUCTOR FUNCTION
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// INSTANTIATING A MAGAZINE OBJECT
const magazinems8 = new Magazine('Forbes', 'Joh Doe', '2021', 'November');
console.log(magazinems8);


