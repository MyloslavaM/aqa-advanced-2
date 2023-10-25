//Засоби валідації
function AgeVerification (age){

     if(age >= 18){
        const isAdult = true
        console.log('The user is not adult')
     } else {
        const isNotAdult = false
        console.log('The user is adult')
     }



}
AgeVerification(25)
AgeVerification(15)