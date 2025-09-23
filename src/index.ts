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

//Object
//Khai báo thông thường giống JS
const person = {
    name: "Gnort",
    age: 23,
    isAdmin: true,
    school: "EAUT",
    score: 3.01
};
//thêm type cho các key trong object
const personTyped: {
    name: string;
    age: number;
    isAdmin: boolean;
    school: string;
    score: number;
} = {
    name: "Gnort",
    age: 23,
    isAdmin: true,
    school: "EAUT",
    score: 3.01
}
//"?" optional: không bắt buộc phải có key đó
const personType: {
    name?: string;
    age?: number;
    isAdmin: boolean; //bắt buộc phải có
    school?: string;
    score?: number;
} = {
    isAdmin: true
}
console.log("Person: ", person);

//Array
const numbers: number[] = [1,2,3,4,5];
const strings: string[] = ["a","b","c"];
const booleans: boolean[] = [true, false, true];
const objects: object[] = [{name: "Gnort"}, {age: 23}];
const mixed: (string | number | boolean)[] = [1, "a", true, 2, "b", false];

//Array generic
const numbersGeneric: Array<number> = [1,2,3,4,5];
const stringsGeneric: Array<string> = ["a","b","c"];
const booleansGeneric: Array<boolean> = [true, false, true];
const objectsGeneric: Array<object> = [{name: "Gnort"}, {age: 23}];
const mixedGeneric: Array<string | number | boolean> = [1, "a", true, 2, "b", false];

for (const num of numbers) {
    console.log("Number: ", num);
}

//Union type
const info: (string | number | boolean)[] = [
    "football",
    "basketball",
    100,
    false
];

const ob: {
    name: string;
    grade: number | string;
    extra?: 
    | {
        name: string;
    }
    | {
        school: string;
    }
}[] = [
    {
        name: "Bui",
        grade: 100
    },
    {
        name: "Trong",
        grade: "200"
    }
]

//intersection type
//bat buoc extra phai co school va name
const ob1: {
    name: string;
    grade: number | string;
    extra?: 
    {
        school: string;
    }
    &
    {
        name: string;
    }
}[] = [
    {
        name: "Bui",
        grade: 100,
        extra: {
            name: "Trong",
            school: "EAUT"
        }
    },
    {
        name: "Trong",
        grade: "200",
        extra: {
            name: "The",
            school: "HDB"
        }
    }
]



