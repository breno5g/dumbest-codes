type Union = string | number;

let arr: string[] = [];

function foo(arr: Union[]) {
  arr.push(1);
}

foo(arr);

console.log(arr);
