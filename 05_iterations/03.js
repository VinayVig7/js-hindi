//for of vala loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATES OF AMERICA');
map.set('FR', 'FRANCE');
map.set('IN', 'INDIA');   // Map mei unique value he jaati hai to ye nhi jaye gi bs update ho jaye gi 

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
    
    
}// agr hm sedha const key of map likhdey ge fir hmey array ki form mei values miley gi is kaarn [] ye jrrori hai
