class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(this.username);
    }

    static createId(){
        return 123;
    }
}

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}
const tea = new teacher('vinay', 'vinay@jok.com');
tea.logMe();
//kconsole.log(tea.createId());// ye error de ga kyuki static hai koi bhi child parent kisi ko bhi access nhi hai iska