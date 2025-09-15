//number
const age: number = 23;

//string
const userName: string = "Gnort";

//boolean
const isAdmin: boolean = true;
//Error: 
//const isOld: boolean = age > 20 ? "Yes" :"No";
//Solution:
const isOldCorrect: boolean = age > 20 ? true : false;
if(isAdmin) {
    console.log("You have access, Welcome Admin!");
}else {
    console.log("Access Denied, You are not Admin!");
}
console.log(`My name is ${userName} and My age is ${age}`);

let keyboard: undefined;
let mouse: null;

//unknown dành cho những biến hoặc params mà chúng ta chưa xác định được type là gì
let input: unknown;
//ở đây input vẫn hiểu là unkown
input = 3;
//kiểm tra type trước khi gán giá trị
console.log("Type is: ", typeof input);
//khi kiểm tra type thì input sẽ hiểu là number
if(typeof input === "number") {
    const result = input + 3;
    console.log("Result: ", result);
}

function sum(a: unknown, b: unknown){
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }else if (typeof a === "string" && typeof b === "string") {
        return "a and b are string, cannot calculate";
    }else {
        return "Type not number or string, not support";
    }
}
console.log("Sum: ", sum(2,3));
console.log("Sum: ", sum("2","3"));
console.log("Sum: ", sum("2",3));

//function trả về type nhất định
function add(a: number, b: number): number {
    return a + b;
}
//void -> function không trả về giá trị
function print(value: any): void {
    console.log("Value: ", value);
}
//never -> function không bao giờ trả về giá trị
function throwError(message: string): never {
    throw new Error(message);
}
function notification(message: string): string {
    return message;
}
console.log("Notification: ", notification("You have a new message!"));






