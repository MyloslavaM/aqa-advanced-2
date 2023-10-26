// Рекурсивна функція

function countDown(number){
    console.log(number)

    if(number >= 2){
        countDown(number -1)
    }
}
countDown(5)