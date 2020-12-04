/*
    ARROW FUNCTIONS

        - arrow functions, also commonly referred to as fat arrow functions, are basically a more concise way to write a function expression, not a function declaration.
            - function expressions do NOT get hoisted
*/

// BLOCK BODY ARROW FUNCTION
let hello = () => { //any parameters that the function may hold will go inside of the set of parentheses
 console.log("Hello world");
}
hello();

// regular function expression
let hello = functon ();
hello(); 

// CONCISE BODY ARROW FUNCTION

let hello = () => console.log("Hello world");

hello();

/*
    NOTE: concise body arrow functions return any value by default, whereas block body arrow functions do not - we need to implicitly specify what value we want to return
*/

function hello() { // new local scope created
    let myVar = "this is my variable"

    return myVar;
}

// CONCISE BODY vs BLOCK BODY

//concise body arrow function
let apples = (number) => console.log(`There are ${number} apples.`);
// when we have a single number, it's not necessary to include parentheses where the parameter would go ("number" alone would not need parentheses), parentheses are needed when no or multiple parameters are provided

apples(10);
apples("x");

// no parameters
let apples = () => console.log("");

//multiple parameters 
let apples = (numberOne, numberTwo) => console.log("");

// -------------------------

// block body arrow function

let apples = number => {
    console.log(`There are ${number} apples.`)
}

apples(10);
apples("ten");
apples(false);

// When your function needs to perform more complex tasks or multiple tasks, it's preferred to use a block body arrow function; when your function needs to perform a singular task or a very simple task, a concise body arrow function is preferred.