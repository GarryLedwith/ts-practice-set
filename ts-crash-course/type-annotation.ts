/*
Type Annotations are used to explicitly define the type of a variable, function parameter, or return value in TypeScript. They help ensure that the code adheres to specific types, enhancing type safety and reducing runtime errors.
Type annotations can be applied to variables, function parameters, and return types. They are particularly useful in complex data structures like arrays and objects.
Type annotations are a core feature of TypeScript, allowing developers to specify the types of variables, function parameters, and return values. This helps catch errors at compile time rather than runtime, making the code more robust and maintainable.

*/

// Basic Type Annotation Example
let count: number = 5; // `count` is explicitly typed as a number 
let firstName: string = "John"; // `name` is explicitly typed as a string 
const lastName: string = "Doe"; // `lastName` is explicitly typed as a string and cannot be reassigned

// Function with Type Annotations
function greet(name: string): string {
    return `Hello, ${name}!`; // The function takes a string parameter and returns a string
}

// Array Type Annotation
let numbers: number[] = [1, 2, 3, 4, 5]; // `numbers` is an array of numbers
let names: Array<string> = ["Alice", "Bob", "Charlie"]; // `names` is an array of strings
let mixedArray: (string | number)[] = ["Alice", 42, "Bob"]; // `mixedArray` can contain both strings and numbers

// Object Type Annotation
let user: { name: string; age: number } = {
    name: "Alice",
    age: 30
}; // `user` is an object with properties `name` (string) and `age` (number)

// Function with Object Type Annotation
function createUser(user: { name: string; age: number }): { name: string; age: number } {
    return {
        name: user.name,
        age: user.age
    }; // The function takes an object with `name` and `age` properties and returns the same type of object
}


// Example of a type annotation for an array of objects with a 'sku' property
// The type annotation specifies that 'rows' is an array of objects, where each object has a 'sku' property of type string.
const rows: Array<{ sku: string }> = [{sku: 'A' }, { sku: 'A' }, { sku: 'B' }]; 