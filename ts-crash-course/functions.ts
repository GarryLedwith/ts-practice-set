/* 
Functions in TypeScript
Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (return values). TypeScript enhances JavaScript functions by allowing developers to define types for parameters and return values, ensuring type safety and reducing runtime errors.
TypeScript supports both named functions and anonymous functions (also known as arrow functions). Named functions are defined with a specific name, while anonymous functions are defined without a name and can be assigned to variables or passed as arguments.
Functions can also be overloaded, meaning you can define multiple function signatures with the same name but different parameter types or counts. This allows for more flexible function definitions and better type checking.
Functions are essential for organizing code, promoting code reuse, and improving maintainability. They are a fundamental part of TypeScript and JavaScript, enabling developers to create modular and structured applications.


*/ 

// Example of a simple function
function greet(name: string): string {
    return `Hello, ${name}!`; // The function takes a string parameter and returns a string
}

// Example of a function with multiple parameters
function add(a: number, b: number): number {
    return a + b; // The function takes two numbers and returns their sum
}

// Example of a function with optional parameters
function multiply(a: number, b?: number): number {
    if (b === undefined) {
        return a * 2; // If b is not provided, multiply a by 2
    }
    return a * b; // Otherwise, multiply a and b
}   

// Example of a function with default parameters
function divide(a: number, b: number = 1): number {
    return a / b; // If b is not provided, it defaults to 1
}   

 

/*
Arrow functions are a concise way to write functions in TypeScript. They are particularly useful for short functions and can capture the `this` context from their surrounding scope, making them ideal for use in callbacks and event handlers.
Arrow functions can also be used as methods in classes, providing a more concise syntax for defining methods. They can be defined with or without parentheses around the parameters, depending on the number of parameters.     

*/

// Example of an annonymous function (arrow function)
const square = (x: number): number => {
    return x * x; // The function takes a number and returns its square
} 

// Example of an arrow function with no parameters
const sayHello = (): string => {
    return "Hello, World!"; // The function returns a greeting message
}   

// Example of an arrow function with a single parameter
const double = (x: number): number => x * 2; // The function takes a number and returns its double

// Example of an arrow function with multiple parameters
const sum = (a: number, b: number): number => a + b; // The function takes two numbers and returns their sum

// Example of a function with a return type annotation
function getLength(str: string): number {
    return str.length; // The function takes a string and returns its length
}
// Example of a function with a void return type
function logMessage(message: string): void {
    console.log(message); // The function logs a message to the console and does not return a value
}   