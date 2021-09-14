
// CREATING AN ARRAY AND STORING IT IN A CONST
const numbers  = [2,4,6,8,10] 


// CREATING A VARIABLE FOR THE TOTAL
//APPLYING THE .REDUCE FUNCTION TO THE ARRAY
const total = numbers.reduce((accumulator, number)=> {
    console.log(`Accumulator: ${accumulator} | Number: ${number}`)
    return accumulator + number;
}, 0)


// PRINTING THE TOTAL TO THE CONSOLE
console.log(`Array Total: ${total}`);



