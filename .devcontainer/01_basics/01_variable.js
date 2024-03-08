const accountId = 14453
let accountEmail = "krish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountId = 2//not allowed

accountEmail = "raj@google.com"
accountPassword = "23456"
accountCity = "Bihar"
console.log(accountId);

/*
Prefer not to use var
because of issue in block space and functional space
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);
