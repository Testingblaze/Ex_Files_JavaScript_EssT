const MYCONSTANT = 5;
console.log(MYCONSTANT);


function logScope(){
    let localVar= 2;

    if(localVar){
        let localVar = "I am different!"
        console.log("Nested localVar: ", localVar)
    }

    console.log("logScope lovalVar: " ,localVar);

}

logScope();