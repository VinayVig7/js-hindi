const name = "Vinay";
const repoCount = 50;

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc');

// console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());//change jo hua yha vo copy value mei hua nah ki original mei becuase ye primitive hai
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "     Vinay    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vinay.com/vinay%20vinay";
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

let gamePlayer = "Vinay-Chetan-Manjinder-Ronaldo";
console.log(gamePlayer.split('-'));
//Like these there are many other methods. Mdn ke through dekh sktey hai or ya fir console mei ja kr bhi 







