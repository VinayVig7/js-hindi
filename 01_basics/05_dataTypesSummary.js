// typeof "John"          // Returns "string"
// typeof ("John"+"Doe")  // Returns "string"
// typeof 3.14            // Returns "number"
// typeof (33 + 66)       // Returns "number"
// typeof NaN             // Returns "number"
// typeof 1234n           // Returns "bigint"
// typeof true            // Returns "boolean"
// typeof false           // Returns "boolean"
// typeof {name:'John'}   // Returns "object"
// typeof [1,2,3,4]       // Returns "object"
// typeof {}              // Returns "object"
// typeof []              // Returns "object"
// typeof new Object()    // Returns "object"
// typeof new Array()     // Returns "object"
// typeof new Date()      // Returns "object"
// typeof new Set()       // Returns "object"
// typeof new Map()       // Returns "object"
// typeof function () {}  // Returns "function"
// typeof x               // Returns "undefined"
// typeof null            // Returns "object"


// Primitive (call be value)

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

let anyValue = null; //Typeof null is object 

// Non Primitive (call by referance)

// Arrays, Objects, Functions

let heros = ["Shaktiman", "Nagraj", "Veer"]
let myObj = {
    name: "Vinay",
    age: 22,
}
const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof anyValue);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunc); 

//Javascript static or dyanmic language
// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Stack and heap memory
//Stack = Primitive & Heap = Non-Primitive

let myYouTubeName = "vinaydotcom";
let anotherName = myYouTubeName;
anotherName = "vinayvig";

console.log(myYouTubeName);
console.log(anotherName); // Is se ye pta chlta hai ki primitive vaaley mei jb value esey assign krtey hai to copy assign hoti hai
//original value nhi aati ek copy bn kr jaati hai is karn jb anotherName change kia to myYouTubeName change nhi hua.

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "Vinay@google.com";
console.log(userOne.email);
console.log(userTwo.email);// isme original value he jaati hai matlb ki direct reference jata hai jis kaarn aagr hm ek mei change
//krey ge dousrey mei bhi change ho jaye ga.


