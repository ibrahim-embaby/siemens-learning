// Decorator: A function that allows you to hook in your source code and either extend the functionality of it or annotate it with metadata
// ==============================
// 1. Class Decorators
// ==============================
// function Controller(target: Function) {
//   console.log("decorator");
// }

// @Controller // output => decorator
// class Auth {}

// 1.1 -
// function BlogController(target: Function) {
//   target.prototype.endPoint = "/blog";
//   target.prototype.login = () => {
//     return "blog decorator";
//   };
// }

// @BlogController
// class Blog {}

// const blog = new Blog();

// //@ts-ignore
// console.log(blog.endPoint); // output => /blog

// //@ts-ignore
// console.log(blog.login()); // output => blog decorator

// // 1.2- Decorator Factory
// function GeneralController(endPoint: string) {
//   return (target: Function) => {
//     target.prototype.endPoint = endPoint;
//   };
// }

// @GeneralController("/api/books")
// class Book {}

// @GeneralController("/api/cars")
// class Car {}

// const book = new Book();

// // @ts-ignore
// console.log(book.endPoint); // output => /api/books

// const car = new Car();

// // @ts-ignore
// console.log(car.endPoint); // output => /api/cars

// // 1.3- Decorator Composition
// function FirstDecorator(target: Function) {
//   console.log("first decorator");
// }

// function SecondDecorator(target: Function) {
//   console.log("second.decorator");
// }

// @SecondDecorator
// @FirstDecorator
// class Test {}

// decorators run from bottom to top
// this outputs:
// first decorrtor
// second de oraFac

// ==============================
// 2. Method Decorators
// ==============================
// function logMethod(
//   originalMethod: Function,
//   context: ClassMethodDecoratorContext
// ) {
//   return function (this: any, ...args: any[]) {
//     console.log(`Calling ${String(context.name)} with`, args);
//     return originalMethod.apply(this, args);
//   };
// }

// class Example {
//   @logMethod
//   greet(name: string) {
//     return `Hello, ${name}!`;
//   }
// }

// const e = new Example();
// console.log(e.greet("Ibrahim")); // output => Calling greet with [ 'Ibrahim' ]
// // Hello, Ibrahim!

// ==============================
// 3. Accessor Decorators
// ==============================
// function logGetter(originalGetter: any, context: ClassGetterDecoratorContext) {
//   const propertyName = String(context.name);

//   return function (this: any) {
//     console.log(`Accessing ${propertyName}...`);
//     return originalGetter.call(this);
//   };
// }

// class User {
//   private _name: string = "Ibrahim";

//   @logGetter
//   get name() {
//     return this._name;
//   }
// }

// const userObj = new User();
// console.log(userObj.name); // Logs "Accessing name..." then "Ibrahim"

// ==============================
// 4. Property Decorators
// ==============================
// function Uppercase(target: undefined, context: ClassFieldDecoratorContext) {
//   return function (initialValue: string) {
//     return initialValue.toUpperCase();
//   };
// }

// class Person {
//   @Uppercase
//   name = "john doe";
// }

// const person = new Person();
// console.log(person.name); // output => JOHN DOE

// ==============================
// 5. Parameter Decorator
// ==============================
// function CheckPositive(
//   target: Function,
//   context: ClassMethodDecoratorContext<any>,
//   parameterIndex: number
// ) {
//   const methodName = context.name.toString();

//   context.addInitializer(function (this: any) {
//     const originalMethod = this[methodName].bind(this);

//     this[methodName] = function (...args: any[]) {
//       const value = args[parameterIndex];
//       if (typeof value === "number" && value <= 0) {
//         throw new Error(
//           `Parameter ${parameterIndex + 1} in ${methodName} must be positive`
//         );
//       }
//       return originalMethod(...args);
//     };
//   });
// }

// class Calculator {
//   squareRoot(@CheckPositive num: number): number {
//     return Math.sqrt(num);
//   }
// }

// const calc = new Calculator();
// console.log(calc.squareRoot(9)); // Works (output: 3)
// console.log(calc.squareRoot(-4)); // Throws error
