const user = {
    username: "Vinay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
};
// user.welcomeMessage(); // yha pe dekhna ki this user object ki properties btaye ga
// user.username = "Sam";
// user.welcomeMessage();

console.log(this); // ye empty object aaye ga agr aap browser ke console mei likhey ge vha window ka object aaye ga kyuki ousme global scope window ka hai


// function chai()
// {
//     let username = "Vinay";
//     console.log(this.username);
// };

// chai(); // yha this undefined return krey ga 

// const chai = function(){
//     let username = "Vinay";
//     console.log(this.username);
// };

// chai();  //yha bhi this undefined return krey ga 

const chai = () => {
    let username = "Vinay";
    console.log(this);
    
}

// chai(); //yha empty object krey ga koi lexical scope ka chakr hai aagey ja kr krey ge abhi ke liye bs arrow function pe focus kro.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }  //ek ye treeka hai ye.  In a block body, you must use an explicit return statement

// const addTwo = (num1, num2) =>  num1 + num2 // dousra ye hai. In an expression body, only a single expression is specified, which becomes the implicit return value

// const addTwo = (num1, num2) => ( num1 + num2 ) // 3rd ye vala. In an expression body, only a single expression is specified, which becomes the implicit return value
// jb () valey brackets use ho to return likhne ki jrrort nhi ye implicit treeka hai.

const addTwo = (num1, num2) => ({username: "hitesh"}); // agr hm yha () nhi lgaye ge to return nhi ho ga kyuki vo explicit ho jaye ga or explecit mei return likhna pdta hai return krvaney ke liye


console.log(addTwo(3, 4));
