/*
An enum is a special "class" that represents a group of constants (unchangeable variables). Enums allow you to define a set of named values, which can be used to represent a collection of related constants in a more readable way.
Enums are particularly useful when you have a fixed set of related values, such as days of the week, directions, or status codes. They help improve code readability and maintainability by providing meaningful names for these constants instead of using arbitrary numbers or strings.
Enums can be defined using the `enum` keyword, followed by the name of the enum and its members. Each member can be assigned a specific value, or TypeScript will automatically assign numeric values starting from 0.
Enums can be used in TypeScript to create more structured and type-safe code, making it easier to work with sets of related constants.
Enums can be numeric or string-based. Numeric enums are the default, where each member is assigned a numeric value starting from 0. String enums allow you to assign specific string values to each member, providing more clarity and avoiding potential issues with implicit numeric conversions.

*/

// Example of numeric enum - default behavior
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}   

// Example of a numeric enum - initialized with specific values
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}  

// Numeric enums - fully initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);