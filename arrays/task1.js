//Відстеження кількості позитивних, негативних та нульових чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
const positiveCount = numbers.filter((number) => number >= 1)
const negativeCount = numbers.filter((number) => number <= -1)
const zeroCount = numbers.filter((number) => number === 0)

console.log(positiveCount.length)
console.log(negativeCount.length)
console.log(zeroCount.length)
