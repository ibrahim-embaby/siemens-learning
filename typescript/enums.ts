// Enum is a list of related constants
const small = 1;
const medium = 2;
const large = 3;

// We can define the last 3 variables by using enum:
enum Size {
  Small = 1, // Enums assign the first element a value of 0. When the value is reassigned to 1, the subsequent elements increment by 1.
  Medium,
  Large,
}

// We can set string values, but we must assign a value to each element.
enum Size_2 {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Medium; // outputs 2
