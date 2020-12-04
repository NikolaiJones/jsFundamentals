// CALLING FUNCTIONS

function hello() {
    console.log("hi!");
}

//hello // nothing happens
//hello(); // hi!

console.log(hello); // [Function: hello]
console.log(hello()); // hi! undefined - function invocations happen immediately once the line of code is read. The function will run before anything else in front of that line of code.

GamepadButton.addEventListener("click", hello)

// CHALLENGE: create a function that, when invoked, prints out the numbers 1-10

function baddie() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

}

baddie();

// CHALLENGE: given the array, create a function that lists out the values individually

let arr = ["This", "is", "really", "cool"];

for (let dig of arr) {
    console.log(dig);
}
