let food = ["Pecan Pie", "Shrimp", "Quesadilla","Cheesecake", "Hot Dog"];

// regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}
// forEach() method
food.forEach(function(foodItem) {
    console.log(foodItem)
})

//forEach() method - fat arrow function
food.forEach(foodItem => console.log(foodItem));

let food = ["Pecan Pie", "Shrimp", "Quesadilla","Cheesecake", "Hot Dog"];

for (let i = 0; i < food.length; i++) {
    listMyFood(food[i])
}

function listMyFood(foodItem) {
    console.log(foodItem);
}

// Look at MDN docs for forEach method 
// Challenge: in the ForEach() method, include the optional index parameter, and print that index to the console

let food = ["Pecan Pie", "Shrimp", "Quesadilla","Cheesecake", "Hot Dog"];

food.forEach((hi, index) => console.log(hi, index));

// block body arrow function
food.forEach((hi, index) => {
    console.log(hi, index);
} )

// function declaration
food.forEach(function(hi,index) {
    console.log(hi, index);
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["The Incredibles", "The Visit", "The Commute", "The Avengers", "Insidious"];

movies.forEach( print => console.log(print));

movies.push("Coraline");
movies.splice(1, 1, "Incredibles 2");
console.log(movies);