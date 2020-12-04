/*
    FOR IN LOOPS

        - great for iterating values in an object. Properties in an object are what are known as enumerable properties
        - looks at enumberable (or countable) properties of an object
*/

// objects hold what are called key/value pairs
let student = {
//  key   value     - values are assigned using a :, not an =
    name: "Peter",
    awesome: true,
    degree: 'Javascript',
    week: 1
}

for (let item in student) {
    console.log(item);
}

let catArray = ["tabby", "british shorthair", "maine coon", "rag doll"];

for (let cat in catArray) {
    console.log(catArray[cat]);
}

// Challenge: wriet a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let name = "nIKOLAI";
let capName;

for (let index in name) {
    // console.log(index);
    if (index == 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}
console.log(capName);
