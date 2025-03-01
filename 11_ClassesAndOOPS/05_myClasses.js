// ES6
//ye hmne niche classes to bna di lekin hmey pta hai javascript kaisey work krti hai behind the scene sb khel prototype ka hai
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    usernameUpperCase(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User('Vinay', 'example@example.com', '1234');
console.log(chai.encryptPassword());
console.log(chai.usernameUpperCase());

//Behind the scenes

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User2.prototype.usernameUpperCase = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User2('Vinay', 'example@example.com', '1234'); //bhiya new lgana mt bhool jana 
console.log(tea.encryptPassword());
console.log(tea.usernameUpperCase());
