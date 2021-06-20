function makeAdjectifier(adjective){
    return function(string) {
        return adjective + " " + string
        //return `The sun is ${adjective} and birds have ${string}`
    }
};

var hottifier = makeAdjectifier("Hot") 

console.log(hottifier("Wings"));




