/*
Arrays in TypeScript
Arrays are a collection of elements that can be of the same type or different types. TypeScript provides a way to define arrays with specific types, enhancing type safety and ensuring that the elements in the array conform to the expected type.
TypeScript supports both fixed-length and variable-length arrays, allowing developers to create arrays that can hold a specific number of elements or an arbitrary number of elements.
Arrays can be used to store lists of items, such as numbers, strings, or objects. They are particularly useful for handling collections of data, such as user inputs, API responses, or any other structured data that needs to be processed in a sequential manner.
TypeScript provides various methods and properties for working with arrays, such as `push`, `pop`, `shift`, `unshift`, and more.    


*/

// Example of a simple array
let numbers2: number[] = [1, 2, 3, 4, 5]; // An array of numbers
let names2: string[] = ["Alice", "Bob", "Charlie"]; // An array of strings

// Example of a mixed-type array
let mixedArray2: (string | number)[] = ["Alice", 42, "Bob"]; // An array that can contain both strings and numbers

// Example of generic array type
let genericArray: Array<string> = ["Alice", "Bob", "Charlie"]; // Using generic type syntax


// Accessing elements in an array
console.log(numbers2[0]); // Accessing the first element (1)
console.log(names2[1]); // Accessing the second element ("Bob")