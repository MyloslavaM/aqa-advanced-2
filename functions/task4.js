// Обробка помилок за допомогою try-catch-finally
function divide(numerator, denominator){
    const result = numerator / denominator 
    try {
        if( typeof numerator !== 'number' || typeof denominator !== 'number' ||result <= 0) { 
            throw new Error("something went wrong")
         } else{
            
         }

    }catch (e){
        console.log(e.message)
         }
    
    console.log(result)
    return(result)

}
divide(5,0)
divide(3, "e")


