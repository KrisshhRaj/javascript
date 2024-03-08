let score = "33abc"              

console.log(typeof score)

let valueInNumber = Number(score) //score converted to number 100% suretity
console.log(typeof  valueInNumber)// checking type of valueInNumber
console.log( valueInNumber)

/* though 33abc is not a pure  number becz abc is a string but if we use 
   valueInNumber it converted  in javascript but if we see in actually it is NaN
   (not a number) NaN ia a special type and we can check wheather value  given
    is not NaN
*/

/* if score is equal to :
                        33 conerted to 33(number)
                        33abc converted to NaN
                        true converted to 1 and false converted to 0
                        null converted to 0
                        undefined converted to NaN
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//   1     => true
//   0     => false
//   ""    =>false(empty string)
// "krish" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)