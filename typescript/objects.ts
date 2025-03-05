// Defining an object without specifying all its properties
let employee = { id: 1 };
employee.name = "Mosh"; // Compilation Error => Property 'name' does not exist on type '{ id: number; }'

// Defining an object with explicit type definition (all properties required)
let employeeWithType: { id: number; name: string } = {
  id: 1,
  name: "Mosh",
}; // This object must include both 'id' and 'name'

// Defining an object with optional properties
let employeeWithOptional: { id: number; name?: string } = {
  id: 1,
}; // The 'name' property is optional

// Example of an optional property being used
employeeWithOptional.name = "Mosh";

// Defining an object with readonly properties
let employeeWithReadOnly: { readonly id: number; name: string } = {
  id: 1,
  name: "Mosh",
};

employeeWithReadOnly.id = 2; // Compilation Error => Cannot assign to 'id' because it is a read-only property.

// Defining an object with methods
let employeeWithMethods: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire(date: Date) {
    console.log(date);
  },
};

employeeWithMethods.retire(new Date("01-1-2025"));
