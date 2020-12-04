/*
    - variables are named containers for storing data values or data types
    - we name variables so that we can refer to the data they're holding at a later point in time
*/

    let number  =  2;
/*  (1)  (2)   (3) (4)

    1- javascript keyword
    2- variable name
    3-a ssignment operator
    4- variable value
*/

let numberOne = 5;
let numberTwo = 3;

console.log(numberOne + numberTwo);

/*
    - a variable name must begin with a letter, underscore, or a dollar sign ($)
    - a number may follow the above characters, but they can not come first
    - javascript is case sensitive- 'hello' and "hello" are different variables
    - no spaces allowed in variable names
    - camelCase is the best practice for naming variables
*/

/*
    -var: 'old' keyword for variables
    -let: 'new' keyword for variables
    -const: 'new' keyword for variables; declares an unchangeable value
*/

/*
    declaration vs initialization

        declarations are the LEFT SIDE of the assignment operator when writing a variable
        initializations are the RIGHT SIDE of the assignment operator, or the value we are assigning to the variable
*/

let x = 10;
console.log('Declaration', x);

x = 10;
console.log('Initialization', x);

x = 20;
console.log('Reinitialization', x);