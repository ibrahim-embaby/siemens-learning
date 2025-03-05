// Tuple is a fixed length array and each element has a particular type
// If I have a user with an id of 1 and his name is "Mosh", I can express this with a tuple like this:
let user: [number, string] = [1, "Mosh"];

let user_wrong: [number, string] = [1, "Mosh", 0]; // this giving a compilation error

// When I access each element of the user tuple, I can see all the methods associated with its type.
// user[0].toExponential()
// user[0].toFixed()
// user[0].toLocaleString()
// user[0].toPrecision()
// user[0].toString()
// user[0].valueOf()

// user[1].at()
// user[1].charAt()
// user[1].concat()
// user[1].endsWith()
// user[1].includes()
// ...
