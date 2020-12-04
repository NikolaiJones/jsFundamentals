/*
        SCOPE

            - scope is how a computer keeps track of all the variables we create in our code
            - whenever we open up {}, we create a new scope (local scope). Any variables we create that are locally scoped are only available in that local scope- so not available globally
            - globally scopred variables are accessible anywhere in our document
*/

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope(); // parenthesis () invokes the funciton, tells it to run
console.log(x);

// ---------------------

let y = 12;

function baddie() {
    y = 33;
    console.log(y);
}

baddie();
console.log(y);

/*

    VAR vs LET

        - while var and let seem to operate the same - they have a lot of the same functionality (both allow us to declare and ititialize variables) - they also behave differently than one another
            - var is scoped to the nearest function block {}, and let is scoped to the nearest enclosing block {}
*/

var testOne = "this is a test";
let testTwo = "This is another test";

console.log(testOne, testTwo);

// VAR
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

// LET
let y = 12;

function letTest(){
    var y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}

letTest();
console.log(y);