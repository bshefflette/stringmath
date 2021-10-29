// Implement a function to multiple two numbers(they can be 100 digits) stored in two string:

function MultiplyBy(s1, s2) {
    if (s1 === "" || s1 === "0" || s2 === "" || s2 === "0") {
        return "0"
    }
    let resFactor = {}
    let ls1 = s1.length
    let ls2 = s2.length
    // multiply each number by each number individually
    // store the results with a resFactor that mimic 10^n notation
    for (let i = 0; i < ls1; i++) {
        for (let j = 0; j < ls2; j++) {
            let currFactor = (ls1 - 1 - i) + (ls2 - 1 - j)
            if (resFactor[currFactor] === undefined) {
                resFactor[currFactor] = 0
            }
            let product = s1[i] * s2[j]
            resFactor[currFactor] += product
        }
    }

    let res = ""
    let resLength = Object.keys(resFactor).length
    let curr = 0
    let remainder = 0
    let digit = 0
    for (let k = 0; k < resLength; k++) {
        curr = remainder + resFactor[k]
        digit = curr % 10
        res = String(digit) + res
        remainder = Math.floor(curr / 10)
    }

    return res
}






// console.log(MultiplyBy("12", "10"))
// console.log(MultiplyBy("123", "456"))
// console.log(MultiplyBy("123", "406"))
// console.log(MultiplyBy("120322", "41"))
// console.log(MultiplyBy("12322", "4"))
// console.log(MultiplyBy("12322", "0"))




