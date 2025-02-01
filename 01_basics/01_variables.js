const accountId = 14453
let accountEmail = "vinay@google.com"
var password = "12345"
accountCity = "kalanaur"
let accountState;

//accountId = "Jaipur" // This is not allowed because of constant

accountEmail = "vi@vi.com"
password = "212121"
accountCity = "Gurdaspur"

console.log(accountId);

/*
prefer not to use var
becuase of issue in block scope and functional scope
*/ 

console.table([accountId, accountEmail, password, accountCity, accountState]);