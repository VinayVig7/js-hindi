class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    set password(value){
        this._password = value;
    }
    get password(){
        return this._password.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
    get email(){
        return this._email().toUpperCase();
    }
}

const tea = new user('vin@we.com', 'abc3');
console.log(tea.password);
