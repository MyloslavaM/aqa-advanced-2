// Оголошення та виклик функції
// function declaration
function calculateRectangelArea(width, height) {
   return width * height

}
const rectangleArea = calculateRectangelArea(5,10)
console.log("Rectangle area is: ", rectangleArea)

// function expression
const  calculateRectangelArea2 = function (width, height) {
    return width * height
}
console.log(calculateRectangelArea2(3,7))

// arrow functions
const calculateRectangelArea3 = (width, height) => {
    return width * height
}
console.log(calculateRectangelArea3(7,7))

// arrow function simple
const calculateRectangelArea4 = (width, height) => width * height

console.log(calculateRectangelArea4(7,9))