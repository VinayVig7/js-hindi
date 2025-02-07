// const tinderUser = new Object();  //This is singleton
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "vinay",
            lastName: "vig"
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName);// ye jo mainey ? use kia hai ye aagey ja kr depth mei smj aye ga 
// abhi ke liye itna smjlo ki agr fullName object mei nhi hota to bina error ke vo aagey vali value consider krleta. Dousrey
// treekey se bhi kr sktey hai ouskey liye if else lgani pdey gi ye thora short hai

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2, obj3}; // is treeker se to object mei object aa jaye ge

const obj4 = Object.assign({}, obj1, obj2, obj3); //{} jo ye khali vala hai ye target source hai ek empty object lia hai 
// const obj4 = Object.assign(obj1, obj2, obj3); //aagr aap phle mei he obj1 bhejde ge fir vo target ho jaye ga source or ousmey value chley jai gi
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3};//easy treeka ye vala spread vala.
// console.log(obj5);

const userArr = [
    {
        id: "abc",
        email: "v@g.com"
    },
    {
        id: "abc",
        email: "v@g.com"
    },
    {
        id: "abc",
        email: "v@g.com"
    },
    {
        id: "abc",
        email: "v@g.com"
    }
]
userArr[0].email; // array ke andr object bna sktey hai or esey access kr sktey hai.

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // ye sb properties output mei dekhey array ki form mei aa rhy hai.
console.log(Object.values(tinderUser)); // ye sb properties output mei dekhey array ki form mei aa rhy hai.
console.log(Object.entries(tinderUser)); // ye sb properties output mei dekhey array ki form mei aa rhy hai.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//Abhi ke liye itna he objects baki aagey pdey ge jb loops vgera bhi krey ge.
