// arrays // 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Jay", "Ronnie"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Arrays  Methods // 

// myArr.push(9);
// myArr.push(11);
// myArr.pop();

// myArr.unshift(19);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); //This will convert array into string form you  can check in output by using typeof
// console.log(myArr);
// console.log(newArr);

console.log("A: ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B: ", myArr);

const myn2 = myArr.splice(1, 3); // ye delete krde ga value starting index de ge fir baki dousr value jitni items remove krni hai
console.log(myn2);
console.log("C: ", myArr);


