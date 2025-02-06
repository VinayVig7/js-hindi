const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros);// Ye dc_heros ko marvel_heros valey array me push krdey ga marvel mei phle 3 item thi fir 4 ho jaye gi
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros); // ye bhi theek treeka hai lekin ek or bdia treeka hai spread vala
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]; // spread vala treeka or bhi add krsktey hai using , ...
// console.log(allNewHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);  // sbhi items array ki jo array hai ousey ek mei laa dia
// console.log(real_another_array);

console.log(Array.isArray("Vinay"));
console.log(Array.from("Vinay"));
console.log(Array.from({name: "Vinay"})); //Intresting mdn se dkho.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



