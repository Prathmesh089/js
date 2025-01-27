let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))

 let valueInNumber = Number(score)
//  console.log(typeof valueInNumber)
//  console.log(valueInNumber)

 let isLoggedIn = 0

 let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn)

 //**********************Operations*****************************/

let value = 3
let negValue = -value
// console.log(negValue)

let userOne ={
    email:"user@google.com",
    upi: "user@bly"
}

let user2 = userOne

user2.email = "prathm@gmail.com"

console.log(userOne.email)
console.log(user2.email)