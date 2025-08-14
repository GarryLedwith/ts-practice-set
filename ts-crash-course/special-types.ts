/*
TypeScript has special types that can or cannot be assigned to a specific type of data. These special types include:
- `any`: Represents any type of value. It can be assigned to any variable, and it can hold any type of data. This is useful when you don't know the type of a variable
  or when you want to allow any type of data.
- `unknown`: Similar to `any`, but it requires type checking before performing operations on it. It is safer than `any` because it forces you to check the type before using it.        
- `never`: Represents a value that never occurs. It is used for functions that throw an error or have infinite loops. It indicates that the function will not return a value.
These special types are useful for handling dynamic data, ensuring type safety, and defining functions that do not return a value.
They are particularly useful in scenarios where the type of data is not known at compile time or when you want to enforce stricter type checks.

*/ 

// Example of using `any` type
let data: any = "Hello, World!"; // `data` can hold any type
data = 42; // Now `data` is a number
data = { name: "Alice" }; // Now `data` is an object

// Example of using `unknown` type
let value: unknown = "Hello, World!"; // `value` can hold any type
// value = 42; // This is allowed
// value = { name: "Alice" }; // This is also allowed
// Type checking is required before using `value`
if (typeof value === "string") {    console.log(value.toUpperCase()); // Safe to use as a string
}
if (typeof value === "number") {
    console.log(value.toFixed(2)); // Safe to use as a number
}       

// Example of using `never` type
function throwError(message: string): never {
    throw new Error(message); // This function never returns a value
}
function infiniteLoop(): never {
    while (true) {
        // This function never exits
    }
}   

