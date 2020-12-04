
// function expressions are stored inside of a variable

let hello = function() { // an unnamed function is known as an anonymous function

}

hello(); // when calling a function expression, the name of the variavle is what needs to be called

/*
    DIFFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS

        - function declaratons are hoisted
        - function expressions are NOT hoisted
*/

// declaration
function decTest() {
    console.log("it worked, and I was hoisted.");
}

// expression
let expTest = function() {
    console.log("didn't work, and I was not hoisted");
}

expTest();