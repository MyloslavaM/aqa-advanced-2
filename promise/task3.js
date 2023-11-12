// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await
const urlToDo = 'https://jsonplaceholder.typicode.com/todos/1'
const urlUser = 'https://jsonplaceholder.typicode.com/users/1'
async function fetchTodo(){
    const response = await fetch(urlToDo)
    const jsBody = await response.json()
    return jsBody

}
fetchTodo()
async function fetchUser(){
    const response = await fetch(urlUser)
    const jsBody = await response.json()
    return jsBody
}
fetchUser()

const fetchUserData = async () => {
    try {
        const [toDo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('To Do: ', toDo);
        console.log('User: ', user);
    } catch (error) {
        console.log('Error: ', error);
    }
  };
fetchUserData();
const featchFirstUserData = async() => {
    try{
      const result = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Result, first to resolve: ', result)
  } catch(error){
    console.log('Error: ', error)
  }}
  featchFirstUserData();