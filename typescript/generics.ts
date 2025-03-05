// 1- Generic Function Example
function getFirstElement<ElementType>(arr: ElementType[]): ElementType {
  return arr[0];
}

const firstNum = getFirstElement<number>([1, 2, 3, 4]);
const firstStr = getFirstElement<string>(["ahmed", "omar", "saleh"]);
console.log(firstNum, ", ", firstStr); // output => 1, ahmed

// 2- Generic Type Example with ApiResponse
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "kyle",
    age: 25,
  },
  isError: false,
};

// 3- Generic Type with Default Value
// - If `Data` is not provided, it defaults to `{ status: number }`.
type ApiResponse2<Data = { status: number }> = {
  data: Data;
  isError: boolean;
};

const response2: ApiResponse2 = {
  data: {
    status: 200,
  },
  isError: false,
};

// 4- Restricting Generics with `extends`
// - `extends object` ensures that `Data` must be an object.
type ApiResponse3<Data extends object> = {
  data: Data;
  isError: boolean;
};

const response3: ApiResponse3<{ name: string }> = {
  data: {
    name: "kyle",
  },
  isError: false,
};

// 5- Restricting Generics with `extends` + Default Value
// - Combines generic constraints (`extends object`) with a default value.
type ApiResponse4<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const response4: ApiResponse4 = {
  data: {
    status: 200,
  },
  isError: false,
};
