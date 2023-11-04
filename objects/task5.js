// Перебір властивостей об'єкта
const user1 = {
    name: 'Alis',
    age: 37,
    car: 'Nisan'
}
const user2 = {
    name: 'Ben',
    age: 36,
    car: 'Volvo'
}
const user3 = {
    name: 'Mila',
    age: 32,
    car: 'Alfa Romeo'
}
const users = [user1, user2, user3]
for (const {name, age, car} of users) {
    console.log(`${name} is ${age} years old, driving ${car}`)
}