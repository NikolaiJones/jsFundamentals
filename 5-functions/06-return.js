/*
    RETURN

        - allows us to return a variable or value that is local to the scope of a function, and access that variable or value within the scope of the document

        - there can only be a single return from a function
*/

// function declaration
function myName(fName) {
    //console.log(fName);

    return fName // parens or optional
}

//myName("Nikolai");
// when we return a value from a function, we need a variable to capture the return value from the function
let myNameIs = myName("Nikolai"); // when this line of code is read, the function will run before anything else. Since we're returning a value from the function myName, our return value is the value that will be assigned to our variable myNameIs
console.log(myNameIs);

function hello() {
    let a = "A";
    let b = "B";
    let c = "C";
    let ABC = a + b + c;
    return ABC;
}
let output = hello();
console.log(output);

// BLOCK BODY ARROW FUNCTION

let myName = fName => {
    return fName;
}

let myNameIs = myName("Spongebob");
console.log(myNameIs);

// CONCISE BODY ARROW FUNCTION
let name = lName => lName  // return keyword not needed in the case of a concise body arrow function - it happens by default

let captureReturn = name("Squarepants");
    console.log(captureReturn);