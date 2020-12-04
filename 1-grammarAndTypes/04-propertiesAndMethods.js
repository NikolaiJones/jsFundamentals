/*
    PROPERTIES AND METHODS

        - In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with. Using a method causes something to happen to the data, while using a property returns information about the data

        -.property and .method()
            - methods have parenthesis behind them, properties do not
*/

// STRING PROPERTIES

// length
let myName = 'Nikolai';
console.log(myName.length);

// STRING METHODS

let myDogsName = 'Quincy';
console.log(myDogsName.toUpperCase()); // changes a string to upper case

let home = 'My home is Newburgh';
console.log(home.includes('Newburgh'));

// challenge: use google, find MDN documentation for string methods. Research the string.split method, and use and implement it to get an array back from a string.

let sent = 'This sentence will be split into individual parts';
console.log('The original string is: ' + sent);
console.log('The split string is: ' + sent.split(' ')); // splits at the declared criteria