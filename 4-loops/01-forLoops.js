/*
    - Loops offer us a quick and easy way to do something repeatedly, or loop over something

    - there are many differenet kinds of loops, but they all do roughly the same thing:
        - the loop will repeat until a specific condition evaluates to false

        - for loop
        - do while
        - while loop
        - for in
        - for of

        - for loop takes in 3 parameters
            1. initial expression;
            2. condition;
            3. increment expression

            *** separated by semi-colon
*/

//  1.) set var        condition      incrementer
for (let i = 0;         i < 10;         i ++) { // i += 1
    // for loop body: code to be ran each time condition is met
    console.log(i);
}

// Challenge: using a for loop, count to 20 by 2

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Challenge: using a for loop, count from 10 to 0 by 1's

for (let i = 10; i >= 0; i-= 1) {
    console.log(i);
}

// Challenge: using a for loop, count from 0 down by 2's to -24

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

// Challenge: using a for loop, go through a name and display each letter individually

let name = "Nikolai";

for (let num = 0; num < name.length; num += 1) {
    console.log(name[num]);
}

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);