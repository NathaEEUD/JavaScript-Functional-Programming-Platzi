// Closures
function buildsum(a) {
  return function(b) {
    return a + b
  }
}

const addFive = buildsum(5)
console.log(addFive(5)) // 10

// Closures with Arrow Functions
// const buildsum = a => b => a + b