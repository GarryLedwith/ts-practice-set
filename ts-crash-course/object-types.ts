/*
TypeScript has a specific syntax for defining object types, which allows developers to create structured data types with specific properties and their corresponding types. This is particularly useful for defining complex data structures and ensuring type safety in applications.
Object types in TypeScript are defined using the `type` or `interface` keywords, allowing you to specify the shape of an object, including its properties and their types. This helps in creating clear and maintainable code by enforcing type checks at compile time.
Object types can be used to define the structure of data, such as API responses, configuration objects, or any other structured data that your application needs to handle. They are essential for ensuring that the data adheres to a specific format, making it easier to work with and reducing the likelihood of runtime errors.


*/

// Example of defining an object type in TypeScript
const car: { make: string, model: string, year: number } = {
    make: "Sedan",
    model: "Toyota Camry",
    year: 2020
}; 

// This defines a car object with specific properties and their types
// The `make` and `model` are strings, while `year` is a number

