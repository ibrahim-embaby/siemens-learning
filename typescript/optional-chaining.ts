type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
let customer2 = getCustomer(0);

console.log(customer?.birthday); // output => 2025-03-05T10:50:40.926Z
console.log(customer2?.birthday); // output => undefined
// ? => optional property access operator

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log("a"); // output => TypeError: log is not a function
log?.("a");
