// Додавання та видалення властивостей
const person = {
    firsName: 'Sheldon',
    lastName: 'Cooper',
    age: 33
}
person.email = 'cooper@gmail.com'
delete person.age
console.log(person)