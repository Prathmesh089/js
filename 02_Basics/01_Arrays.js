const myArr = [0,1,2,3,4,5]

// Arrray methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.include(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

//slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 4)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("c", myArr)