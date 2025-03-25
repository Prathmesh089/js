const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Badman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)
// console.log(allheros[4])

// const allnewheros = [...marvel_heros, ...dc_heros]
// console.log(allnewheros)
// console.log(allnewheros[4])

const noArr = [1,2,3,[4,5,],[6,7,[8,9]]]
const clearArr = noArr.flat(3)
console.log(clearArr)