// Ternary statements basically act as a shortcut for writing if and if/else statements

let num = 6;

// Ternary
(num > 0) ? console.log("yes") : console.log("no");

// instead of:
if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

//Conditional with if & else if
if (num > 10) {
    console.log("a first statement");
} else if (num < 0) {
    console.log("another statement");
}else {
    console.log("yet another, man");
    }

let num = 6;
//Same as above but a ternary:
(num > 10) ? console.log("a first statement") : (num < 0) ? console.log("another statement") : console.log("yet another, man");

/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 18;

(age <= 17) ? console.log("Sorry, you're too young to do anything.") : (age >= 18 && age < 21) ? console.log("You can vote.") : (age >= 21 && age < 25) ? console.log("You can drink.") : console.log("You can rent a car.");