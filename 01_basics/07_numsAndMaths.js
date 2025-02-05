const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4))

const hundreds = 100000000;
console.log(hundreds.toLocaleString());// by default ye america vala krey ga but apko indian chahihye to toLocaleString('en-IN')


//+++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-2));//Returns the absolute value of a number 
// (the value without regard to whether it is positive or negative). For example, 
// the absolute value of -5 is the same as the absolute value of 5.

// console.log(Math.round(2.6));
// console.log(Math.ceil(2.6));
// console.log(Math.floor(2.6));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
 console.log(Math.floor(Math.random() * (max - min + 1)) + min);
 











