class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User who logged is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new user("Vinay");
const tea = new teacher("Pluto", "email@email.com", "1234");

tea.logMe();

console.log(chai instanceof user);
console.log(chai instanceof teacher);
console.log(tea instanceof user);// sb pta chl jaye ga after seeing in console.