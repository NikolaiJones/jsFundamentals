/*
    - falsy values: a value that is considered false when encountered in a Boolean context (Boolean's are a type that can only be true or false)

        - there are six cases of falsy values in JavaScript
        1. false
        2. 0
        3. "", '', ``
        4. null
        5. undefined
        6. NaN (not a number)

    - This means when Javascript is expecting a boolean and is given one of these values, it will always evaluate to "falsy"

*/

let isOn = true;

// Read as if the variable "isOn" is equal to true, run the body
if (isOn == true) {
    // body of the if statement
    console.log("The light is on!")
}

// Read as, if "isOn" is true, run the body
if (isOn) {
    console.log('The light is still on');
}

let isOff = false;
// If statement will only run if the condition is true, since it is true that it is false, it will run
if (isOff == false) {
    console.log("The light is now off");
}

let weather = 65;

if (weather < 70) {
    console.log('Wear a jacket');
}