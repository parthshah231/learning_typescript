
// named functions
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(add(1, 2));

// anonymous functions (arrow functions)
const subtract = (num1: number, num2: number): number => num1 - num2;
console.log(subtract(1, 2));

// function expression
const multiply = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiply(1, 2));

// optional parameters
// function add(num1: number, num2: number, num3?: number): number {
//     return num3 ? num1 + num2 + num3 : num1 + num2;
// }
// console.log(add(1, 2, 3));

// default parameters
// function add(num1: number, num2: number, num3: number = 10): number {
//     return num1 + num2 + num3;
// }
// console.log(add(1, 2));

// rest parameters
function add(num1: number, num2: number, ...num3: number[]) : number{
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers: number[] = [5,6,7];
// console.log(add(2,3, ...numbers));
console.log(add(2,3,4,5,6,7,8));  // it will convert 4,5,6,7,8 => [4,5,6,7,8]

// generic types
function getItems<T>(items: T[]) : T[]{
    return new Array<T>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatStr = getItems<string>(["a", "b", "c", "d"]);

// use tsc to compile, when compiled, it will create a functions.js file
// node functions to run the js file
 