// Sin currying
function sumThreeNumbersOne(a, b, c) {
  return a + b + c
}
console.log(sumThreeNumbersOne(1,2,3))

// Con currying
function sumThreeNumbersTwo(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
console.log(sumThreeNumbersTwo(1)(2)(3))