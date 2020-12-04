/*
    - switch statements execute a block of code depending on different cases
        - the switch statement is often used together with a break or a default keyword (or both). These are both optional.
    
*/

let num = 5;

switch (false) {
    case (num < 0 && num > -10):
        console.log("case 1 ran");
        break;
    case (num > 0):
        console.log("case 2 runs");
        break;
    default:
        console.log("not in the range");
}
//break is reached if preceeding code meets condition
//break causes code to stop being read there and goes to the end of the brackets

    