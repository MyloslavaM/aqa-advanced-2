// Завдання 2
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом 
// https://jsonplaceholder.typicode.com/todos/1
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// https://jsonplaceholder.typicode.com/users/1
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
//Присвойте значення отримані від цих виразів до змінних
function fetchToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())

}

function fetchUser() {
   return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
}
const fetchUserData = async () => {
  try {
      const [toDo, user] = await Promise.all([fetchToDo(), fetchUser()]);
      console.log('To Do: ', toDo);
      console.log('User: ', user);
  } catch (error) {
      console.log('Error: ', error);
  }
};
fetchUserData();

const featchFirstUserData = async() => {
  try{
    const result = await Promise.race([fetchToDo(), fetchUser()]);
    console.log('Result, first to resolve: ', result)
} catch(error){
  console.log('Error: ', error)
}}
featchFirstUserData();