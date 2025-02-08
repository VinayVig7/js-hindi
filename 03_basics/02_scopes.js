var c = 300;
let a = 200;

if(true){
    let a = 20;
    const b = 30;
    c = 90;
    console.log(`The value of inner a is ${a}`);   
};
console.log(`The value of outter a is ${a}`);// let mei global vala alg hai or block vala aalg hai 
console.log(c); // var ka ye drawback hai agr block scope mei change kro vo global scope valey var ki value change krdeta hai..

function scopeCheck(){
    const username = "Vinay";
    function innerScopeCheck(){
        const platform = "You Tube";
        console.log(`Username is ${username} and platform is ${platform}`);
    };
    // console.log(platform); // ye error hai kyu ki scope ke bahr use kia hai variable ko
    innerScopeCheck();
};

scopeCheck();


// +++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++

console.log(addOne(1)); // phle he call krdia hoisting ka concept hai aagey ja kr krey ge.
function addOne(num1){
    return num1 + 1;
};

// console.log(addTwo(1)); // ye error hai hoisting ka concept hai aagey ja kr krey ge.
const addTwo = function(num2){
    return num2 + 2;
};
console.log(addTwo(1));