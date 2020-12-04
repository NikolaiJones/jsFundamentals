/*
    - arrays are containers that hold a list of items
        - arrays can hold numerous data types
    - denoted by []
*/

let list = ["orange", "banana", "apple"];

console.log(list[1])

/*
    - when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference
        - javascript starts counting at 0
*/

let students = ["Amruta", "Marco", "Nick", "Carolina", 4, true, ["Adam", "Alexandra", "Alexia", "Allyson"]];

// console.log(typeof students) // object
// console.log(students instanceof Array); /* true, the instanceof operator is used to check the type of an object at run time. Will return a boolean
// console.log(students[2]); Nick 

// CHALLENGE: pull a value out of the nested array in the students array
console.log(students[6][2]);

let name = students[6][1];
console.log(name);