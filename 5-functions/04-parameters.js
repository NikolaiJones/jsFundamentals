/*
    PARAMETERS

         - placeholders for data that we pass into the function when the function is called

                    (parameter)
        function hello(name) {
            console.log(`hello ${name}`);
        }

        hello("Nikolai");
*/

function hello(name) {
        console.log(`hello ${name}`);
}
hello("baddie"); // when we call the function is when we need to pass in the data that we want to assign to the parameter

function baddie(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}
baddie("bj");

function counter(number) {
    console.log(`The current number is ${number}`);
}
for (let i = 0; i <= 10; i++) {
    counter(i)
}

// Challenge: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name.

function fullName(first, last) {
    let fullName = first + " " + last;
    console.log(`My full name is ${fullName}`);
}
fullName("Nikolai", "Jones");