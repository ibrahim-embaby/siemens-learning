// function func_name (paramter: type): return_type {}
function calculateTax(income: number): number {
  return 0; // We should return a value of type number in this case, we can't return a value of other type than the function return type
  // return 's' => Compilation Error
}

// Optional Parameters
function calculateTax2(income: number, taxYear?: number): number {
  if (taxYear && taxYear < 2025) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax2(122566, 2022);
calculateTax2(232366);

// Default Values
function calculateTax3(income: number, taxYear = 2022): number {
  if (taxYear < 2025) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax3(122566, 2022);
calculateTax3(232366);
