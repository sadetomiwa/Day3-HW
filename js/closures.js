console.log('Hello CLosures!');



/*
JavaScript Closures
*/


let subject = 'Javascript'; // Block Scoped - window

function homeWork (student) {
    console.log(`${student}, do your ${subject} homework!`);

};

homeWork('John');


// Scopes can be nested 

let hometown = 'Arlington';  // Block Scoped - window

{
    var state = 'Texas'; // Global Scoped - window' 
    let hometown = 'Dallas'; // Block Scoped - window
    {
        console.log(`I live in ${hometown}, ${state}`);
    }
};

console.log(`I live in ${hometown}, ${state}`);


// Function scopes can also be nested 


function outer () {
    // define a variable in the outer function scope
    let outerMessage = 'This is  the outer message';

    function inner () {
        // define a variable in the inner function scope
        let innerMessage = 'This is the inner message';

        console.log(`${outerMessage} and ${innerMessage}`);
    };
};



//inner() function is a closure because it has access to the outer() function scope
// A closure is a function that has access to the parent scope, even after the parent function has closed
// A closure is a function that preserves the outer scope in its inner scope





// A more practical example of a closure

function makeMultiplier(x) {
    function times(y) {
        return x * y;
    };
    return times;
};

let multiplyByTwo = makeMultiplier(2);
let multiplyByThree = makeMultiplier(3);


// Set up "hidden" variables  using closure
function setCounter() {
    let count = 0; //Scoped to the SetCounter function
   function increment() {
       count++;
       return count;
   }
    return increment;
};

let step = setCounter();

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

console.clear();


// Practical example of a - hiding variables

let cache = {};

function fib(num){
    if (num < 2 ){ 
    return num;
    } else {
        let fibnum = fib(num - 1) + fib(num - 2);
        return fibnum;
    };
};

console.log(fib(10));
console.log(fib(20));

// In Class Exercise
// Create an IIFE that has a hidden array of names (starts as an empty array) but will add users to the array every time the function is called
const addName = (() => {
    let names = [];
    return (name) => {
        names.push(name);
        return names;
    };
})();


console.log(addName('Brian')); // ['Brian']
console.log(addName('Tatyana')); // ['Brian', 'Tatyana']
console.log(addName('Ripal')); // ['Brian', 'Tatyana', 'Ripal']
console.log(addName('Sam')); // ['Brian', 'Tatyana', 'Ripal', 'Sam']