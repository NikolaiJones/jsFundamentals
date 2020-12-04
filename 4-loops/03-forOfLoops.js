/*
    - FOR IN LOOOPS

        - where for in loops look at enumerable, or countable properties, for of loops look at iterable properties
        - iterable properties are properties that we can parse through with numbers, or indices

        - for in loops: better suited for objects
        - for of loops: better suited for arrays
*/

// using a for loop with an object will throw an error since for of loops look at iterable properties, and objects have what are known as enumberable, or countable, properties
let student = {
    name: "Nikolai",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item of student) {
    console.log(item)
}

let catArray = ["tabby", "british shorthair", "maine coon", "rag doll"];

for (let cat of catArray) {
    console.log(cat);
}

for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}