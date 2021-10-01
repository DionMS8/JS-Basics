//-----[GENERATORS]---------------------------------------------------------

//-----[EXAMPLE 1]------------------------------------------------------------

function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// THE "NEXT" KEYWORD PUSHES THE GENERATOR FORWARD


//-----[EXAMPLE 2]-------------------------------------------------------------

// CREATING A REQUEST FUNCTION WHICH TAKES IN A 
// URL FOR AN API AND EXECUTES A FUNCTION ON THE 
// URL TO GET THE JSON RESPONSE

function request(url) {
    getJSON(url, function(response) {
        generator.next(response);
    });
}

// NOW, A GENERATOR FUNCTION MUST BE CREATED TO 
// RETURN THE DATA FOR EACH ENTRY

function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1 = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var entry2 = JSON.parse(entry2);
    var entry3 = yield request('http://some_api/item2');
    var entry3 = JSON.parse(entry3);
}

// NOTE: SINCE DATA IS ALWAYS RETURNED IN THE FORM
// OF A JSON STRING, THE PARSE METHOD IS USED 
// TO CONVERT IT INTO A JSON OBJECT SO THAT THE 
// THE DATA WITHIN IT CAN BE ACCESSED


// WHEN A RETURN EXPRESSION IS CALLED IN A GENERATOR 
// IT WILL MARK THE GENERATOR AS DONE AND THE 
// STATED VALUE WILL BE RETURNED

