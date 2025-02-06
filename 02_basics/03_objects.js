//singleton
//Object.create


//+++++++++++Object Literals+++++++++++//

const mySym = Symbol("key1");

const JsUser = {
    name: "Vinay",
    "full name": "Vinay Vig",
    [mySym]: "mykey1",
    age: 18,
    location: "Kalanaur",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Vinay@outlook.com";
// Object.freeze(JsUser);
// JsUser.email = "Vinay@outlook2222.com"; // ab value change nhi ho gi kyuki freeze krdia hai
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

