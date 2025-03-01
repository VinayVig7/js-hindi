function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
/* Stack ki madad se smjo
dekho agr hm stack ki or dekhe to setusername function top pe ho ga 
jb vo apna kaam khtm krdey ga fir vo apna this bhi sath le jaye ga jis kaarn createuser mei vo apna kaam nhi krey ga
is karn call use krey ge so jb setusername jaye ga stack se vo apna sman createuser ko de kr jaye ga 
boley ga mai chla aab aap smbhalo kaam
*/