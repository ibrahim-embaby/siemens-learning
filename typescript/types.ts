// ==============================
// 1. Type Aliases
// ==============================
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ==============================
// 2. Union Types
// ==============================
// Function that accepts either a number or a string and converts kg to lbs
function kgToLbs(weight: number | string): number {
  // Type narrowing: Check if 'weight' is a number or string before processing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(2); // output => 4.4
kgToLbs("2kg"); // output => 4.4

// ==============================
// 3. Intersection Types
// ==============================
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ==============================
// 4. Literal Types
// ==============================
// Defining a type that allows only specific values
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// ==============================
// 5. Nullable Types
// ==============================
// Function that accepts a string or null and prints an uppercase name or a fallback greeting
function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet("mosh"); // output => MOSH
greet(null); // output => Hola!
